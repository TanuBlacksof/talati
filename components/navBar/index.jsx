
import design from "./index.module.css"
import Image from "next/image"
import Link from "next/link"

export const  NavBar =  () =>  {

    const BurgerBtn = () =>{
        return (
            <button className=" block md:hidden">
                <label className={`${ design.burger } cursor-pointer`}>
                    <input className="hidden"  type="checkbox"/>
                    <span className="bg-black before:bg-black after:bg-black "></span>
                </label>
            </button>
        )
    }
    return (
        <nav className="font-poppins text-gray flex items-center justify-between gap-4 px-5 lg:px-10 h-24 border-b-2 border-gray">
            <div className="w-32 grid place-content-center">
                <Image alt=""  height={75} width={ 144} layout="intrinsic" priority objectFit="cover" src="/globals/logo.png" />
            </div>
           <div className=" flex-nowrap items-center justify-end  hidden md:flex gap-4 ">
                <Link href="/" passHref  >
                    <span className="cursor-pointer hover:text-red transition-colors duration-200 md:text-xl px-2" >Home</span>
                </Link>
                <Link href="/products" passHref >
                    <span className="cursor-pointer hover:text-red transition-colors duration-200 md:text-xl px-2" >Products</span>
                </Link>
                <Link href="/about-us" passHref >
                    <span className="cursor-pointer hover:text-red transition-colors duration-200 md:text-xl px-2" >About Us</span>
                </Link>
                <Link href="/careers" passHref >
                    <span className="cursor-pointer hover:text-red transition-colors duration-200 md:text-xl px-2" >Careers</span>
                </Link>
                <Link href="/contact-us" passHref >
                    <span className="cursor-pointer hover:text-red transition-colors duration-200 md:text-xl px-2" >Contact Us</span>
                </Link>
           </div>
           < BurgerBtn/>
        </nav>
    )
}