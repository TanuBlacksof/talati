

import Head from 'next/head'

import { PageBanner , FormHeader  } from "../components"
import { ContactUsForm } from "../components/contactUs"

export default function Home() {
  return (
    < >
      <Head>
        <title>talati easy foods - Contact Us </title>
        <meta name="description" content="Contact Us " />
        <link rel="icon" href="/favicon.png" />
      </Head>

     < PageBanner  bannerImg ="bg-about_banners"  text="Careers"/>
     < FormHeader title="Get In Touch" subtitle="Share your insights and let’s have a great conversation." />
     < ContactUsForm  />
     </>
  )
}
