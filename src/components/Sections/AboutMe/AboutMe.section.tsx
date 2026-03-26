import styles from "./AboutMe.module.css";
import ScrollReveal from "../../ScrollReveal";
import { useTranslation } from "../../../hooks/useTranslation";

export default function AboutMe({ id }: { id: string }) {
  const t = useTranslation();
  
  return (
    <section id={id}>
      <div className={styles.containerRow}>
        <ScrollReveal direction="down" delay={0.2} duration={0.8}>
          <img
            className={styles.myPhoto}
            src={`${import.meta.env.BASE_URL}img/myPhoto.png`}
            alt="minha foto"
          />
        </ScrollReveal>
        <div className={styles.aboutMeTextContainer}>
          <ScrollReveal direction="right" delay={0.3} duration={0.8}>
            <p className={`${styles.aboutMeText}`}>
              {t.aboutMe.paragraph1}
            </p>
          </ScrollReveal>
          
          <ScrollReveal direction="left" delay={0.5} duration={0.8}>
            <p className={styles.aboutMeText}>
              {t.aboutMe.paragraph2}
            </p>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.7} duration={0.8}>
            <p className={styles.aboutMeText}>
              {t.aboutMe.paragraph3}
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
