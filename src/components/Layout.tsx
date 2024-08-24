import Link from "next/link"
import { Contacts } from "./contacts"

export const Layout = ({ children }: any) => {
    return (
        <>
            <header id="inicio" className="w-full container mx-auto">
                <nav className="section-nav w-full flex items-center justify-center pl-[5rem] pr-[5rem] pt-[1rem]">
                    <div className="w-6/12 flex items-center justify-start gap-4">
                        <Link className="relative inline-flex items-center justify-start overflow-hidden font-medium transition-all rounded group p-3" href="#sobre">
                            <span className="w-56 h-48 rounded bg-[#656783] absolute bottom-0 left-0 translate-x-full ease-out duration-300 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                            <span className="relative w-full text-left transition-colors duration-300 ease-in-out">Sobre mim</span>
                        </Link>
                        <Link className="relative inline-flex items-center justify-start overflow-hidden font-medium transition-all rounded group p-3" href="#contatos">
                            <span className="w-56 h-48 rounded bg-[#656783] absolute bottom-0 left-0 translate-x-full ease-out duration-300 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                            <span className="relative w-full text-left transition-colors duration-300 ease-in-out">Contatos</span>
                        </Link>
                        <Link className="relative inline-flex items-center justify-start overflow-hidden font-medium transition-all rounded group p-3" href="#projetos">
                            <span className="w-56 h-48 rounded bg-[#656783] absolute bottom-0 left-0 translate-x-full ease-out duration-300 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                            <span className="relative w-full text-left transition-colors duration-300 ease-in-out">Projetos</span>
                        </Link>
                    </div>
                    <Contacts />
                </nav>
            </header>
            {children}
        </>
    )
}