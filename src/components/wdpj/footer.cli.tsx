'use client';

import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Footer() {
    return (
        <>
            <Separator />
            <div className="p-5 container flex flex-row gap-2 align-middle justify-center">
                <div className="text-sm">
                    © 2024
                </div>
                <Image
                    src="https://res.cloudinary.com/wdpj/image/upload/c_scale,w_30/v1636746639/web-design-pablo-juele/logos/wdpj-logo_ddlpop.png"
                    className="inline rounded-md"
                    alt="WDPJ Logo" width={20} height={20} />
            </div>
        </>
    )
}