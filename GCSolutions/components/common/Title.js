
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
  return <img width={200} height={150} src="/gcslogoextended.png" alt='Green Cooling Innovation Logo'/>
}

export const TitleSm = ({ title }) => {
  return <h1 className='titleSm'>{title}</h1>
}
export const Title = ({ title, className }) => {
  return <b><h1 className={`${className} title`}>{title}</h1></b>
}
