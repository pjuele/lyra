import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type MDData = {
  id: string;
  title: string;
  language: string;
  slug: string;
  markdown: string;
};

const mdDirectory = path.join(process.cwd(), "md");

export async function getSortedMDData(): Promise<MDData[]> {
  // Get file names under /md
  const fileNames = fs.readdirSync(mdDirectory);
  const allMDData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(mdDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    } as MDData;
  });
  return allMDData;
  // // Sort md by date
  // return allMDData.sort(({ date: a }, { date: b }) => {
  //   if (a < b) {
  //     return 1;
  //   } else if (a > b) {
  //     return -1;
  //   } else {
  //     return 0;
  //   }
  // });
}

export async function getOneMDData(slug: string): Promise<MDData> {
  // Read markdown file as string
  const fullPath = path.join(mdDirectory, slug + ".md");
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Combine the data with the id
  return {
    id: slug,
    ...matterResult.data,
    markdown: matterResult.content,
  } as MDData;
}
