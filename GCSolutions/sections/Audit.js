import Banner from "@/components/Banner"
import Brand from "@/components/Brand"
import Testimonial from "@/components/Testimonial"
import { Title, TitleSm } from "@/components/common/Title"

const Audit = () => {

  return (
    <>
      <section className='agency'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='Formation - Green Cooling Innovation' /> <br />
            <br />
            <Title title='La seule organisation a former des équipes dans la frigorifigation!' className='title-bg' />
          </div>
          <div className='content flex1'>
            <div className='left w-60 py'>
              <TitleSm title='Nos formations totalement pratiques' />
              <p className='desc-p'>Nous sommes la premiere organisation a mettre notre expertise au service de solutions innovantes et formons les professionnels pour assurer l'excellence dans le métier.
                Former des professionnels qualifiés garantit non seulement la performance et la fiabilité des systèmes, mais aussi la sécurité des opérations.</p>
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
              <TitleSm title='Nos formations' />
              <br />
              <p className='misson-p'>Télécharger notre curiculum de formation complet pratique & sur site</p>
              <br />
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

export default Audit
