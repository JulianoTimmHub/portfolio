import Link from "next/link"

export const Layout = ({ children }: any) => {
    return (
        <div className="container mx-auto">
            <header>
                <nav className="w-full flex items-center justify-center gap-8">
                    <Link className="hover:bg-cyan-300" href="/">Sobre mim</Link>
                    <Link href="/">Contatos</Link>
                    <Link href="/">Projetos</Link>
                </nav>
            </header>
            {children}
        </div>
    )
}