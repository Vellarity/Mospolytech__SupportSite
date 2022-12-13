import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

export default function MainLayout({children}){
    return(
        <div className="h-full flex flex-col min-h-screen">
            <NavBar />
            <div className="container xl:max-w-7xl mx-auto mb-5">
                <main className="grid gap-y-5">{children}</main>
            </div>
            <Footer />
        </div>
    )
}