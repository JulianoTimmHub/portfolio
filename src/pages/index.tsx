import { AboutMe } from "@/components/aboutMe";
import { Sidebar } from "@/components/sidebar";
import { Skills } from "@/components/skills";
import { Tooltip } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const linkedin = 'https://www.linkedin.com/in/juliano-henrique-timm-583322238/';
  const github = 'https://github.com/JulianoTimmHub';
  const whatsapp = 'https://api.whatsapp.com/send/?phone=45999455504&text&type=phone_number&app_absent=0';

  return (
    <>
    <Sidebar />
      <main className="container mx-auto">
        <section id="introduction" className="w-full flex items-center justify-center flex-col">
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
        <section id="projetos" className="w-full flex items-center justify-evenly flex-col mt-10 mb-10 pt-[50px]">
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
                      <div className="cursor-pointer m-3 transition ease-in-out delay-50 hover:scale-125 duration-300 bg-[url('/contacts/github.svg')] hover:bg-[url('/contacts/github-original.svg')] bg-cover w-[40px] h-[40px]" />
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
                      <div className="cursor-pointer m-3 transition ease-in-out delay-50 hover:scale-125 duration-300 bg-[url('/contacts/github.svg')] hover:bg-[url('/contacts/github-original.svg')] bg-cover w-[40px] h-[40px]" />
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
                      <div className="cursor-pointer m-3 transition ease-in-out delay-50 hover:scale-125 duration-300 bg-[url('/contacts/github.svg')] hover:bg-[url('/contacts/github-original.svg')] bg-cover w-[40px] h-[40px]" />
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

        <section id="sobre" className="w-full flex items-center justify-center flex-col mt-10 mb-10">
          <div className="w-full flex items-center justify-center flex-col mt-10 mb-10">
            <h1 className="text-4xl m-2 text-left">Sobre mim</h1>
            <div className="w-4/12 h-1.5 rounded-full bg-[#656783]" />
          </div>
          <AboutMe />
        </section>
        <div className="fixed left-5 bottom-5">
          <div className="flex items-center justify-center flex-col rounded bg-[#656783]">
            <Link href={github} target="_blank">
              <div className="cursor-pointer m-3 transition ease-in-out delay-50 hover:scale-125 duration-300 bg-[url('/contacts/github.svg')] hover:bg-[url('/contacts/github-original.svg')] bg-cover w-[40px] h-[40px]" />
            </Link>
            <Link href={linkedin} target="_blank">
              <div className="cursor-pointer m-3 transition ease-in-out delay-50 hover:scale-125 duration-300 bg-[url('/contacts/linkedin.svg')] hover:bg-[url('/contacts/linkedin-original.svg')] bg-cover w-[40px] h-[40px]" />
            </Link>
            <Link href={whatsapp} target="_blank">
              <div className="cursor-pointer m-3 transition ease-in-out delay-50 hover:scale-125 duration-300 bg-[url('/contacts/whatsapp.svg')] hover:bg-[url('/contacts/whatsapp-original.svg')] bg-cover w-[40px] h-[40px]" />
            </Link>
          </div>
        </div>
        <Link className="fixed bottom-5 right-5 cursor-pointer m-3 transition ease-in-out delay-50 hover:scale-125 duration-300 bg-[url('/back-to-top-outlined.svg')] hover:bg-[url('/back-to-top-filled.svg')] bg-cover w-[40px] h-[40px]" href="#inicio" />
      </main>
      <footer className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center">Contact Us</h2>
          <p className="mb-8 lg:mb-16 font-light text-center sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
          <form action="#" className="space-y-8">
            <div>
              <label htmlFor="email" className="block mb-2 font-medium">Seu e-mail</label>
              <input type="email" id="email" className="border border-gray-300 rounded-lg w-full p-2.5 dark:bg-gray-700 dark:border-gray-600" placeholder="name@flowbite.com" required />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 font-medium">Your message</label>
              <textarea id="message" rows={6} className="block p-2.5 w-full rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600" placeholder="Leave a comment..."></textarea>
            </div>
            <button type="submit" className="py-3 px-5 font-medium text-center text-white rounded-lg bg-[#0d6efd] hover:bg-[#0b5ed7] sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:hover:bg-primary-700">Send message</button>
          </form>
        </div>
      </footer>
    </>
  )
}