import styles from "./AboutMe.module.css";

export default function AboutMe({ id }: { id: string }) {
  return (
    <section id={id}>
      <div className={styles.containerRow}>
        <img
          className={styles.myPhoto}
          src={`src/assets/img/myphoto.jpeg`}
          alt="minha foto"
        />
        <div className={styles.aboutMeTextContainer}>
          <p className={`${styles.aboutMeText}`}>
            {" "}
            I’m a Software Engineering undergraduate and a postgraduate student in Systems Development with Java, 
           focused on frontend development. 
              
          </p>
          
          <p className={styles.aboutMeText}>
          I mainly work with React, TypeScript, and Tailwind CSS, building responsive, 
           clean, and user-friendly interfaces.
            
          </p>

          <p className={styles.aboutMeText}>
            I have experience in real-world projects as a freelancer and within development teams, always aiming for 
           well-structured code and solutions that truly add value for users. I’m curious, collaborative, and constantly
           evolving as a developer.
          </p>
        </div>
      </div>
    </section>
  );
}
