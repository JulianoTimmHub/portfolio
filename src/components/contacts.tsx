import Image from "next/image"

export const Contacts = () => {
    return (
        <div className="w-full relative flex items-center justify-center flex-nowrap">
            <Image className="rounded-full cursor-pointer m-5" alt="" width={50} height={100} src="/github.svg" />
            <Image className="rounded-full cursor-pointer m-5" alt="" width={50} height={100} src="/linkedin.svg" />
        </div>
    )
} 