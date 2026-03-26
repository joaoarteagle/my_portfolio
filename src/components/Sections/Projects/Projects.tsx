import styles from './Projects.module.css'
const ProjectsCard = ({nameProject, urlRepository, img, description, right}: {nameProject: string, urlRepository: string, img: string, description: string, right?: boolean}) =>{
    const containerClassName = `${styles.ProjectContainer} ${right ? styles.ProjectContainerRight : ''}`.trim();
    const descriptionClassName = `${styles.DescriptionProject} ${right ? styles.DescriptionProjectRight : ''}`.trim();

    return(
        <div className={containerClassName}>
            <div>
            <h3 className={styles.ProjectName}>{nameProject}</h3>
            <a href={urlRepository} target="_blank" rel="noopener noreferrer">
                <div className={styles.ImageWrapper}>
                    <img className={styles.ProjectImage} src={`${import.meta.env.BASE_URL}img/${img}`} alt='ProjectImage'/>
                </div>
            </a>
            </div>
            <p className={descriptionClassName}>{description}</p>
        </div>
    )
}

export default ProjectsCard