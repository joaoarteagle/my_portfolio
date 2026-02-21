import styles from './header.module.css'

function OptionsHeader({link, section}: {link: string, section: string}) {
    return <a href={`#${link}`} className={styles.Option} >{section}</a>
}

export default OptionsHeader;