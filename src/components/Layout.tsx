import Link from "next/link"

export const Layout = ({ children }: any) => {
    return (
        <div className="container mx-auto">
            {/* <header>
                <nav className="w-full flex items-center justify-center gap-8">
                    <Link className="hover:bg-gray-500 rounded-full p-2" href="/">Sobre mim</Link>
                    <Link className="hover:bg-gray-500 rounded-full p-2" href="/">Contatos</Link>
                    <Link className="hover:bg-gray-500 rounded-full p-2" href="/">Projetos</Link>
                </nav>
            </header> */}
            {children}
        </div>
    )
}