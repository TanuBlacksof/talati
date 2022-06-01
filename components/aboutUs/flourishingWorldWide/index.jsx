
import Image from "next/image"

export const FlourishingWorldWide  =  ()=>{
    return(
        <section className="flex flex-col flex-nowrap justify-center md:items-center blade-y-margin max-w-2xl lg:max-w-screen-2xl mx-auto px-4 "  >
            <h1 className="font-title  text-red max-w-4xl mb-5  md:mb-6 lg:mb-7 w-full lg:text-center" >Flourishing Worldwide</h1>
            <section className="flex flex-wrap items-center justify-center  mx-auto xl:w-10/12 2xl:w-9/12  mt-3  md:mt-4 rounded-xl overflow-hidden">
                <section className="basis-[30rem] max-w-screen-sm shrink grow  pl-4 py-7 md:pl-9 md:py-9 pr-4 md:pr-4 bg-yellow">
                    <p  className="para-text mt-3  md:mt-4">Talati’s philosophy includes spreading happiness with every meal. We embark on a journey to establish Talati as a Worldwide Brand.</p>
                    <p  className="para-text mt-3  md:mt-4">Talati’s work ethic and quality standards are committed to delivering the best products to our clients and customers.</p>
                    <p  className="para-text mt-3  md:mt-4">But none of this was possible without the support and commitment of our customers, helping us achieve quality with every single product that we offer and to attain peak customer satisfaction. We are grateful to be a household name in states like Chhattisgarh, Madhya Pradesh, Rajasthan, and Maharashtra.</p>
                    <p  className="para-text mt-3  md:mt-4">Our customers are our strength and inspiration. Let us unite and bring a new realm of healthy and authentic products to the Food Industry of India.</p>
                    <p  className="para-text mt-3  md:mt-4">We promise to take Indian Culture far beyond and spread joy throughout the World.</p>
                </section>
                <div className="relative basis-[30rem]  shrink grow  self-stretch items-start justify-start hidden lg:flex">
                    <Image alt=""  src="/about_flourish/img.jpg"  layout="fill" objectFit="cover" /> 
                </div>
        </section>
      </section>
    )
}