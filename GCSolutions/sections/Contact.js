import { Title, TitleSm } from "@/components/common/Title"
import React from "react"
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"
import { BiUserCircle } from "react-icons/bi"
import { BsFacebook } from "react-icons/bs"
import { FiHeadphones, FiHelpCircle } from "react-icons/fi"
import { IoLocationOutline } from "react-icons/io5"
import { useState } from 'react';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '',
    timeframe: '',
    projectDetails: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    alert(result.message || result.error);
  };

//cffa2d935845e21c76aab7cbb6a90498-72e4a3d5-16109ed8
  return (
    <>
      <section className='contact'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='CONTACT - Green Cooling solutions' /> <br />
            <br />
            <Title title="Let's start right now!" className='title-bg' />
          </div>
          <div className='content py flex1'>
            <div className='left w-30'>
              <div className='contact-deatils'>
                <div className='box'>
                  <FiHeadphones size={30} className='icons' />
                  <h3>1-001-234-5678</h3>
                  <span>Contacter nous: Dim - Jeu 9:00 - 19:00</span>
                </div>
                <div className='box'>
                  <IoLocationOutline size={30} className='icons' />
                  <h3>New York</h3>
                  <span>990 Madison Ave, Midtown Manhattan, 2th Floor, NY 10022</span>
                </div>
                <div className='box'>
                  <FiHelpCircle size={30} className='icons' />
                  <h3>info@dream-theme.com</h3>
                  <span>Envoyer nous un message!</span>
                </div>
                <div className='box'>
                  <BiUserCircle size={30} className='icons' />
                  <h3>hr@dream-theme.com</h3>
                  <span>Carriere a Green Cooling Solutions</span>
                </div>
              </div>
              <ul>
                <li className='icon'>
                  <BsFacebook size={25} />
                </li>
                <li className='icon'>
                  <AiFillBehanceCircle size={25} />
                </li>
                <li className='icon'>
                  <AiFillInstagram size={25} />
                </li>
                <li className='icon'>
                  <AiFillLinkedin size={25} />
                </li>
              </ul>
            </div>
            <div className='right w-70'>
              <TitleSm title='Make an online enquiry' />
              <p className='desc-p'>Got questions? Ideas? Fill out the form below to get our proposal. </p>

              <form onSubmit={handleSubmit}>
              <div className='grid-2'>
                <div className='inputs'>
                  <span>Nom</span>
                  <input placeholder="Entrer votre nom" type='text' name='name' onChange={handleChange} required />
                </div>
                <div className='inputs'>
                  <span>Email</span>
                  <input placeholder="Entrer votre address mail" type='email' name='email' onChange={handleChange} required />
                </div>
              </div>
              <div className='grid-2'>
                <div className='inputs'>
                  <span>Votre Budget</span>
                  <input placeholder="Entrer votre budget" type='text' name='budget' onChange={handleChange} required />
                </div>
                <div className='inputs'>
                  <span>Timeframe</span>
                  <input placeholder="Entrer votre valabilite" type='text' name='timeframe' onChange={handleChange} required />
                </div>
              </div>
              <div className='inputs'>
                <span>Dites nous plus sur votre projet*</span>
                <textarea placeholder="Entrer des details sur votre raison de contact" name='projectDetails' cols='30' rows='10' onChange={handleChange} required></textarea>
              </div>
              <button type="submit" className='button-primary'>Submit</button>
            </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
