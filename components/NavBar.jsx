
import Image from "next/image"
import Link from "next/link"
import LogoImg from "../public/assets/darkLogo.jpg"

export const NavBar = () =>{
    return(
        <div className="w-full min-h-min h-20 bg-white border-b mb-5">
            <div className="container h-full mx-auto flex justify-between items-center">
                <Image src={LogoImg} className="h-12 w-fit" alt="..." />
                
                <div className="flex gap-x-3 text-lg font-semibold">
                    <Link className="hover:text-cyan-600 duration-200" href="/">Главная</Link>
                    <Link className="hover:text-cyan-600 duration-200" href="/tutorials">Руководства</Link>
                    <Link className="hover:text-cyan-600 duration-200" href="/guides">Инструкции</Link>
                </div>

            </div>
        </div>
    )
}