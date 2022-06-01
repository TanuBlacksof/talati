

import Image from "next/image"

export const ItemCard = ({ data  }) =>{
    const { name ,  coverLink , weights  } = data 
   
    return (
        <article className="px-10 bg-card  pt-10 pb-8  max-w-sm  min-h-full self-stretch  w-11/12  lg:w-[24rem] rounded-3xl overflow-hidden " >
            <div className="w-full mx-auto relative h-[14rem] md:h-[18rem]">
                <Image alt="" src={ coverLink}  layout="fill" objectFit="contain" priority  objectPosition="center" />
            </div>
           <div className="border-t-2 border-gray mt-5 pt-5  flex flex-col gap-2 items-center justify-center text-center ">
                <span className="text-xl md:text-2xl lg:text-3xl font-bold  text-slate-800">{ name }</span>
                <span className="text-lg lg:text-xl text-slate-800">{ weights }</span>
           </div>
        </article>
    )
}