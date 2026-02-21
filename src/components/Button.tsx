import style from './General.module.css'
const Button = ({text, functionName}) => {
    return(
        <button className={style.ButtonGeneric} onClick={functionName}>
            {text}
        </button>
    )
}

export default Button