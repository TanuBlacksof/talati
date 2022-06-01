
import Link from "next/link"

export const Footer  = () =>{
    return(
        <footer className="min-h-[25rem] bg-gradient-to-b from-footer-top to-footer-bottom font-poppins text-white" >
            <section className="  max-w-screen-2xl  sm:w-11/12 mx-auto lg:flex flex-wrap items-start justify-between  px-4 gap-7 h-full">
                <div className="flex flex-col flex-nowrap items-start justify-start py-6 ">
                    <h3 className="font-semibold  text-lg lg:text-xl my-3">Quick Links</h3>
                    <ul className="list-none flex flex-col flex-nowrap gap-2">
                        <li>
                            <Link href="/" passHref>
                                <a className="xl:text-lg">Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/products" passHref>
                                <a className="xl:text-lg">Products</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about-us" passHref>
                                <a className="xl:text-lg">About Us</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/careers" passHref>
                                <a className="xl:text-lg">Careers</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact-us" passHref>
                                <a className="xl:text-lg">Contact Us</a>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col flex-nowrap py-6  ">
                    <h3 className="text-lg lg:text-xl my-3 font-semibold">Locations</h3>
                    <div className="flex flex-nowrap gap-2 items-start justify-start">
                        <svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" fill="#ffb614" className="my-2" viewBox="0 0 384 512"><path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"/></svg>
                        <span className="xl:text-lg">Khasra No:239/2, 240/1,Gram Sukhliya, < br /> 
                              Near Namkeen Cluster,Sanwer <br /> 
                              Road, Indore - 452007 (M.P.)
                        </span>
                    </div>
                </div>

                <div className="flex flex-col flex-nowrap py-6  ">
                    <h3 className="text-lg lg:text-xl font-semibold my-3">Contact</h3>
                    <div className="flex flex-col gap-4 items-start align-start">
                        <div className="flex flex-nowrap gap-2 items-start justify-start">
                            <svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" fill="#ffb614" className="my-2" viewBox="0 0 512 512"><path d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"/></svg>
                            <div className="flex flex-col flex-nowrap xl:text-xl ">
                                <span>0731-2973355</span>
                                <span>96693-39330</span>
                            </div>
                        </div>

                        <div className="flex flex-nowrap gap-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" fill="#ffb614" viewBox="0 0 512 512"><path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"/></svg>
                            <span className="xl:text-lg ">info@talatieasyfoods.com</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col flex-nowrap py-6 pb-6 ">
                    <h3 className="text-lg xl:text-xl font-semibold my-3">Follow Us</h3>
                    <div className="flex flex-nowrap gap-8 items-start justify-start">
                        <Link passHref href="https://www.facebook.com/talatieasyfoods/">
                            <a target="_blank"   >
                                <svg xmlns="http://www.w3.org/2000/svg" height="36" width="36" fill="#ffb614" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
                            </a>
                        </Link>
                        <Link passHref href="https://instagram.com/talatieasyfood?igshid=YmMyMTA2M2Y=">
                            <a target="_blank"   >
                                <svg xmlns="http://www.w3.org/2000/svg" height="36" width="36" fill="#ffb614" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                            </a>
                        </Link>
                        <Link passHref href="https://youtube.com/channel/UCiOdA2KnuE-giKm4ifvX2Rw">
                            <a target="_blank"   >
                                <svg xmlns="http://www.w3.org/2000/svg" height="36" width="36" fill="#ffb614"  viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="w-full py-8 pb-10 ">
                    <span className=" text-lg xl:text-xl">© 2022 Talati Easy Foods | All Rights Reserved</span>
                </div>
            </section>

                
        </footer>
    )
}