import Banner from "@/components/Banner"
import Brand from "@/components/Brand"
import Testimonial from "@/components/Testimonial"
import { Title, TitleSm } from "@/components/common/Title"
import { home } from "@/assets/data/dummydata"

const About = () => {
  return (
    <>
      <section className='agency'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='ABOUT Green Cooling Innovation' /> <br />
            <br />
            <Title title='The most innovative cooling company in the industry!' className='title-bg' />
          </div>

          <div className='content flex1'>
            <div className='left w-60 py'>
              <TitleSm title='Acquérir des compétences dans le domaine de frigorifigation' />
              <p className='desc-p'>Forts de 25 ans d'expérience dans le froid commercial, industriel, et la climatisation, nous mettons notre expertise au service de solutions innovantes et formons les professionnels pour assurer l'excellence dans le métier.
                Former des professionnels qualifiés garantit non seulement la performance et la fiabilité des systèmes, mais aussi la sécurité des opérations, tout en maximisant les bénéfices environnementaux et économiques de ces nouvelles technologies.
</p>
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
            <div className='right w-40 ml'>
              <img src='/images/s1.jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
          </div>

          <div className='content flex'>
            <div className='left w-40 py'>
              <img src='/images/s4.jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
            <div className='right w-60 ml'>
              <TitleSm title='Notre mission' />
              <br />
              <p className='misson-p'>Notre objectif est de fournir une expérience de formation immersive qui allie théorie et pratique pour préparer les apprenants à des carrières réussies.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default About
