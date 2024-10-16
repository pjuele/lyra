'use client';

// import { Separator } from "@/components/ui/separator";
// import Image from "next/image";
import LyraLogo from "../lyra-logo";

export default function Header() {
    return (
        <>
            <div className="inset-0 -z-10 w-[20vw] fill-slate-900 flex flex-row gap-4 align-middle justify-center [writing-mode:vertical-lr]">
                <LyraLogo />
                {/* <Image src="/android-chrome-512x512.png" alt="Lyra Logo" width={60} height={60} /> */}
                {/* <h1 className="text-8xl font-title tracking-tight">⏀ Lyra</h1> */}
            </div>
            {/* <Separator /> */}
        </>
    )
}