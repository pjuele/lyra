import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { getSortedMDData, MDData } from '@/lib/posts';
import LyraLogo from "@/components/lyra-logo";

export default function Page() {
  return (
    <BlogContent />
  );
}

function BlogContent(){
  return(
    <section className="p-10 container flex flex-row flex-wrap gap-5">
      <BlogHero />
      <BlogPostList/>
    </section>
  );
}

function BlogHero(){
  return(
    <div className={cn(
      "flex flex-row flex-wrap gap-5 justify-start align-middle",
      )}>
      <LyraLogo className="max-w-[100px] fill-muted-foreground" />
    </div>
  );
}

// async function BlogPostList({className}: {className: string}){
async function BlogPostList(){
  const posts = await getSortedMDData();
  return(
    // <div className={cn(
    //   "flex flex-row flex-wrap justify-evenly gap-3",
    //   className,
    //   )}>
    <>
      {posts.map((post, index) => (
          <BlogPostCard key={index} postData={post} />
      ))}
      </>
    // </div>
  );
}

function BlogPostCard({postData}: {postData: MDData}) {
  return(
    <Link href={`/list/${postData.slug}`} className="min-w-max max-w-max">
      <div className={cn(
        "bg-muted/50 h-full p-5 rounded-xl border-2",
        )}>
        <div className="flex flex-row gap-2 font-title text-2xl">
          <LanguageIcon language={postData.language as string} />
          {postData.title}
        </div>
      </div>
    </Link>
  );
}

function LanguageIcon({language}: {language: string}) {
  let icon = "";
  switch (language) {
    case "es":
      icon = "🇪🇸";
      break;
    case "la":
      icon = "🏛️";
      break;
    case "fr":
      icon = "🇫🇷";
      break;
    case "it":
      icon = "🇮🇹";
      break;
    case "en":
      icon = "🇬🇧";
      break;
    default:
      icon = "";
  }
  return <div className="rounded-full">{icon}</div>;
}