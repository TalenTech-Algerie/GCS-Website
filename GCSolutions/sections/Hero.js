import { home } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import Expertise from "@/components/Expertise"
import ShowCase from "@/components/ShowCase"
import Testimonial from "@/components/Testimonial"
import { Logo, Title, TitleLogo, TitleSm } from "@/components/common/Title"
import { BlogCard, Brand } from "@/components/router"
import React from "react"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
        <Title title='Green Cooling Innovation' />
        <br/>
          <div className='sub-heading white-shadow' >
            <TitleSm title='FORMATION' /> <span>.</span>
            <TitleSm title='AUDIT & EXPERTISE' /> <span>.</span>
            <TitleSm title='CONFERENCES' /> <span>.</span>
            <TitleSm title='INSTALLATION' />
          </div>
        </div>
      </section>
      <section className='hero-sec'>
        <div className='container'>
          {/* <div className='heading-title'>
            <Title title='Green Cooling Solution - Formez des experts, bâtir un avenir plus vert' />
            <p>Nous mettons notre expertise au service de solutions innovantes et formons les professionnels pour assurer l'excellence dans le métier.
            </p>
          </div> */}
          
        </div>
      </section>
      <Expertise />
      <Banner />
      <Testimonial />
      <Brand />

      {/* <div className='text-center'>
        <Title title='Notre presence' />
      </div>
      <BlogCard /> */}
    </>
  )
}

export default Hero
