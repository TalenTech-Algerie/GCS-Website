
export const TitleLogo = ({ title, caption, className }) => {
  return (
    <h1 className={`${className}  title-logo`}>
      <span>{caption}</span>
      {title}
    </h1>
  )
}
export const Logo = ()=>{
  return <img width={150} height={100} src="/gcslogo.png" alt='Green Cooling Solutions Logo'/>
}

export const LogoExtended=()=>{
  return <img width={400} height={150} src="/logoextended.svg" alt='Green Cooling Solutions Logo'/>
}

export const TitleSm = ({ title }) => {
  return <h1 className='titleSm'>{title}</h1>
}
export const Title = ({ title, className }) => {
  return <b><h1 className={`${className} title`}>{title}</h1></b>
}
