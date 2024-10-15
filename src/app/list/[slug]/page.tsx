import React from "react";
import ReactMarkdown from 'react-markdown';
import { getOneMDData, MDData } from '@/lib/posts';
// import { ArrowLeft } from "lucide-react";
// import { cn } from "@/lib/utils";
import LyraLogo from "@/components/lyra-logo";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default async function Page({ params }: { params: { slug: string } }) {
  const postData = await getOneMDData(params.slug);
  return (
    <div className="flex flex-col lg:flex-row gap-5 w-full">
      <div className="p-5 flex flex-col gap-5 w-full">
        <MDHero postData={postData} />
        <BlogMDContent postData={postData} />
      </div>
    </div>
  );
}

function MDHero({ postData }: { postData: MDData }) {
  // const imgSrc = postData.imageSrc || "/blog-placeholder.jpg";
  return (
    <div className="flex flex-row gap-3 align-baseline justify-start w-full">
      <LyraLogo className="max-w-[100px] fill-muted-foreground" />
      <h1 className="text-balance text-5xl font-bold [text-shadow:_0_3px_20px_#00000090]">{postData.title}</h1>
    </div>
);
}

async function BlogMDContent({ postData }: { postData : MDData }) {
  return(
    <div className="w-full p-5 text-2xl tracking-wide leading-relaxed rounded-lg">
      <ReactMarkdown className={"markdown lg:max-w-[80%]"} >{postData.markdown}</ReactMarkdown>
    </div>
  );
}