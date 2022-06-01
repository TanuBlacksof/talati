

import design from "./index.module.css"

export const Banner = () => {
    return(
        <section className={` h-[16rem] md:h-[20rem] bg-careers_banners bg-cover bg-left-top bg-no-repeat  flex items-center justify-end ${ design.master } `}>
            <div className="md:w-11/12  flex flex-col gap-3 px-8">
                <h3 className="font-subtitle text-yellow"> Disover Your Taste </h3>
                <h1 className=" w-9/12 sm:w-6/12 font-title  text-white" >Explore your passion for eating healthy</h1>
            </div>
        </section>
    )
}