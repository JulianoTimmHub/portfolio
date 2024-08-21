import { Tooltip } from "@nextui-org/react";
import Image from "next/image"
import Link from "next/link"

export const Contacts = () => {
    const linkedin = 'https://www.linkedin.com/in/juliano-henrique-timm-583322238/';
    const github = 'https://github.com/JulianoTimmHub';
    const whatsapp = 'https://api.whatsapp.com/send/?phone=45999455504&text&type=phone_number&app_absent=0';

    return (
        <div className="w-6/12 flex items-center justify-center flex-nowrap">
            <Link href={github} target="_blank">
                <Image className="cursor-pointer m-3 transition ease-in-out delay-50 hover:scale-125 duration-300" alt="" width={40} height={100} src="/github.svg" />
            </Link>
            <Link href={linkedin} target="_blank">
                <Image className="cursor-pointer m-3 transition ease-in-out delay-50 hover:scale-125 duration-300" alt="" width={40} height={100} src="/linkedin.svg" />
            </Link>
            <Link href={whatsapp} target="_blank">
                <Image className="cursor-pointer m-3 transition ease-in-out delay-50 hover:scale-125 duration-300" alt="" width={40} height={100} src="/whatsapp.svg" />
            </Link>
        </div >
    )
} 