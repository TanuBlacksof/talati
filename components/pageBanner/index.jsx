
import Image from "next/image"


export const PageBanner = ( { bannerImg , text  }) =>{
    return (
        <section className={` ${ bannerImg }  grid  place-content-center gap-7 h-48 md:h-72 lg:h-[22rem] bg-cover bg-left-top bg-no-repeat  `}>
                <h1 className="font-poppins text-4xl md:text-6xl lg:text-7xl text-white z-10 ">{ text }</h1>
                <div className=" h-6 lg:h-8 w-30 relative">
                    <Image alt=""  src="/page_banners/banner_star.svg"  layout="fill"   />
                </div>
        </section>
    )
}