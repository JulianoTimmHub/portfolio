import Link from "next/link"
import { Contacts } from "./contacts"

export const Layout = ({ children }: any) => {
    return (
        <div className="container mx-auto">
            <header className="w-full fixed top-0 left-0">
                <nav className="section-nav w-full flex items-center justify-center bg-[#303446]">
                    <div className="w-6/12 flex items-center justify-center gap-4">
                        <Link className="rounded-none p-2 transition ease-in-out delay-50 hover:scale-110 hover:bg-blue-500 duration-100" href="#aboutMe">Sobre mim</Link>
                        <Link className="rounded-none p-2 transition ease-in-out delay-50 hover:scale-110 hover:bg-blue-500 duration-100" href="#contacts">Contatos</Link>
                        <Link className="rounded-none p-2 transition ease-in-out delay-50 hover:scale-110 hover:bg-blue-500 duration-100" href="#projects">Projetos</Link>
                    </div>
                    <Contacts />
                </nav>
            </header>
            {children}
        </div>
    )
}