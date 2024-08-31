import { useI18nContext } from "@/hooks/useI18nContext";
import { Tooltip } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export const BackEndApplication = () => {
  const { translator } = useI18nContext();

  return (
    <div className="w-full flex items-center justify-evenly flex-nowrap max-[640px]:flex-col-reverse p-[1rem]">
      <div className="w-full px-6 max-[640px]:px-0 py-4 h-96 flex items-end justify-between flex-col max-[640px]:h-[100%] max-[640px]:justify-start max-[640px]:items-start max-[640px]:gap-[1rem]">
        <h4 className="font-bold text-xl text-[#303446] dark:text-white mb-2">{translator('Api de controle financeiro pessoal')}</h4>
        <p className="text-base text-right max-[640px]:text-left text-[#303446] dark:text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
        <div className="w-full flex items-center justify-end max-[640px]:justify-start flex-nowrap">
          <Tooltip content={translator('Repositório')} color="success" offset={-5} closeDelay={1} className="p-1 text-[#303446] dark:text-white">
            <Link href={'https://github.com/JulianoTimmHub/login-boilerplate-web'} target="_blank">
              <div className="cursor-pointer m-3 transition ease-in-out delay-50 hover:scale-125 duration-300 bg-[url('/contacts/github-dark.svg')] dark:bg-[url('/contacts/github-light.svg')] hover:!bg-[url('/contacts/github-original.svg')] bg-cover w-[40px] h-[40px]" />
            </Link>
          </Tooltip>
        </div>
      </div>
      <div className="w-full mx-auto h-auto overflow-hidden rounded-lg">
        <Image className="w-full h-96 max-[640px]:h-[16rem] object-cover cursor-pointer z-0 rounded-lg scale-110 transition-all duration-300 hover:scale-100" width={500} height={100} src="/profile.png" alt="Sunset in the mountains" />
      </div>
    </div>
  )
}