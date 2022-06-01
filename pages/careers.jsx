
import Head from 'next/head'

import { PageBanner , FormHeader  } from "../components"
import { CareersForm } from "../components/careers"

export default function Home() {
  return (
    < >
      <Head>
        <title>talati easy foods - Careers</title>
        <meta name="description" content="Share your insights and let’s have a great conversation." />
        <link rel="icon" href="/favicon.png" />
      </Head>

     < PageBanner  bannerImg ="bg-careers_banners"  text="Careers"/>
     < FormHeader title="Work With Us" subtitle="Share your insights and let’s have a great conversation." />
     < CareersForm  />
     </>
  )
}
