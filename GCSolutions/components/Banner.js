import React from "react"
import { Title, TitleLogo } from "./common/Title"
import Link from "next/link"

const Banner = () => {
  return (
    <>
      <section className='banner'>
        <div className='container'>
          <div>
            <Title title='Contacter nous, et faites nous part de vos ambitions' /> <br />
            <TitleLogo title='Laissez nous !' />
          </div>
          <div>
            <Link href='/contact'>
            <button className='button-primary'>Demnader une consultation</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner
