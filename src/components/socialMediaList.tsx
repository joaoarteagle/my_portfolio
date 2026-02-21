import SocialMidiaIcon from "./socialMidiaIcon";
import style from './General.module.css'

function SocialMidiaList(){
    return(
        <div className={style.socialMidiaListContainer}>
        <SocialMidiaIcon icon={"githubIcon.png"} link={"https://github.com/joaoarteagle"}/>
        <SocialMidiaIcon icon={"instagram.png"} link={"https://www.instagram.com/j_dev.andrade/"}/>
        <SocialMidiaIcon icon={"linkedin.png"} link={"https://www.linkedin.com/in/joaoandrade2606"}/>
        </div>
    )
}

export default SocialMidiaList;