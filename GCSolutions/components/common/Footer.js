import Link from "next/link"
import { Logo, LogoExtended, TitleLogo } from "./Title"
import { BsFacebook } from "react-icons/bs"
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai"
import { RiWhatsappFill } from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='grid-4'>
            <div className='logo'>
              <Link href='/'>
              <LogoExtended/>
              </Link>
              <br />
              <span>
                Questions? Contacter Nous <br /> Dimanche – Jeudi de 9 am to 6 pm
              </span>
              <br />
              <br />
              <h3>+213 797 78 31 80</h3>
              <br />
              <Link href='/contact'>
                <button className='button-primary'>Demander une consultation</button>
              </Link>
             
            </div>
            <ul>
              <h3>COMPANY</h3>
              <li>
                <Link href='/'>Accueil</Link>
              </li>
              <li>
                <Link href='/about'>About Us</Link>
              </li>
              <li>
                <Link href='/contact'>Contact</Link>
              </li>
              <li>
                <Link href='/'></Link>
              </li>
            </ul>
            <ul>
              <h3>SERVICES</h3>
              <li>
                <Link href='/formation'>Formation</Link>
              </li>
              <li>
                <Link href='/installation'>Installation</Link>
              </li>
              <li>
                <Link href='/bureau'>Bureau d'etude</Link>
              </li>
              <li>
                <Link href='/audit'>Audit</Link>
              </li>
            </ul>
            <ul>
              <h3>CONNECT</h3>
              <div className='connect'>
                <li>
                  <Link href='/'>
                    <BsFacebook size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <RiWhatsappFill size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          <div className='legal connect py'>
            <div className='text'>
              <span>© 2024 Talentech. ALL RIGHTS RESERVED.</span>
            </div>
            <div className='connect'>
              <span>Talentech Agency</span>
              <span> &nbsp; | &nbsp; </span>
              <span>TERMS & CONDITIONS</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
