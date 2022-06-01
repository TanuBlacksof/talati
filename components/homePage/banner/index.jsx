

import { Splide, SplideSlide  } from '@splidejs/react-splide';
import Image from "next/image"
import Link from "next/link"
import design from "./index.module.css"

import '@splidejs/react-splide/css';


export const Banner  = ()  => {

    const splideOptions = {
        type:"loop",
        perPage:1,
        pagination:true,
        drag:true,
        autoplay:true,
        interval:1000,
        autoHeight:true,
        lazyLoad:"sequential",
        arrows:true,
        height:"calc(100vh - 100px) ",
        breakpoints: {
            1024: {
                height:"75vh",
            },
            768:{
                height:"55vh",
                arrows:false
               
            },
            640:{
                height:"350px"
            }
        },
        padding:0
    }


    return (
        <>
            <Splide options = { splideOptions }  className={ design.bannerMaster }>
                <SplideSlide className='flex flex-col  items-start justify-center gap-6  lg:gap-8  px-6 md:px-20 lg:px-36'>
                    <h1 className='font-title text-white z-10 lg:w-2/5'>
                        Exuberent and rich flavors that bring out heritage of India
                    </h1>
                    <Link href="/products" passHref >
                        <a  className='hero-btn bg-yellow hover:bg-red text-white '> Go To Products</a>
                    </Link>
                    <Image   className='slide-bg brightness-50 md:brightness-100' priority objectFit="cover" layout="fill" src="/home_banner/slide1.jpg" alt="Image 1"/>
                </SplideSlide>
                <SplideSlide className='flex flex-col  items-start justify-center gap-6  lg:gap-8   px-6 md:px-20 lg:px-36'>
                    <h1 className='font-title  text-white z-10 lg:w-2/5'>
                        Instantly prepare your favorite home made food
                    </h1>
                    <Link href="/products" passHref >
                    <a  className='hero-btn bg-yellow hover:bg-red text-white '> Go To Products</a>
                    </Link>
                    <Image  className='slide-bg brightness-50 md:brightness-100'   priority objectFit="cover" layout="fill" src="/home_banner/slide2.jpg" alt="Image 2"/>
                </SplideSlide>
                <SplideSlide className='flex flex-col  items-start justify-center  gap-6  lg:gap-8    px-6 md:px-20 lg:px-36'>
                    <h1 className='font-title  text-white  z-10 lg:w-2/5 hover:no-underline'>
                        Food that speaks to your heart
                    </h1>
                    <Link href="/products" passHref >
                    <a  className='hero-btn bg-yellow hover:bg-red text-white '> Go To Products</a>
                    </Link>
                    <Image className='slide-bg brightness-50 md:brightness-100'   priority objectFit="cover" layout="fill" src="/home_banner/slide3.jpg" alt="Image 3"/>
                </SplideSlide>
            </Splide>
        </>

    )
}