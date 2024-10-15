import React from "react";
// import Image from "next/image";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import LyraLogo from "@/components/lyra-logo";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { getSortedMDData, MDData } from '@/lib/posts';

export default function Page() {
  return (
    <BlogContent />
  );
}

function BlogContent(){
  // npx shadcn-ui@latest add resizable
  return(
    <section className="container flex flex-col">
      {/* <BlogHero /> */}
      <BlogPostList className="container"/>
    </section>
  );
}

// function BlogHero(){
//   return(
//     <div className={cn(
//       "mb-8",
//     )}>
//       <div className={cn(
//         "px-5 flex flex-row gap-5 justify-start align-middle",
//         "bg-gradient-to-br from-background/50 to-transparent",
//         )}>
//         {/* <LyraLogo /> */}
//         <div className="my-auto uppercase font-title font-extrabold [text-shadow:_0_0_10px_#00000050]">
//           <h1></h1>
//         </div>
//       </div>
//     </div>
//   );
// }

async function BlogPostList({className}: {className: string}){
  const posts = await getSortedMDData();
  return(
    <div className={cn(
      "mt-0 p-0 flex flex-col flex-wrap justify-evenly gap-3",
      className,
      )}>
      {posts.map((post, index) => (
          <BlogPostCard key={index} postData={post} />
      ))}
    </div>
  );
}

function BlogPostCard({postData}: {postData: MDData}) {
  return(
    <Link href={`/list/${postData.slug}`} className="max-w-screen">
    {/* <Link href={`/blog/${postData.slug}`} className="w-screen lg:w-[47%]"> */}
      <div className={cn(
        "bg-muted/50 h-full p-0 rounded-xl overflow-hidden",
        )}>

        <div className="p-5 h-full">
          <div className="drop-shadow-[0_0_10px_#000000]">{postData.title}</div>
        </div>


      </div>
    </Link>
  );
}
