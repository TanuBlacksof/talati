
import "./index.module.css"
import design from "./index.module.css"
import Image from "next/image"
// import aos from "aos"
// import  { useEffect } from 'react'

 export const OwnYourMix = () =>{

    // useEffect(() => {
    //     aos.init({
    //         easing: 'ease-out-back',
    //         duration: 1200,
    //     });
    // }, [])

    const Card = ( { src , title , content }) =>{
        return (
            <article data-aos="zoom-in" className="cursor-pointer border bg-white border-slate-300 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-150">
               <div className="relative h-64 md:h-72 xl:h-96 w-full">
                    <Image src={ src } alt="" layout="fill" objectFit="cover" />
               </div>
                <div className="flex flex-col gap-5  px-5 pt-5 pb-16  ">
                    <span className="font-subtitle text-red font-bold">{title}</span>
                    <span className="para-text">{content}</span>
                </div>
            </article>
        )
    }
    
    return(
        <div className={ design.ownMixMaster}>
           <div className={` ${design.titleWrapper} ml-auto `}>
           <h1 className="text-red  mb-5  md:mb-6 lg:mb-7 font-bold ">Own Your <span className="text-yellow">Mix</span></h1>
           </div>
           <div className={`flex flex-wrap  items-center  justify-center ${design.cardMaster}`}>
               <div className= {`flex flex-col gap-6 ${design.cardWrapperLeft}`}> 
                    <Card  
                        title="Hassle-Free Weekend Dinners" 
                        content="You don’t need to run on the clock and get your groceries in time for a fancy meal. Cook your next meal with 90% fewer ingredients with Talati."
                        src="/home_own_your_mix/hassleFreeImg.jpg"
                     />
                    <Card  
                        title="Prep-Time Sliced In Half"
                        content="With bare-minimum prep-time, Talati’s instant mixes help you make an inviting dinner for unexpected guests."
                        src="/home_own_your_mix/prepTimeImg.jpg"
                   />
               </div>
               <div className= {`flex flex-col gap-x-lg ${design.cardWrapperRight}`}> 
                    <Card  
                        title="Mess-Free Cooking"
                        content="Talati helps you enjoy making stress-free & mess-free meals with the added advantage of having a spotless kitchen."
                        src="/home_own_your_mix/messFreeCooking.jpg"
                   />
                    <Card  
                        title="Mess-Free Cooking"
                        content="Talati helps you enjoy making stress-free & mess-free meals with the added advantage of having a spotless kitchen."
                        src="/home_own_your_mix/messFreeCooking.jpg"
                   />
               </div>
           </div>
        </div>
    )
}
