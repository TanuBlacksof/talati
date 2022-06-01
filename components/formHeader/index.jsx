

export const FormHeader = ( { title , subtitle }) =>{
    return (
        <section className="grid place-content-center gap-10 text-center   blade-y-margin  ">
           <h1 className="text-4xl md:text-6xl lg:text-7xl text-gray">{ title }</h1>
           <h3 className="text-xl md:text-2xl text-gray  lg:text-3xl">{ subtitle }</h3>
        </section>
    )
}