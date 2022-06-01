
import Image from "next/image"
import Link from "next/link"
import design from "./index.module.css"
export const AboutUs = () =>{
    return(
       
        <section className={ design.master}>
            <section className="relative flex flex-wrap items-center justify-center gap-8 md:gap-12 mx-auto sm:w-11/12 xl:w-10/12 2xl:w-9/12 blade-y-margin ">
                <div className="h-[18rem] w-[18rem] xl:h-[28rem] xl:w-[28rem] mx-3 my-4 lg:my-6 relative">
                    <Image alt="" src="/home_aboutus/master.png" layout="fill" objectFit="contain" objectPosition="center"  />  
                </div>
                <div className="basis-[30rem] grow shrink max-w-2xl 2xl:max-w-3xl px-4 my-4 lg:my-6">
                    <h3 className="font-subtitle text-yellow mb-2">About Us</h3>
                    <h1 className="font-title text-red  mb-5  md:mb-6 lg:mb-7 ">Placing soulful Indian Food on the World Map</h1>
                    <p className="para-text mt-3  md:mt-4">Talati offers an exuberant range of easy-to-make instant mixes for you and your loved ones. We provide you with the best quality and assured products so that you can enjoy all your meals happily.</p>
                <div className="my-8">
                        <Link passHref href="/about-us">
                        <a className="hero-btn  hover:bg-red hover:text-white text-red border-red border-2 ">Know More</a>
                        </Link>
                </div>
                </div>

            </section>
        </section>

    )
}