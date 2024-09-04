import { Header } from "./header";
import { Footer } from "./footer";

export const Layout = ({ children }: any) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}