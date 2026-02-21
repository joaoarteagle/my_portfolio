// import styles from "../Section.module.css";
import SkillComponent from "./Skill.component"
import styles from "./Skills.module.css"



export default function SkillsSection({id}: {id: string}){
    return(
        <section id={id} className={"SectionBase"}>

         <div className={styles.skillsContainer}>   
            <SkillComponent skillName={"Designer"} 
                            skillDescription={"I like to create my designs with a somewhat simple structure, but with a unique touch."} 
                            skillIcon={"DesignIcon.png"}
                            subDescription={"Tools"}
                            skills={["Figma", "Canva"]}
            />
            
            
            <SkillComponent skillName={"Code"} 
                            skillDescription={"I always try to improve my way of solving problems because it’s so important for code effectively."} 
                            skillIcon={"CodeIcon.png"}
                            subDescription={"Stacks"}
                            skills={["Java", "NodeJs","Typescript","JavaScript", "NestJs", "ReactJs", "Postgres", "MongoDB", "Prisma"]}
            />

        </div>
        </section>

    )
}