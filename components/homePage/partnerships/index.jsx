
import Image from "next/image"
import design from "./index.module.css"

export const PartnerShip =() =>{

    const PartnerItem = ({ iconSrc }) =>{
        return(
            <article className="xl:py-4  py-3 xl:px-4    px-2 rounded-2xl bg-white">
               <div className="w-60 h-12 relative">
                    <Image  alt="" src={ iconSrc } layout="fill" objectFit="contain" className="my-8" />  
               </div>
            </article>
        )
    }
    return(
        <section className={` min-h-[30rem] py-20 grid place-content-center  bg-gradient-to-b  from-home-partners-top to-home-partners-bottom  ${design.master} `}>
           <div className="max-w-screen-lg mx-auto flex flex-wrap items-center justify-center gap-10 ">
                <PartnerItem   iconSrc ="/home_partners/big_bazaar.png" />
                <PartnerItem   iconSrc ="/home_partners/reliance.png" />
                <PartnerItem   iconSrc ="/home_partners/dmart.png" />
                <PartnerItem   iconSrc ="/home_partners/v_mart.png" />
                <PartnerItem   iconSrc ="/home_partners/best_price.png" />
           </div>
        </section>
    )
}