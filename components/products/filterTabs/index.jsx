
import Image from "next/image"
import { useEffect } from "react"


export const FilterTabs = ( { active , handler  }) =>  {


    const TabItem = ( { text , iconSrc , clickCB , id }) =>{
        return(
            <section  onClick={ clickCB } className={`${active  == id ?"border-b-4 border-red ":"hover:bg-slate-200" } transition-colors duration-200 cursor-pointer hover:bg-slate-200 rounded-md my-3 py-3  h-32 w-20 md:h-36 md:w-28 lg:h-40  lg:w-32 2xl:h-48 2xl:w-36  flex flex-col flex-nowrap items-center justify-center  text-center relative gap-4 `} >
                <div className="h-20 md:h-24 lg:h-28 2xl:h-30  relative min-w-full">
                    <Image  priority  alt="" src={ iconSrc } layout="fill" objectFit="contain"  />
                </div>
                <span className=" text-lg lg:text-xl text-gray">{ text }</span>
            </section>
        )
    }

    return (
        <section className="mx-auto blade-y-margin px-4 w-11/12 xl:w-10/12 2xl:w-9/12 max-w-5xl  flex flex-wrap items-center justify-evenly">
            <TabItem id="all" text="All"  iconSrc ="/product_filter/all.png" clickCB = {()=> handler ("all")}  /> 
            <TabItem id="mixes" text="Mixes"  iconSrc ="/home_tabs/instant_mixes.svg" clickCB = {()=> handler("mixes")} /> 
            <TabItem id="dessert" text="Desserts"  iconSrc ="/home_tabs/desserts.svg"  clickCB = {()=> handler ("dessert")} /> 
            <TabItem  id="flours" text="Flours"  iconSrc ="/home_tabs/flours.svg" clickCB = {()=> handler ("flours")} /> 
            <TabItem id="spices" text="Spices"  iconSrc ="/home_tabs/spices.svg"  clickCB = {()=> handler ("spices")}/> 
        </section>
    )
}