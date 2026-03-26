import styles from './Projects.module.css'
const ProjectsCard = ({nameProject, urlRepository, img, description, right}: {nameProject: string, urlRepository: string, img: string, description: string, right?: boolean}) =>{
    return(

        <div className={styles.ProjectContainer} style={right ? {flexDirection: "row-reverse"} : {flexDirection: "row"}}>
            <div>

            <h3 className={styles.ProjectName}>{nameProject}</h3>
            <a href={urlRepository} target="_blank" rel="noopener noreferrer">
                <div className={styles.ImageWrapper}>
              

                    <img className={styles.ProjectImage} src={`src/assets/img/${img}`} alt='ProjectImage'/>
                </div>
            </a>
            </div>
            <p className={styles.DescriptionProject} style={right ? {textAlign: "right"} : {textAlign: "left"}}>{description}</p>

        </div>


    )
}

export default ProjectsCard