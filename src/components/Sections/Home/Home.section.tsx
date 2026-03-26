
import SocialMidiaList from "../../socialMediaList";
import styles from "./Home.module.css"
import img from '../../../assets/img/Coffee.png'
import { useTranslation } from "../../../hooks/useTranslation";

export default function Home({id}:  {id: string}) {
  const t = useTranslation();
  
  return (
    <section id={id}>
      <div className={styles.home_container_items}>
        <div className={styles.home_title_container}>
          <h1>{t.home.title}</h1> 
          <p>{t.home.subtitle}</p>
        </div>
        <img
          className={styles.home_coffee_image}
          src={img}
          alt="coffeLogo"
        />

      </div>
      <SocialMidiaList />

    </section>
  );
}

