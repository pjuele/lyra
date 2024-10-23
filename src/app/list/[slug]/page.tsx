import React from "react";
import ReactMarkdown from 'react-markdown';
import { getOneMDData, MDData } from '@/lib/posts';
// import { ArrowLeft } from "lucide-react";
// import { cn } from "@/lib/utils";
import LyraLogo from "@/components/lyra-logo";
import Link from "next/link";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default async function Page({ params }: { params: { slug: string } }) {
  const postData = await getOneMDData(params.slug);
  return (
    <div className="flex flex-col lg:flex-row gap-5 w-full mb-20">
      <div className="flex flex-col gap-10 w-full">
        <MDHero postData={postData} />
        <BlogMDContent postData={postData} />
      </div>
    </div>
  );
}

function MDHero({ postData }: { postData: MDData }) {
  // const imgSrc = postData.imageSrc || "/blog-placeholder.jpg";
  return (
    <div className="flex flex-col gap-10 align-baseline justify-start w-full">
      <Link href="/list">
        <LyraLogo className="max-w-[100px] fill-muted-foreground" />
        </Link>
      <h1 className="text-balance text-5xl font-title [text-shadow:_0_3px_20px_#00000090]">{postData.title}</h1>
      <small className="text-balance">{postData.author}</small>
    </div>
);
}

async function BlogMDContent({ postData }: { postData : MDData }) {
  return(
    <div className="w-full text-2xl tracking-wide leading-relaxed rounded-lg">
      <ReactMarkdown className={"markdown lg:max-w-[80%]"} >{postData.markdown}</ReactMarkdown>
    </div>
  );
}
