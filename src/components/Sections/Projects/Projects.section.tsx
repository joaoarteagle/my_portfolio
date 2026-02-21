import style from './Projects.module.css'
import ProjectsCard from "./Projects";

export default function ProjectList({id}: {id: string}) {
    return(
        <section id={id}>

            <div className={style.ProjectsList}>
            <ProjectsCard 
                nameProject={"Projeto Squirtle"} 
                description={"Um Projeto de uma Landing Page sobre um Pokemon chamado squitle   Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ea sit laudantium est quos similique quia? Similique voluptatibus labore itaque, nulla, ipsa, cupiditate sapiente consectetur vero quaerat voluptatum nihil voluptates!"} 
                urlRepository={"https://joaoarteagle.github.io/esoft5s-bw-a/"} 
                img={"squirtleProjectPage.png"}/>

            <ProjectsCard 
                nameProject={"Projeto Java SpringBoot"} 
                description={"Desenvolvido com Java SpringBoot, CRUD completo de listagem de contatos com validador de dados Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ea sit laudantium est quos similique quia? Similique voluptatibus labore itaque, nulla, ipsa, cupiditate sapiente consectetur vero quaerat voluptatum nihil voluptates!"} 
                urlRepository={"https://github.com/joaoarteagle/Spring-Boot-REST-API"} 
                img={"SpringBootProject.png"} 
                right={true} />
            
            <ProjectsCard 
                nameProject={"AQUI📍"} 
                description={"Um Projeto de uma Landing Page sobre um Pokemon chamado squitle   Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ea sit laudantium est quos similique quia? Similique voluptatibus labore itaque, nulla, ipsa, cupiditate sapiente consectetur vero quaerat voluptatum nihil voluptates!"} 
                urlRepository={"https://joaoarteagle.github.io/esoft5s-bw-a/"} 
                img={"aquiProject.png"}/>

            
            </div>
        </section>
    )
}
