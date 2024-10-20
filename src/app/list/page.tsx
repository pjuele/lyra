import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { getSortedMDData, MDData } from '@/lib/posts';
import LyraLogo from "@/components/lyra-logo";
// import { Avatar, AvatarFallback } from "@/components/ui/avatar";

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
    // <div className={cn(
    //   "flex flex-row flex-wrap gap-20 bg-red-950 justify-start align-middle",
    //   )}>
      <LyraLogo className="max-w-[100px] fill-foreground mb-10"/>
    // </div>
  );
}

async function BlogPostList(){
  const posts = await getSortedMDData();
  return(
    <>
      {posts.map((post, index) => (
          <BlogPostCard key={index} postData={post} />
      ))}
      </>
  );
}

function BlogPostCard({postData}: {postData: MDData}) {
  return(
    <Link href={`/list/${postData.slug}`} className="min-w-max max-w-max">
      <div className={cn(
        "h-full p-0",
        "border border-gray-950 rounded-lg",
        
        )}>
        <div className="flex flex-row gap-4 align-middle">
          {/* <LanguageIcon language={postData.language as string} /> */}
          <span className="text-2xl font-title font-semibold uppercase text-wrap">{postData.title}</span>
        </div>
      </div>
    </Link>
  );
}

// function LanguageIcon({language}: {language: string}) {
//   // let icon = "";
//   // switch (language) {
//   //   case "es":
//   //     icon = "🇪🇸";
//   //     break;
//   //   case "la":
//   //     icon = "🏛️";
//   //     break;
//   //   case "fr":
//   //     icon = "🇫🇷";
//   //     break;
//   //   case "it":
//   //     icon = "🇮🇹";
//   //     break;
//   //   case "en":
//   //     icon = "🇬🇧";
//   //     break;
//   //   default:
//   //     icon = "";
//   // }
//   // return <div className="rounded-full">{icon}</div>;
//   return <Avatar className={cn(
//     // "bg-muted-foreground text-background p-3",
//   )}>
//     <AvatarFallback className="font-bold font-title bg-muted-foreground text-background">
//       {language}
//     </AvatarFallback>
//   </Avatar>;
// }