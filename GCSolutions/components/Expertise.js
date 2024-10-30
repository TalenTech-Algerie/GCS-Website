import React from "react"
import { Title } from "./common/Title"
import { expertise } from "@/assets/data/dummydata"
import { Card } from "./common/Card"
import Link from "next/link"

const Expertise = () => {
  return (
    <>
      <section className='expertise'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='Notre expértise' />
            <p>Former des professionnels qualifiés garantit non seulement la performance et la fiabilité des systèmes, mais aussi la sécurité des opérations, tout en maximisant les bénéfices environnementaux et économiques de ces nouvelles technologies.
            </p>
          </div>
          <div className='hero-content grid-4'>
            {expertise.map((item) => (
              <Card data={item} key={item.id} caption='learn more' />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Expertise
