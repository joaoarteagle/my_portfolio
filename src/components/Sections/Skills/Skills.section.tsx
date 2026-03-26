import SkillComponent from "./Skill.component"
import styles from "./Skills.module.css"
import ScrollReveal from "../../ScrollReveal"
import { useTranslation } from "../../../hooks/useTranslation";



export default function SkillsSection({id}: {id: string}){
    const t = useTranslation();
    
    return(
        <section id={id} className={"SectionBase"}>
  
         <div className={styles.skillsContainer}>   
            <ScrollReveal direction="up" delay={0.2} duration={0.8}>
                <SkillComponent skillName={t.skills.designer.title} 
                                skillDescription={t.skills.designer.description} 
                                skillIcon={"DesignIcon.png"}
                                subDescription={t.skills.designer.tools}
                                skills={["Figma", "Canva"]}
                />
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.4} duration={0.8}>
                <SkillComponent skillName={t.skills.code.title} 
                                skillDescription={t.skills.code.description} 
                                skillIcon={"CodeIcon.png"}
                                subDescription={t.skills.code.stacks}
                                skills={["Java", "NodeJs","Typescript","JavaScript", "NestJs", "ReactJs", "Postgres", "MongoDB", "Prisma"]}
                />
            </ScrollReveal>

        </div>
        </section>

    )
}