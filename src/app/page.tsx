import LyraLogo from "@/components/lyra-logo";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen min-w-screen flex flex-col items-center justify-items-center p-8 gap-5">
        <Link href="/list" className="">
          <LyraLogo className="min-h-[60vh] fill-foreground" />
        </Link>
    </main>
  );
}
