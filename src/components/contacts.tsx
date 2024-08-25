import Link from "next/link";
import { ELinks } from '../enum/e-links';

export const Contacts = () => {

    return (
        <>
            <Link href={ELinks.GITHUB} target="_blank">
                <div className="cursor-pointer m-3 transition ease-in-out delay-50 hover:scale-125 duration-300 bg-[url('/contacts/github.svg')] hover:bg-[url('/contacts/github-original.svg')] bg-cover w-[40px] h-[40px]" />
            </Link>
            <Link href={ELinks.LINKEDIN} target="_blank">
                <div className="cursor-pointer m-3 transition ease-in-out delay-50 hover:scale-125 duration-300 bg-[url('/contacts/linkedin.svg')] hover:bg-[url('/contacts/linkedin-original.svg')] bg-cover w-[40px] h-[40px]" />
            </Link>
            <Link href={ELinks.WHATSAPP} target="_blank">
                <div className="cursor-pointer m-3 transition ease-in-out delay-50 hover:scale-125 duration-300 bg-[url('/contacts/whatsapp.svg')] hover:bg-[url('/contacts/whatsapp-original.svg')] bg-cover w-[40px] h-[40px]" />
            </Link>
        </>
    )
}