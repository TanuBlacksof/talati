

import Image from "next/image"

export const AuthenticIngredients  =  ()=>{

    const TabItem = ( { text , iconSrc}) =>{
        return(
            <section  className="h-28 w-28 md:h-32 md:w-32 lg:h-36  lg:w-36 2xl:h-40 2xl:w-40  grid place-content-center text-center relative ">
                <Image  src={ iconSrc } layout="fill" alt=""  />
            </section>
        )
    }

    return(
        <>
        <section  className="lg:text-center mx-auto  blade-y-margin max-w-2xl lg:max-w-3xl  2xl:max-w-4xl   px-4 ">
            <h1 className="font-title  text-red max-w-4xl mb-5  md:mb-6 lg:mb-7">Authentic Ingredients</h1>
            <p className="para-text mt-3  md:mt-4  max-w-4xl font-semibold">Talati’s warehouse design facilitates separate premises for each product and ensures that our final product retains its natural flavors and color. We rely on the best and most resourceful vendors that provide high-quality raw materials.</p>
            <p className="para-text mt-3  md:mt-4  max-w-4xl">The ingredients utilized in Talati products are stored with utmost care ensuring hygiene protocols at all times. Every stage of production has quality checks at regular intervals ensuring that we deliver superior quality products.</p>
        </section>
        <section className="mx-auto blade-y-margin px-4 w-11/12 xl:w-10/12 2xl:w-9/12 max-w-5xl  flex flex-wrap items-center justify-evenly ">
            <div className="flex flex-wrap items-center justify-evenly basis-96 flex-1 gap-6 lg:gap-8">
                <TabItem text="Authentic Products"  iconSrc ="/aboutus_authentic/authentic.svg" /> 
                <TabItem text="Utmost Safety & Health"  iconSrc ="/aboutus_authentic/utmostSafety.svg" /> 
            </div>
            <div className="flex flex-wrap items-center justify-evenly basis-96 flex-1  gap-6 lg:gap-8">
                <TabItem text="Excellent Quality Control"  iconSrc ="/aboutus_authentic/excellentQuality.svg" /> 
                <TabItem text="100% Customer Satisfaction"  iconSrc ="/aboutus_authentic/customerSatisfaction.svg" /> 
            </div>
        </section>
        </>
    )
}