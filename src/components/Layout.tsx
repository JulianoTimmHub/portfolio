import Link from "next/link"
import { useI18nContext } from "@/hooks/useI18nContext"
import { SwitchLanguage } from "./switchLanguage";
import { SwitchTheme } from "./switchTheme";

export const Layout = ({ children }: any) => {
    const { translator } = useI18nContext();

    return (
        <>
            <header id={translator('inicio')} className="w-full container mx-auto">
                <nav className="section-nav w-full flex items-center justify-center px-[5rem] py-[2rem] max-[640px]:px-[4rem]">
                    <div className="w-6/12 max-[640px]:w-full flex items-center justify-start max-[640px]:justify-between gap-4 max-[640px]:gap-[0rem]">
                        <Link className="group relative inline-flex items-center justify-start overflow-hidden font-medium transition-all rounded group p-3" href={`#${translator('sobre')}`}>
                            <span className="w-56 h-48 rounded bg-[#656783] absolute bottom-0 left-0 translate-x-full ease-out duration-300 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                            <span className="relative w-full text-left text-[#303446] group-hover:text-white dark:text-white transition-colors duration-300 ease-in-out">{translator('Sobre')}</span>
                        </Link>
                        <Link className="relative inline-flex items-center justify-start overflow-hidden font-medium transition-all rounded group p-3" href={`#${translator('contatos')}`}>
                            <span className="w-56 h-48 rounded bg-[#656783] absolute bottom-0 left-0 translate-x-full ease-out duration-300 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                            <span className="relative w-full text-left text-[#303446] group-hover:text-white dark:text-white transition-colors duration-300 ease-in-out">{translator('Contatos')}</span>
                        </Link>
                        <Link className="relative inline-flex items-center justify-start overflow-hidden font-medium transition-all rounded group p-3" href={`#${translator('projetos')}`}>
                            <span className="w-56 h-48 rounded bg-[#656783] absolute bottom-0 left-0 translate-x-full ease-out duration-300 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                            <span className="relative w-full text-left text-[#303446] group-hover:text-white dark:text-white transition-colors duration-300 ease-in-out">{translator('Projetos')}</span>
                        </Link>
                    </div>
                    <div className="w-6/12 max-[640px]:hidden flex items-center justify-end gap-4 flex-nowrap">
                        <SwitchLanguage />
                        <SwitchTheme />
                    </div>
                </nav>
            </header>
            {children}
        </>
    )
}