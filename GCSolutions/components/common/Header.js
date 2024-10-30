import Link from "next/link"
import { Logo, TitleLogo } from "./Title"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { RiMenu4Line } from "react-icons/ri"
import { AiOutlineClose } from "react-icons/ai"


const Header = () => {
  const [activeLink, setActiveLink] = useState("")
  const [open, setOpen] = useState(false)

  const router = useRouter()
  useEffect(() => {
    setActiveLink(router.pathname)
  }, [router.pathname])
  return (
    <>
      <header>
        <div className='container'>
          <div>
            <Link href='/'>
              <Logo/>
            </Link>
          </div>
          <nav className={open ? "openMenu" : "closeMenu"} onClick={() => setOpen(null)}>
            <Link href='/' className={activeLink == "/" ? "activeLink" : "none"}>
              Accueil
            </Link>
            <Link href='/about' className={activeLink == "/about" ? "activeLink" : "none"}>
              About Us
            </Link>
            <Link href='/formation' className={activeLink == "/formation" ? "activeLink" : "none"}>
              Formation
            </Link>
            <Link href='/installation' className={activeLink == "/installation" ? "activeLink" : "none"}>
              Installation
            </Link>
            <Link href='/audit' className={activeLink == "/audit" ? "activeLink" : "none"}>
              Audit
            </Link>
            <Link href='/conferences' className={activeLink == "/conferences" ? "activeLink" : "none"}>
              Conferences
            </Link>
            <Link href='/bureau' className={activeLink == "/bureau" ? "activeLink" : "none"}>
              Bureau d'etude
            </Link>
            <Link href='/contact' className={activeLink == "/contact" ? "activeLink" : "none"}>
              Contact
            </Link>
          </nav>
          <button className="toggle-button" onClick={() => setOpen(!open)}>{open ? <AiOutlineClose size={25} /> : <RiMenu4Line size={25} />}</button>
        </div>
      </header>
    </>
  )
}

export default Header
