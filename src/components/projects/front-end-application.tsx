import Link from "next/link";
import Image from "next/image";
import { Tooltip } from "@nextui-org/react";
import { useI18nContext } from "@/hooks/useI18nContext";

export const FrontEndApplication = () => {
  const { translator } = useI18nContext();

  return (
    <>
      <div className="w-full flex items-center justify-evenly flex-nowrap max-[640px]:flex-col p-[1rem]">
        <div className="w-full mx-auto h-auto overflow-hidden rounded-lg">
          <Image className="w-full h-96 max-[640px]:h-[16rem] object-cover cursor-pointer z-0 rounded-lg scale-110 transition-all duration-300 hover:scale-100" width={500} height={100} src="/profile.png" alt="Sunset in the mountains" />
        </div>
        <div className="w-full px-6 max-[640px]:px-0 py-4 h-96 flex items-start justify-between flex-col max-[640px]:h-[100%] max-[640px]:justify-start max-[640px]:gap-[1rem]">
          <h4 className="font-bold text-xl text-[#efedea] mb-2">{translator('Login Boilerplate')}</h4>
          <p className="text-base text-[#efedea]">
            {translator('Um boilerplate de login para sistemas web, criado com React, TypeScript e Next.js. Ele oferece funcionalidades essenciais como cadastro de usuários, alteração de senhas e login.')}
          </p>
          <div className="w-full flex items-center justify-center flex-nowrap">
            <div className="w-6/12 flex items-center justify-start flex-nowrap">
              <Tooltip content={translator('Repositório')} color="foreground" offset={10} closeDelay={1} className="p-1 text-1xl font-semibold">
                <Link href={'https://github.com/JulianoTimmHub/login-boilerplate-web'} target="_blank">
                  <div className="cursor-pointer m-3 transition ease-in-out delay-50 hover:scale-125 duration-300 bg-[url('/contacts/github-light.svg')] hover:!bg-[url('/contacts/github-original.svg')] bg-cover w-[40px] h-[40px]" />
                </Link>
              </Tooltip>
              <Tooltip content="Deploy" color="foreground" offset={10} closeDelay={1} className="p-1 text-1xl font-semibold">
                <Link href={'https://github.com/JulianoTimmHub/login-boilerplate-web'} target="_blank">
                  <div className="cursor-pointer m-3 transition ease-in-out delay-50 hover:scale-125 duration-300 bg-[url('/url-light.png')] hover:!bg-[url('/url-original.png')] bg-cover w-[40px] h-[40px]" />
                </Link>
              </Tooltip>
            </div>
            <div className="w-6/12 flex items-center justify-end flex-wrap">
              <Tooltip content="React" color="foreground" offset={10} closeDelay={1} className="p-1 text-1xl font-semibold">
                <div className="cursor-pointer m-3 transition ease-in-out delay-50 hover:scale-125 duration-300 bg-[url('/skills/react-light.svg')] hover:!bg-[url('/skills/react-original.svg')] bg-cover w-[25px] h-[25px]" />
              </Tooltip>
              <Tooltip content="TypeScript" color="foreground" offset={10} closeDelay={1} className="p-1 text-1xl font-semibold">
                <div className="cursor-pointer m-3 transition ease-in-out delay-50 hover:scale-125 duration-300 bg-[url('/skills/typescript-light.svg')] hover:!bg-[url('/skills/typescript-original.svg')] bg-cover w-[25px] h-[25px]" />
              </Tooltip>
              <Tooltip content='Next' color="foreground" offset={10} closeDelay={1} className="p-1 text-1xl font-semibold">
                <div className="cursor-pointer m-3 transition ease-in-out delay-50 hover:scale-125 duration-300 bg-[url('/skills/next-light.svg')] hover:!bg-[url('/skills/next-original.png')] bg-cover w-[25px] h-[25px]" />
              </Tooltip>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-evenly flex-nowrap max-[640px]:flex-col-reverse p-[1rem]">
        <div className="w-full px-6 max-[640px]:px-0 py-4 h-96 flex items-end justify-between flex-col max-[640px]:h-[100%] max-[640px]:justify-start max-[640px]:items-start max-[640px]:gap-[1rem]">
          <h4 className="font-bold text-xl text-[#efedea] mb-2">{translator('Portfolio')}</h4>
          <p className="text-base text-right max-[640px]:text-left text-[#efedea]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
          <div className="w-full flex items-center justify-end max-[640px]:justify-start flex-nowrap">
            <Tooltip content={translator('Repositório')} color="foreground" offset={10} closeDelay={1} className="p-1 text-1xl font-semibold">
              <Link href={'https://github.com/JulianoTimmHub/login-boilerplate-web'} target="_blank">
                <div className="cursor-pointer m-3 transition ease-in-out delay-50 hover:scale-125 duration-300 bg-[url('/contacts/github-light.svg')] hover:!bg-[url('/contacts/github-original.svg')] bg-cover w-[40px] h-[40px]" />
              </Link>
            </Tooltip>
            <Tooltip content="Deploy" color="foreground" offset={10} closeDelay={1} className="p-1 text-1xl font-semibold">
              <Link href={'https://github.com/JulianoTimmHub/login-boilerplate-web'} target="_blank">
                <div className="cursor-pointer m-3 transition ease-in-out delay-50 hover:scale-125 duration-300 bg-[url('/url-light.png')] hover:!bg-[url('/url-original.png')] bg-cover w-[40px] h-[40px]" />
              </Link>
            </Tooltip>
          </div>
        </div>
        <div className="w-full mx-auto h-auto overflow-hidden rounded-lg">
          <Image className="w-full h-96 max-[640px]:h-[16rem] object-cover cursor-pointer z-0 rounded-lg scale-110 transition-all duration-300 hover:scale-100" width={500} height={100} src="/profile.png" alt="Sunset in the mountains" />
        </div>
      </div>
    </>
  )
}