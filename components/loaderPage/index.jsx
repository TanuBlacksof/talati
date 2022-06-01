

export const FullScreenLoading  = () =>{
    return (
        <section style={{ position:"fixed",left:0,right:0,bottom:0,top:0}} className=" bottom-0 bg-slate-100 bg-opacity-30 z-10 grid place-content-center ">
             <img src="/loader.svg" alt="" style={{ height:"50px",width:"50px"}} />
        </section>
    )
}