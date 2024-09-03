import Image from "next/image";
import Link from "next/link";
import { useI18nContext } from '../hooks/useI18nContext';
import { AboutMe } from "@/components/aboutMe";
import { Sidebar } from "@/components/sidebar";
import { Skills } from "@/components/skills";
import { Contacts } from "@/components/contacts";
import { ProjectTabs } from "@/components/tabs";
import { Footer } from "@/components/footer";

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
                <p className="text-xl text-[#303446] dark:text-white m-2">{translator('Desenvolvedor Full Stack profissional há mais de 2 anos.')}</p>
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

      <Footer />
    </>
  )
}