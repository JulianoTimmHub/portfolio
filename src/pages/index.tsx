import { AboutMe } from "@/components/aboutMe";
import { Sidebar } from "@/components/sidebar";
import { Skills } from "@/components/skills";
import Image from "next/image";
import Link from "next/link";
import { useI18nContext } from '../hooks/useI18nContext';
import { Contacts } from "@/components/contacts";
import { ELinks } from "@/enum/e-links";
import { ProjectTabs } from "@/components/tabs";

export default function Home({ }: any) {
  const { translator } = useI18nContext();

  return (
    <>
      <main className="container mx-auto">
        <section id={translator('introduction')} className="w-full flex items-center justify-center flex-col max-[640px]:gap-[3rem]">
          <div className="w-full flex items-center justify-center max-[640px]:flex-col pl-[5rem] pr-[5rem] max-[768px]:pt-[0rem]">
            <div className="w-6/12 max-[640px]:w-full flex items-center justify-end max-[640px]:justify-center">
              <div className="flex flex-wrap max-[640px]:justify-center">
                <h1 className="text-5xl text-[#303446] dark:text-white m-2">{translator('Olá, me chamo')}</h1>
                <div className="flex flex-nowrap">
                  <h1 className="text-5xl m-2 text-[#656783]"><strong>{'<'}</strong></h1>
                  <h1 className="text-5xl text-[#303446] dark:text-white m-2"><strong>Juliano</strong></h1>
                  <h1 className="text-5xl m-2 text-[#656783]"><strong>{'/>'}</strong></h1>
                </div>
                <p className="text-xl text-[#303446] dark:text-white m-2">{translator('Desenvolvedor Full Stack há mais de 2 anos.')}</p>
              </div>
            </div>
            <div className="w-6/12 flex items-center justify-center flex-col max-[640px]:hidden">
              <div className="rounded-full p-3 border-blue-900">
                <Image className="rounded-full" alt="" width={400} height={200} src="/header.gif" />
              </div>
            </div>
          </div>
          <Skills />
        </section>
        <section id={translator('projetos')} className="w-full flex items-center justify-evenly flex-col mt-[5rem] mb-[5rem] max-[640px]:mt-[2rem] max-[640px]:mb-[2rem]">
          <div className="w-full flex items-center justify-center mt-[1rem] mb-[1rem]">
            <h1 className="text-4xl m-2 text-center pl-[5rem] pr-[5rem] max-[640px]:pl-[2rem] max-[640px]:pr-[2rem] w-[-webkit-fill-available] flex items-center before:flex-1 before:border-t
                before:me-6 after:flex-1 after:border-t after:ms-6 text-[#303446] dark:text-white before:border-[#303446] after:border-[#303446] dark:before:border-[#656783] dark:after:border-[#656783]">
              {translator('Projetos')}
            </h1>
          </div>
          <ProjectTabs />
        </section>

        <section id={translator('sobre')} className="w-full flex items-center justify-center flex-col mt-[5rem] mb-[5rem] max-[640px]:mt-[2rem] max-[640px]:mb-[2rem]">
          <div className="w-full flex items-center justify-center mt-[1rem] mb-[1rem]">
            <h1 className="text-4xl m-2 text-center pl-[5rem] pr-[5rem] max-[640px]:pl-[2rem] max-[640px]:pr-[2rem] w-[-webkit-fill-available] flex items-center before:flex-1 before:border-t 
                before:me-6 after:flex-1 after:border-t after:ms-6 text-[#303446] dark:text-white before:border-[#303446] after:border-[#303446] dark:before:border-[#656783] dark:after:border-[#656783]">{translator('Sobre')}</h1>
          </div>
          <AboutMe />
        </section>

        <Sidebar />

        <div className="fixed left-[-5px] bottom-5 max-[640px]:hidden">
          <div className="flex items-center justify-center flex-col rounded bg-[#656783]">
            <Contacts />
          </div>
        </div>
        <Link className="fixed bottom-5 right-5 cursor-pointer transition ease-in-out delay-50 hover:scale-125 duration-300 bg-[url('/back-to-top-outlined.svg')] hover:bg-[url('/back-to-top-filled.svg')] bg-cover w-[40px] h-[40px]" href={`#${translator('inicio')}`} />
      </main>
      <footer id={translator('contatos')} className="bg-gray-900 mt-[5rem]">
        <div className="container mx-auto pt-[5rem] pb-[5rem] max-[640px]:pt-[1rem] max-[640px]:p-[2rem]">
          <div className="w-full flex items-center justify-center mt-[1rem] mb-[1rem]">
            <h1 className="text-4xl m-2 text-center pl-[5rem] pr-[5rem] max-[640px]:pl-[0rem] max-[640px]:pr-[0rem] w-[-webkit-fill-available] flex items-center before:flex-1 before:border-t before:border-gray-200 
                before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 text-white dark:before:border-[#656783] 
                dark:after:border-[#656783]">{translator('Contatos')}</h1>
          </div>
          <div className="w-full flex items-center justify-center gap-[3rem] max-[640px]:justify-between max-[640px]:gap-[0rem]">
            <Link href={ELinks.GITHUB} target="_blank" className="flex items-center justify-center flex-col block p-6 max-[640px]:p-[0.5rem] border rounded-lg shadow bg-[#303446] border-gray-700 hover:bg-gray-700">
              <div className="cursor-pointer m-3 transition ease-in-out delay-50 hover:scale-125 duration-300 bg-[url('/contacts/github-light.svg')] dark:bg-[url('/contacts/github-light.svg')] hover:!bg-[url('/contacts/github-original.svg')] bg-cover w-[40px] h-[40px]"></div>
              <p className="font-normal text-gray-200">Github</p>
            </Link>
            <Link href={ELinks.LINKEDIN} target="_blank" className="flex items-center justify-center flex-col block p-6 max-[640px]:p-[0.5rem] border rounded-lg shadow bg-[#303446] border-gray-700 hover:bg-gray-700">
              <div className="cursor-pointer m-3 transition ease-in-out delay-50 hover:scale-125 duration-300 bg-[url('/contacts/linkedin-light.svg')] dark:bg-[url('/contacts/linkedin-light.svg')] hover:!bg-[url('/contacts/linkedin-original.svg')] bg-cover w-[40px] h-[40px]" />
              <p className="font-normal text-gray-200">Linkedin</p>
            </Link>
            <Link href={ELinks.WHATSAPP} target="_blank" className="flex items-center justify-center flex-col block p-6 max-[640px]:p-[0.5rem] border rounded-lg shadow bg-[#303446] border-gray-700 hover:bg-gray-700">
              <div className="cursor-pointer m-3 transition ease-in-out delay-50 hover:scale-125 duration-300 bg-[url('/contacts/whatsapp-light.svg')] dark:bg-[url('/contacts/whatsapp-light.svg')] hover:!bg-[url('/contacts/whatsapp-original.svg')] bg-cover w-[40px] h-[40px]" />
              <p className="font-normal text-gray-200">WhatsApp</p>
            </Link>
          </div>
          <form action="#" className="p-[5rem] max-[640px]:pl-[0rem] max-[640px]:pr-[0rem] max-[640px]:pt-[2rem] max-[640px]:pb-[2rem] space-y-8">
            <p className="mb-8 lg:mb-16 font-light text-center text-white sm:text-xl">{translator('Ou caso queira me enviar um email profissional.')}</p>
            <div>
              <label htmlFor="email" className="block mb-2 font-medium text-white">{translator('Seu email')}</label>
              <input type="email" id="email" className="border border-gray-300 rounded-lg w-full p-2.5 dark:bg-[#303446] dark:border-gray-600" placeholder={translator('exemplo@gmail.com')} required />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 font-medium text-white">{translator('Sua mensagem')}</label>
              <textarea id="message" rows={6} className="block p-2.5 w-full rounded-lg border border-gray-300 dark:bg-[#303446] dark:border-gray-600" placeholder={translator('Olá Juliano, tudo bem ?')}></textarea>
            </div>
            <button type="submit" className="py-3 px-5 font-medium text-center text-white rounded-lg bg-[#0d6efd] hover:bg-[#0b5ed7] sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:hover:bg-primary-700">{translator('Enviar mensagem')}</button>
          </form>
        </div>
      </footer>
    </>
  )
}