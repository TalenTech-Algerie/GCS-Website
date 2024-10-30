import { blog } from "@/assets/data/dummydata"
import BlogCard from "@/components/BlogCard"
import { Card } from "@/components/common/Card"
import { Title, TitleSm } from "@/components/common/Title"
import React from "react"

const Conferences = () => {
  return (
    <>
      <section className='agency'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='Conferences - Green Cooling Solutions' /> <br/>
            <br />
            <Title title='Notre presence international' />
          </div>
          <BlogCard />
        </div>
      </section>
    </>
  )
}

export default Conferences;