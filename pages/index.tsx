import Head from 'next/head'
import  Navhero  from '../components/nav-hero'
import Hero from '../components/hero'
import Carousel from '../components/carousel'
import Footer from '../components/footer'
import {useEffect} from "react";
import Image from 'next/image'
import Galleryimage from '../components/gallery'



export default function Home() {
  useEffect(() => {
      require('tw-elements');;
    }, []);
    const numbers =[]
    for (let i = 1; i < 28; i++) {
      numbers.push(i);
      
    }
  return (
    <section className=''>

      <Head>
        <title>Little Wonders Play and Learn</title>
        <link rel="icon" href="/whitelogo.svg" />
        
      </Head>
    <div className="hidden sm:block relative">
    <Image
      layout="fill"
      className="object-center object-cover pointer-events-none"
      src="/hero.webp"
      loading='eager'
      alt="hero image"
    />
   <div className="relative z-1">
      <Navhero/>
      <Hero />
   </div>

      </div>
    <div className="sm:hidden  relative">
    <Image
      layout="fill"
      className="object-center  object-cover pointer-events-none"
      src="/hero-mobile.webp"
      loading='eager'
      alt="hero image"
    />
   <div className="relative bg-black bg-opacity-60 z-1">
      <Navhero/>
      <Hero />
   </div>

      </div>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 pb-10 items-center justify-center flex-col">
      <h1 className="title-font sm:text-4xl text center text-3xl my-4 py-6 font-medium text-gray-900">Our mission</h1>
    <div className="lg:w-2/6 relative md:w-3/6 w-5/6 mb-10">
    <Image width="720" height={600} className="lg:w-2/6 md:w-3/6 rounded-2xl w-5/6 mb-10" alt="hero" src="/mission.webp"/>
   </div>
   <p className='text-gray-700 px-6 text-2xl'>At Little wonders, our mission consists of providing a warm and nurturing environment where children feel safe. Our Preschool offers various activities that are specifically designed to encourage each child’s growth. Through cooperative play and creative activities, kids reach their social, emotional and physical milestones naturally and with ease.</p>
  </div>
</section>
      <Carousel/>
      <section className="text-gray-600 body-font">
  <div className="container lg:w-3/4 px-5 pb-10 mx-auto">

    <div className="flex flex-wrap -m-1 md:-m-2">
            {numbers.map(((num) => (
            <Galleryimage number={num} key={num}/>
          )))}
  </div>

    </div>
    </section>
    <Footer/>
    </section>
  )
}