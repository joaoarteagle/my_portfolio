import style from './General.module.css';

type ButtonProps = {
    text: string;
    onClick: () => void;
};

const Button = ({ text, onClick }: ButtonProps) => {
    return (
        <button className={style.ButtonGeneric} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;