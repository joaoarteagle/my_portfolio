
import SocialMidiaList from "../../socialMediaList";
import styles from "./Home.module.css"
import img from '../../../assets/img/Coffee.png'

export default function Home({id}:  {id: string}) {
  return (
    <section id={id}>
      <div className={styles.home_container_items}>
        <div className={styles.home_title_container}>
          <h1>FULL-STACK DEVELOPER</h1> 
          <p>João Paulo Andrade</p>
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

