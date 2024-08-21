import Link from "next/link"
import { Contacts } from "./contacts"

export const Layout = ({ children }: any) => {
    return (
        <div className="container mx-auto">
            <header className="w-full fixed top-0 left-0">
                <nav className="w-full flex items-center justify-center bg-[#303446]">
                    <div className="w-6/12 flex items-center justify-center gap-4">
                        <Link className="hover:bg-gray-500 rounded-full p-2" href="/">Sobre mim</Link>
                        <Link className="hover:bg-gray-500 rounded-full p-2" href="/">Contatos</Link>
                        <Link className="hover:bg-gray-500 rounded-full p-2" href="/">Projetos</Link>
                    </div>
                    <Contacts />
                </nav>
            </header>
            {children}
        </div>
    )
}