import style from './General.module.css'

function SocialMidiaIcon({ icon, link }: { icon: string, link: string }) {

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={`${import.meta.env.BASE_URL}img/${icon}`} alt="Social Media Icon" className={style.socialMidiaIcon}/>  
    </a>
    );

}
export default SocialMidiaIcon;