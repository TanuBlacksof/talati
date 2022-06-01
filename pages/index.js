import Head from 'next/head'

import { Banner , HomeTabs, AboutUs , FeaturedProducts , OwnYourMix , PartnerShip , GetInTouch  } from "../components/homePage"

export default function Home() {
  return (
    < >
      <Head>
        <title>talati easy foods - Home</title>
        <meta name="description" content="talati easy foods" />
        <link rel="icon" href="/favicon.png" />
      </Head>

       <Banner />
      <HomeTabs />
      <AboutUs /> 
      <FeaturedProducts />
      <OwnYourMix /> 
     <PartnerShip />
    <GetInTouch /> 
    </>
  )
}
