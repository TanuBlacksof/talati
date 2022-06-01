

import { Splide, SplideSlide } from '@splidejs/react-splide';

import Link from "next/link"
import '@splidejs/react-splide/css';
import { ItemCard } from "../../itemCard"
import design from "./index.module.css"

const dummyData =  [
    {
        "name": "Barik Besan",
        "weights": "1Kg",
        "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/flours%2FBarik%20Besan?alt=media&token=5becbd47-1ca2-4203-a27e-f25b5ceb8ba2"
    },
    {
        "weights": "100g",
        "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/mixes%2FSambhar%20?alt=media&token=06bb2413-cf1c-4ee1-a6dd-b30000ee7182",
        "name": "Sambhar ",
    },
    {
        "name": "Dosa ",
        "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/mixes%2FDosa%20?alt=media&token=e993c382-2518-4d02-a87a-5c430e3c9dae",
        "weights": "200g | 500g"
    },
    {
        "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/desserts%2FRose%20Kulfi?alt=media&token=e68f5a55-bc7a-411d-ae10-2dbca4217830",
        "name": "Rose Kulfi",
        "weights": "100g",
    },
    {
        "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/mixes%2FChakli?alt=media&token=4d9238bd-5347-4c1d-a4cc-ae60bea33e95",
        "name": "Chakli",
        "weights": "200g | 500g"
    },
    {
        "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/flours%2FBajra%20Thuli?alt=media&token=a7b0a8be-aadd-4bf8-94ca-d302605b9b96",
        "weights": "500g",
        "name": "Bajra Thuli",
    },
    {
        "weights": "50mg | 250mg | 500mg | 1g | 5g | ",
        "name": "Kesar",
        "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/others%2FKesar?alt=media&token=ae747c2d-6def-4591-91cb-38a896784bd4"
    },
    {
        "weights": "500g",
        "name": "Sattu",
        "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/flours%2FSattu?alt=media&token=7153bb9b-e2f8-4647-9d37-c602f246d87a"
    },
    {
        "weights": "12g | 50g | 100g",
        "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/masala%2FPaneer%20Masala?alt=media&token=4b6eb442-8405-4d76-9a26-6f885ecb9c36",
        "name": "Paneer Masala"
    },
]




export const FeaturedProducts = () =>{

    
    const splideOptions = {
        type:"loop",
        pagination:false,
        autoplay:true,
        interval:1000,
        autoHeight:true,
        lazyLoad:"sequential",
        arrows:false,
        perMove:1,
        perPage:4,
        breakpoints: {
            1024: {
                perPage:4
            },
            768:{
                perPage:2
            },
            640:{
               perPage:1
            }
        },
    }

    return(
        <section className={`${ design.master } bg-gradient-to-b from-home-featured-top to-home-featured-bottom  `}>
            <section className=" min-h-[45rem]  text-center  ">
            <h1 className="blade-title text-white pt-12">Featured Products</h1>
            <Splide options = { splideOptions }  className="pt-12 pb-8 grid" >
                { dummyData.map ( ( i , index ) =>{
                    return <SplideSlide className='place-content-center ' key={ index } >
                        <ItemCard   data ={ i}  /> 
                    
                    </SplideSlide>
                })}
            </Splide>
            <div className='pb-12 pt-6'>
                <Link passHref href="/products">
                    <a className="hero-btn  hover:bg-red hover:text-white text-red border-red border-2 ">Know More</a>
                </Link>

            </div>

        </section>

        </section>
        
    )
}