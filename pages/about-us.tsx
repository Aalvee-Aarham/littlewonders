import Head from "next/head";
import {useEffect} from "react";
import { Banner } from "../components/banner";
import Footer from "../components/footer";
import  Nav  from '../components/nav'

import Member from "../components/team-member";
export default function About() {
    useEffect(() => {
        require('tw-elements');;
      }, []);
    return (
      <>
              <Head>
          <title>About Us</title>
          <link rel="icon" href="/whitelogo.svg" />
          
        </Head>
        <section className="bg-slate-100">
            <Nav/>
            <Banner title="About Us" />
        <div className="container  px-6 py-6  mx-auto">
            
  
  <section className="mb-32 block rounded-lg shadow-lg bg-white text-gray-800">
    <h1 className="font-medium title-font mb-4 text-gray-900 tracking-widest text-center py-10 text-3xl ">About Little Wonders</h1>
  <section className="text-gray-600 body-font">
        <div className="container px-5 pb-10 mx-auto">
          <div className="flex flex-wrap -mx-4  text-center">
            <div className="sm:w-1/2 px-4">
              <div className="rounded-lg h-96 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full" src="/premises/Uttara.webp"/>
              </div>
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Uttara Branch</h2>
            </div>
            <div className="sm:w-1/2 px-4">
              <div className="rounded-lg h-96 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full" src="/premises/Gulshan.webp"/>
              </div>
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Gulshan Branch</h2>
            </div>

          </div>
        </div>
      </section>



    <div className="text-gray-500 text-lg px-6 py-6 ">
    <p>Little Wonders Play &amp; Learn Center offers quality preschool program with unique ambience and curriculum where children of age 2-6 years get the opportunity to develop learning abilities through play based approach which parents often find difficult to provide at home.</p>

<p>Development during early childhood stage is so important that they cannot be left to chance; quality interventions</p>

<p>during preschool years have lasting effects on learning and motivations. Little Wonders is committed to give your child the best beginning to unlock the true possibilities for the rest of their lives.</p>

<p>At little wonders, we believe children learn best when at play. That is why we have used a play oriented curriculum. Our early childhood curriculum encourages discovery, exploration, creative learning and problem solving skills.</p>

<p>Here, at Little Wonders, we have a classroom full of friends to sing a song, teachers to dance along, corners to build a bridge with blocks, a wall to paint colors at liberty, a canvas to draw whatever the child imagines, an open field to run around, a green patch to soothe their eyes, a tree-house to count the birds, a soccer-field to fight over matches, a basketball court to aim for scores, a garden where children learn to grow their own vegetables and flowers, a sand shore to build their castles. And after a busy day they can take a nap in a caring hand.</p>

<p>We aim to develop your precious ones focusing on their social, emotional, intellectual, pre-academic and physical development that increase their interest to learn and help develop their confidence for the years ahead!</p>
    </div>
  </section>
  <section className="mb-32 text-gray-800">
    <div className="block rounded-lg shadow-lg bg-white">
            <h1 className="font-medium title-font mb-4 text-gray-900 tracking-widest text-center pt-10 text-3xl ">Our founders</h1>
      <div className="flex-wrap items-center container mx-auto flex px-5 py-24 md:flex-row flex-col">
        <div className="lg:flex grow-0 shrink-0 basis-auto lg:w-6/12 xl:w-4/12">
          <img src="/Team/Nazneen.webp" alt="Trendy Pants and Shoes"
            className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
        </div>
        <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
          <div className="px-6 py-12 md:px-12">
            <h2 className="text-2xl font-bold mb-4">Nazneen Akhter Ahmed</h2>
            <p className="uppercase font-bold mb-6 flex items-center">
             Founder
            </p>
            <p className="text-gray-500 mb-6">
            Nazneen Akhter Ahmed, an early childhood educator is one of the founders of Little Wonders Play & Learn Center. She completed her Post Graduation in Early Childhood Development from Brac University. She is also a Business Graduate, majoring Finance & Economics from North South University.
            </p>
            <p className="text-gray-500">
            Sanjana Jahangir, an early childhood educator has been involved in enrichment education for young learners since 2001. She is one of the pioneers who introduced
FasTracKids Bangladesh, she edited a childhood development magazine for parents and teachers, named 'Families' and is also reputed for helping or counseling parents in raising their kids. She completed her Postgraduate Diploma in Early Childhood Development from BRAC University. Earlier, she completed her Honors and Masters in
Economics from University of Dhaka.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="mb-32 text-gray-800">
    <div className="block rounded-lg shadow-lg bg-white">
      <div className="flex-wrap items-center container mx-auto flex px-5 py-24 md:flex-row flex-col">
        <div className="lg:flex grow-0 shrink-0 basis-auto lg:w-6/12 xl:w-4/12">
          <img src="/Team/Mahmooda.webp" alt="Trendy Pants and Shoes"
            className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
        </div>
        <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
          <div className="px-6 py-12 md:px-12">
            <h2 className="text-2xl font-bold mb-4">Ms. Mahmuda Akhter</h2>
            <p className="uppercase font-bold mb-6 flex items-center">
             Advisor
            </p>
            <p className="text-gray-500 mb-6">
            Ms. Mahmuda Akhter, an Executive Director of ICHD (Institute of Child & Human Development), is also the founder of ECD Resource Centre at IED, BRAC University. She headed the ECD resource center there from 2005 to 2011. She is also a Member of Asia Pacific Regional Network for Early Childhood (ARNEC) Steering Committee and Member Secretary, Bangladesh ECD Network since 2005. She received professional courses on child development from Southampton University and London University. Under her guidance significant number of researches has been conducted in the field of ECD.
            </p>
            <p className="text-gray-500">
            Muzahid Ali, Country Coordinator, Enfants du Monde (Switzerland), Bangladesh is involved for long in multi language skill and basic education curriculum development. He holds Master’s in Education and Development, Université de Ouagadougou, Burkina Faso and Master’s in Linguistics, Université de Rouen, France.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="text-gray-600 block rounded-lg shadow-lg bg-white body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">OUR TEAM</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">At Little Wonders, we have a team of teachers who put their best to make children storng and knowledgeable. Let's meet our respective teachers</p>
    </div>
</div>
<div className="flex flex-wrap -m-4">
    <Member 
    staff_name="Ms. Shalina Akhter" 
    postition="Manager of Little Wonders play and learn." 
    joining_date="since 1st March, 2013 till now."
    view="I strongly believe that as early educators we need to work on our ability to teach every child. If we can teach in their way they can actually learn."  
    />
    <Member 
    staff_name="Farzana Mahin Anu" 
    postition="Centre in charge – Uttara branch, Little Wonders play and learn." 
    joining_date="Since November 2013 till now."
    view="I love to work with little kids. I believe all my kids can actually perform and meet our expectation if only we believe that they can."  
    />
    <Member 
    staff_name="Lutfun Nahar (Lata)" 
    postition="Executive Admin and Accounts Little Wonders play and learn " 
    joining_date="Since April 2015"
    view="I belief that every person should complete his/her work on time. So I am honest and serious with my work."  
    />
    <Member 
    staff_name="Nazma Akther" 
    postition="Speech and Language Therapist at Little Wonders play and learn centre." 
    joining_date="Since June 2015"
    view="I love my profession and I feel special as I try to help children and parents to listen to, and understand each other"  
    />
    <Member 
    staff_name="Kawser Akter" 
    postition="Centre in charge – Gulshan branch Little Wonders play and learn " 
    joining_date="Since March 2015"
    view="I love to work with special kids and I feel like a very special teacher around them."  
    />
    <Member 
    staff_name="Ishana Fariha" 
    postition="Executive, Classroom Intervention Support Program" 
    joining_date="Since 1st February 2017 till now"
    view="I love to work with children. I always prefer to follow child’s direction while communicating with them."  
    />
    <Member 
    staff_name="Zarin Tasnim" 
    postition="Executive, classroom Intervention Support Program." 
    joining_date="1st April, 2017 to till today."
    view="I like to work with kids and I’m honest to serve them best thus they can achieve best."  
    />
    <Member 
    staff_name="Md. Aminul Haque" 
    postition="Occupational Therapist at Little Wonders play and learn centre." 
    joining_date="13th March 1018"
    view="I love my professions, I prefer to provide service to the special need children and work in different settings."  
    />
    <Member 
    staff_name="Jahanara Khatun Urmi" 
    postition="Executive, classroom Intervention Support Program." 
    joining_date="Since 1st December, 2018 to till today"
    view="I prefer to work with special need kids to improve their functional skills by providing appropriate 
    service so that they can achieve their highest target.
    "  
    />
    <Member 
    staff_name="Layla Afrin Luna" 
    postition="Occupational Therapist at Little Wonders play and learn centre." 
    joining_date="Since 11th December, 2018 to till today."
    view="I respect my profession most as why I honestly dedicate my knowledge and experience to enabling
    the engagement in daily living activities and promoting both physical and mental health of the person 
   with disabilities of all ages.     
   "  
    />
    <Member 
    staff_name="Rashida Akter" 
    postition="Executive, classroom Intervention Support Program" 
    joining_date="Since 15th July, 2019 to till today."
    view="I like to working with kids and I’m willing to serve my best for the betterment of the children with special need. "  
    />
    <Member 
    staff_name="Fairooz Rabiah Anika" 
    postition="Speech and Language Therapist at Little Wonders play and learn centre." 
    joining_date="Since November 2021"
    view="Helping individuals at all ability levels to communicate more effectively enables me to change the world one word at a time and thus I am proud to be part of such a glorious profession."  
    />
    
</div>
</section>
</div>
        
        </section>
        <Footer/>
                  </>
    )
  }
  