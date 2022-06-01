



import Head from 'next/head'

import { Banner , Philosophy ,  InfraStructure , AuthenticIngredients , FlourishingWorldWide  } from "../components/aboutUs"

export default function Home() {
  return (
    < >
      <Head>
        <title>talati easy foods - About Us </title>
        <meta name="description" content="Share your insights and let’s have a great conversation." />
        <link rel="icon" href="/favicon.png" />
      </Head>
      < Banner />
      < Philosophy />
      < InfraStructure />
      < AuthenticIngredients />
      < FlourishingWorldWide />
    

 
     </>
  )
}
