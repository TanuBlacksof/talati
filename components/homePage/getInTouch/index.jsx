
import Image from "next/image"
import design from "./index.module.css"

export const GetInTouch = () =>{
    return(
        <section className=" min-h-[22rem] md:min-h-[30rem] lg:min-h-[34rem] my-[5rem]">
            <div className={`${design.wrapper } relative px-3 lg:-translate-x-1/4 mx-auto min-h-[20rem]`}>
                <div className="flex-1 w-full max-w-2xl  rounded-xl text-center grid place-content-center gap-4 lg:gap-6 bg-yellow min-h-[22rem] lg:min-h-[28rem] ">
                    <h1 className=" blade-title text-red font-bold">Get In Touch</h1>
                    <p className=" font-subtitle text-gray ">We just love a good conversation. Let’s connect</p>
                </div>
                <div className={`${design.imgWrapper} w-[26rem] h-[25rem] lg:w-[30rem] lg:h-[27rem] translate-x-1/2 top-28   absolute -z-10 hidden md:block`}>
                    <Image alt="" src="/home_touch/img.jpg" layout="fill" objectFit="contain"  />
                </div>
            </div>
        </section>
    )
}