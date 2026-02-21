
import styles from './header.module.css'
import {useState, useEffect} from "react";
import OptionsHeader from './OptionsHeader';
import ThemeChanger from '../../themeChanger';


function HeaderSection(){
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY; // Posição do scroll vertical
        setIsSticky(scrollY > 0); // Ativa o sticky ao rolar mais de 50px
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Cleanup: Remove o evento ao desmontar o componente
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
  

   return(
    <nav className={`${styles.sticky} ${isSticky ? styles.stickyActive : ''}`}>

        {/* {options.map((section, link, key)=>(
          <OptionsHeader key={key} section={section} link={link}/>
        ))} */}
        <OptionsHeader section={"Skills"} link={"skillsSection"}/>
        <OptionsHeader section={"About Me"} link={"aboutMeSection"}/>
        <OptionsHeader section={"Home"} link={"homeSection"}/>
        <OptionsHeader section={"Projects"} link={"projectsSection"}/>
        <OptionsHeader section={"Contact"} link={"contactSection"}/>
        <ThemeChanger/>
    </nav>
)};


export default HeaderSection;


