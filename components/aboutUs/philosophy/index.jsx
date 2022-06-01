import Image from "next/image"

export const Philosophy  =  ()=>{
    return(
        <section className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mx-auto sm:w-11/12 xl:w-10/12 2xl:w-9/12  blade-y-margin">
            <div className="relative  h-[24rem] w-[24rem] xl:h-[28rem] xl:w-[28rem]">
                <Image alt="" src="/aboutus_philosophy/img.png" layout="fill" objectFit="contain" objectPosition="center"  />  
            </div>
            <div className="basis-[30rem] grow shrink max-w-2xl 2xl:max-w-3xl px-4 ">
                <h1 className="font-title text-red  mb-5  md:mb-6 lg:mb-7 ">Our Philosophy</h1>
                <p className="para-text mt-3  md:mt-4">The Talati Group started as a food marketing firm in 1994 and navigated our way into the Product Manufacturing Industry by 2002.</p>
                <p className="para-text  mt-3 md:mt-4">Bridging the gap between traditional eating and modern-day lifestyle, we have created the simplest yet most affordable and necessary products required in every Indian household and across the World.</p>
                <p className="para-text  mt-3 md:mt-4">We connect the World with our spices, desserts, flours, and our famous instant mixes.</p>
            </div>
        </section>
    )
}