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
          <h1 className='hero-title'>Pour Un Future<br/> Plus Vert</h1>
          <div className='sub-heading white-shadow' >
            <TitleSm title='FORMATION' /> <span>.</span>
            <TitleSm title='INSTALLATION' /> <span>.</span>
            <TitleSm title='CONFERENCES' /> <span>.</span>
            <TitleSm title='AUDITION' />
          </div>
        </div>
      </section>
      <section className='hero-sec'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='Green Cooling Solution - Formez des experts, bâtir un avenir plus vert' />
            <p>Nous mettons notre expertise au service de solutions innovantes et formons les professionnels pour assurer l'excellence dans le métier.
            </p>
          </div>
          <div className='hero-content grid-4'>
            {home.map((item, i) => (
              <div className='box' key={i}>
                <span className='green'>{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Expertise />
      <Banner />
      <Testimonial />
      {/* <ShowCase /> */}
      <Brand />

      <div className='text-center'>
        <Title title='Notre presence' />
      </div>
      <BlogCard />
    </>
  )
}

export default Hero
