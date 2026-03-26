import styles from './header.module.css'
import { useState, useEffect } from "react";
import OptionsHeader from './OptionsHeader';
import { useTranslation } from '../../../hooks/useTranslation';

function HeaderSection(){
    const [isSticky, setIsSticky] = useState(false);
    const t = useTranslation();

    useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        setIsSticky(scrollY > 0);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

   return(
    <nav className={`${styles.sticky} ${isSticky ? styles.stickyActive : ''}`}>
        <OptionsHeader section={t.nav.skills} link={"skillsSection"}/>
        <OptionsHeader section={t.nav.aboutMe} link={"aboutMeSection"}/>
        <OptionsHeader section={t.nav.home} link={"homeSection"}/>
        <OptionsHeader section={t.nav.projects} link={"projectsSection"}/>
        <OptionsHeader section={t.nav.contact} link={"contactSection"}/>
    </nav>
)};

export default HeaderSection;
