import Link from "next/link";
import Image from "next/image";
import { Tooltip } from "@nextui-org/react";
import { useI18nContext } from "@/hooks/useI18nContext";

export const MobileApplication = () => {
  const { translator } = useI18nContext();

  return (
    <div className="w-full flex items-center justify-evenly flex-nowrap max-[640px]:flex-col p-[1rem]">
      <div className="w-full mx-auto h-auto overflow-hidden rounded-lg">
        <Image className="w-full h-96 max-[640px]:h-[16rem] object-cover cursor-pointer z-0 rounded-lg scale-110 transition-all duration-300 hover:scale-100" width={500} height={100} src="/profile.png" alt="Sunset in the mountains" />
      </div>
      <div className="w-full px-6 max-[640px]:px-0 py-4 h-96 flex items-start justify-between flex-col max-[640px]:h-[100%] max-[640px]:justify-start max-[640px]:gap-[1rem]">
        <h4 className="font-bold text-xl text-[#efedea] mb-2">{translator('Meu banco fácil')}</h4>
        <p className="text-base text-[#efedea]">
          {translator('Aplicativo mobile de controle financeiro com recursos de login, gestão de receitas e despesas, monitoramento de saldos e criação de metas. Criado com React Native, TypeScript e Expo.')}
        </p>
        <div className="w-full flex items-center justify-center flex-nowrap max-[1024px]:flex-col">
          <div className="w-6/12 max-[1024px]:w-full flex items-center justify-start flex-nowrap">
            <Tooltip content={translator('Repositório')} color="foreground" offset={10} closeDelay={1} className="p-1 text-1xl font-semibold">
              <Link href={'https://github.com/JulianoTimmHub/login-boilerplate-web'} target="_blank">
                <div className="cursor-pointer m-3 transition ease-in-out delay-50 hover:scale-125 duration-300 bg-[url('/contacts/github-light.svg')] hover:!bg-[url('/contacts/github.svg')] bg-cover w-[40px] h-[40px]" />
              </Link>
            </Tooltip>
          </div>
          <div className="w-6/12 max-[1024px]:w-full flex items-center justify-end flex-wrap">
            <Tooltip content="React Native" color="foreground" offset={10} closeDelay={1} className="p-1 text-1xl font-semibold">
              <div className="cursor-pointer m-3 transition ease-in-out delay-50 hover:scale-125 duration-300 bg-[url('/skills/react-light.svg')] hover:!bg-[url('/skills/react.svg')] bg-cover w-[20px] h-[20px]" />
            </Tooltip>
            <Tooltip content="TypeScript" color="foreground" offset={10} closeDelay={1} className="p-1 text-1xl font-semibold">
              <div className="cursor-pointer m-3 transition ease-in-out delay-50 hover:scale-125 duration-300 bg-[url('/skills/typescript-light.svg')] hover:!bg-[url('/skills/typescript.svg')] bg-cover w-[20px] h-[20px]" />
            </Tooltip>
            <Tooltip content='Expo' color="foreground" offset={10} closeDelay={1} className="p-1 text-1xl font-semibold">
              <div className="cursor-pointer m-3 transition ease-in-out delay-50 hover:scale-125 duration-300 bg-[url('/skills/expo-light.svg')] hover:!bg-[url('/skills/expo.svg')] bg-cover w-[20px] h-[20px]" />
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  )
}