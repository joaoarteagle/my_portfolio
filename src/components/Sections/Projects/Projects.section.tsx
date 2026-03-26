import style from './Projects.module.css'
import ProjectsCard from "./Projects";
import ScrollReveal from "../../ScrollReveal";
import { useTranslation } from '../../../hooks/useTranslation';

interface ProjectProps {
    nameProject: string;
    urlRepository: string;
    img: string;
    description: string;
    right?: boolean;
}

export default function ProjectList({id}: {id: string}) {
    const t = useTranslation();
    
    const projectList: ProjectProps[] = [
        {
            nameProject: t.projects.project1.name,
            description: t.projects.project1.description,
            urlRepository: "https://joaoarteagle.github.io/esoft5s-bw-a/",
            img: "squirtleProjectPage.png"
        },
        {
            nameProject: t.projects.project2.name,
            description: t.projects.project2.description,
            urlRepository: "https://github.com/joaoarteagle/Spring-Boot-REST-API",
            img: "SpringBootProject.png",
            right: true
        },
        {
            nameProject: t.projects.project3.name,
            description: t.projects.project3.description,
            urlRepository: "",
            img: "aquiProject.png"
        }
    ];

    return(
        <section id={id}>
            <ScrollReveal direction="up" delay={0.1} duration={0.8}>
                <h1>{t.nav.projects}</h1>
            </ScrollReveal>
            <div className={style.ProjectsList}>

                {projectList?.map((project, index) => (
                    <ScrollReveal key={index} direction="up" delay={0.2 + (index * 0.2)} duration={0.8}>
                        <ProjectsCard 
                            nameProject={project.nameProject}
                            urlRepository={project.urlRepository}
                            img={project.img}
                            description={project.description}
                            right={project.right}/>
                    </ScrollReveal>
                ))}

            </div>
        </section>
    )
}
