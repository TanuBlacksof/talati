import design from "./index.module.css"
import Image from "next/image"

export const HomeTabs = () =>{

    const TabItem = ( { text , iconSrc}) =>{
        return(
            <section  className=" my-3 h-28 w-28 md:h-32 md:w-32 lg:h-36  lg:w-36 2xl:h-40 2xl:w-40  flex flex-col flex-nowrap items-center justify-center  text-center relative ">
                <div className="h-20 md:h-28  lg:h-32  2xl:h-36  relative min-w-full ">
                    <Image alt="" src={ iconSrc } layout="fill"  />
                </div>
                <span className=" text-lg lg:text-xl text-gray">{ text }</span>
            </section>
        )
    }

    return (
        <section className={`mx-auto blade-y-margin px-4 sm:w-11/12 xl:w-10/12 2xl:w-9/12 max-w-5xl  flex flex-wrap items-center justify-evenly ${design.homeTabs}`}>

            <div className="flex flex-wrap items-center justify-evenly basis-60 flex-1 gap-10 lg:gap-8">
                <TabItem text="Mixes"  iconSrc ="/home_tabs/instant_mixes.svg" /> 
                <TabItem text="Desserts"  iconSrc ="/home_tabs/desserts.svg" /> 
            </div>
            <div className="flex flex-wrap items-center justify-evenly basis-60 flex-1  gap-10 lg:gap-8">
                <TabItem text="Flours"  iconSrc ="/home_tabs/flours.svg" /> 
                <TabItem text="Spices"  iconSrc ="/home_tabs/spices.svg" /> 
            </div>
        </section>
    )
}