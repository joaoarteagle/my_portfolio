import style from './General.module.css';

function ArrowDownIcon(){
    return(
        <img className={style.arrowCircleIcon} src={`${import.meta.env.BASE_URL}img/arrow-down-circle.png`} alt='arrowDown'/>
    );
}

export default ArrowDownIcon;
