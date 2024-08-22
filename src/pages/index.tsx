import { AboutMe } from "@/components/aboutMe";
import { Skills } from "@/components/skills";
import { Tooltip } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section id="introduction" className="w-full flex items-center justify-center flex-col h-[100vh]">
        <div className="w-full flex items-center justify-center max-[640px]:flex-col p-20">
          <div className="w-6/12 max-[640px]:w-full flex items-center justify-end max-[640px]:justify-center">
            <div className="flex flex-wrap">
              <h1 className="text-5xl m-2">Olá, me chamo</h1>
              <div className="flex flex-nowrap">
                <h1 className="text-5xl m-2 text-[#656783]"><strong>{'<'}</strong></h1>
                <h1 className="text-5xl m-2"><strong>Juliano</strong></h1>
                <h1 className="text-5xl m-2 text-[#656783]"><strong>{'/>'}</strong></h1>
              </div>
              <p className="text-xl m-2">Seja bem vindo ao meu portfólio</p>
            </div>
          </div>
          <div className="w-6/12 flex items-center justify-center flex-col">
            <div className="rounded-full p-3 border-blue-900">
              <Image className="rounded-full" alt="" width={400} height={200} src="/header.gif" />
            </div>
          </div>
        </div>
        <Skills />
      </section>
      <section id="projects" className="w-full flex items-center justify-evenly flex-col mt-10 mb-10 pt-[50px]">
        <div className="w-full flex items-center justify-center flex-col mt-10 mb-10">
          <h1 className="text-4xl m-2 text-left">Projetos em destaque</h1>
          <div className="w-4/12 h-1.5 rounded-full bg-[#656783]" />
        </div>

        <div className="w-full flex items-center justify-evenly flex-nowrap p-20">
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-8 items-center">
            <div className="w-full mx-auto h-auto overflow-hidden rounded-lg">
              <Image className="w-full h-96 object-cover cursor-pointer z-0 rounded-lg scale-110 transition-all duration-300 hover:scale-100" width={500} height={100} src="/profile.png" alt="Sunset in the mountains" />
            </div>
            <div className="w-full px-6 py-4 h-[100%] flex items-start justify-between flex-col">
              <div className="font-bold text-xl mb-2">Login Boilerplate</div>
              <p className="text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
              <div className="w-full flex items-center justify-start flex-nowrap">
                <Tooltip content="Repositório" color="success" offset={-5} closeDelay={1} className="p-1">
                  <Link href={'https://github.com/JulianoTimmHub/login-boilerplate-web'} target="_blank">
                    <div className="cursor-pointer m-3 transition ease-in-out delay-50 hover:scale-125 duration-300 bg-[url('/github.svg')] hover:bg-[url('/github-original.svg')] bg-cover w-[40px] h-[40px]" />
                  </Link>
                </Tooltip>
                <Tooltip content="Deploy" color="success" offset={-5} closeDelay={1} className="p-1">
                  <Link href={'https://github.com/JulianoTimmHub/login-boilerplate-web'} target="_blank">
                    <div className="cursor-pointer m-3 transition ease-in-out delay-50 hover:scale-125 duration-300 bg-[url('/site.png')] hover:bg-[url('/site-blue.png')] bg-cover w-[40px] h-[40px]" />
                  </Link>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex items-center justify-evenly flex-nowrap p-20">
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-8 items-center">
            <div className="w-full px-6 py-4 h-[100%] flex items-end justify-between flex-col">
              <div className="font-bold text-xl mb-2">Api de controle financeiro pessoal</div>
              <p className="text-base text-right">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
              <div className="w-full flex items-center justify-end flex-nowrap">
                <Tooltip content="Repositório" color="success" offset={-5} closeDelay={1} className="p-1">
                  <Link href={'https://github.com/JulianoTimmHub/login-boilerplate-web'} target="_blank">
                    <div className="cursor-pointer m-3 transition ease-in-out delay-50 hover:scale-125 duration-300 bg-[url('/github.svg')] hover:bg-[url('/github-original.svg')] bg-cover w-[40px] h-[40px]" />
                  </Link>
                </Tooltip>
                <Tooltip content="Deploy" color="success" offset={-5} closeDelay={1} className="p-1">
                  <Link href={'https://github.com/JulianoTimmHub/login-boilerplate-web'} target="_blank">
                    <div className="cursor-pointer m-3 transition ease-in-out delay-50 hover:scale-125 duration-300 bg-[url('/site.png')] hover:bg-[url('/site-blue.png')] bg-cover w-[40px] h-[40px]" />
                  </Link>
                </Tooltip>
              </div>
            </div>
            <div className="w-full mx-auto h-auto overflow-hidden rounded-lg">
              <Image className="w-full h-96 object-cover cursor-pointer z-0 rounded-lg scale-110 transition-all duration-300 hover:scale-100" width={500} height={100} src="/profile.png" alt="Sunset in the mountains" />
            </div>
          </div>
        </div>

        <div className="w-full flex items-center justify-evenly flex-nowrap p-20">
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-8 items-center">
            <div className="w-full mx-auto h-auto overflow-hidden rounded-lg">
              <Image className="w-full h-96 object-cover cursor-pointer z-0 rounded-lg scale-110 transition-all duration-300 hover:scale-100" width={500} height={100} src="/profile.png" alt="Sunset in the mountains" />
            </div>
            <div className="w-full px-6 py-4 h-[100%] flex items-start justify-between flex-col">
              <div className="font-bold text-xl mb-2">Meu banco fácil</div>
              <p className="text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
              <div className="w-full flex items-center justify-start flex-nowrap">
                <Tooltip content="Repositório" color="success" offset={-5} closeDelay={1} className="p-1">
                  <Link href={'https://github.com/JulianoTimmHub/login-boilerplate-web'} target="_blank">
                    <div className="cursor-pointer m-3 transition ease-in-out delay-50 hover:scale-125 duration-300 bg-[url('/github.svg')] hover:bg-[url('/github-original.svg')] bg-cover w-[40px] h-[40px]" />
                  </Link>
                </Tooltip>
                <Tooltip content="Deploy" color="success" offset={-5} closeDelay={1} className="p-1">
                  <Link href={'https://github.com/JulianoTimmHub/login-boilerplate-web'} target="_blank">
                    <div className="cursor-pointer m-3 transition ease-in-out delay-50 hover:scale-125 duration-300 bg-[url('/site.png')] hover:bg-[url('/site-blue.png')] bg-cover w-[40px] h-[40px]" />
                  </Link>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section id="aboutMe" className="w-full flex items-center justify-center flex-col mt-10 mb-10">
        <h1 className="text-4xl m-2">Sobre mim</h1>
        <AboutMe />
      </section>
    </main>
  )
}