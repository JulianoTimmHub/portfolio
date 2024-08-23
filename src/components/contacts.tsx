import Link from "next/link"

export const Contacts = () => {
    const linkedin = 'https://www.linkedin.com/in/juliano-henrique-timm-583322238/';
    const github = 'https://github.com/JulianoTimmHub';
    const whatsapp = 'https://api.whatsapp.com/send/?phone=45999455504&text&type=phone_number&app_absent=0';

    return (
        <div className="w-6/12 flex items-center justify-center flex-nowrap">
            <Link href={github} target="_blank">
                <div className="cursor-pointer m-3 transition ease-in-out delay-50 hover:scale-125 duration-300 bg-[url('/contacts/github.svg')] hover:bg-[url('/contacts/github-original.svg')] bg-cover w-[40px] h-[40px]" />
            </Link>
            <Link href={linkedin} target="_blank">
                <div className="cursor-pointer m-3 transition ease-in-out delay-50 hover:scale-125 duration-300 bg-[url('/contacts/linkedin.svg')] hover:bg-[url('/contacts/linkedin-original.svg')] bg-cover w-[40px] h-[40px]" />
            </Link>
            <Link href={whatsapp} target="_blank">
                <div className="cursor-pointer m-3 transition ease-in-out delay-50 hover:scale-125 duration-300 bg-[url('/contacts/whatsapp.svg')] hover:bg-[url('/contacts/whatsapp-original.svg')] bg-cover w-[40px] h-[40px]" />
            </Link>
        </div >
    )
} 