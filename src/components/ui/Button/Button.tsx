import styles from './Button.module.css'
import ReactLoading from 'react-loading';

type Props = {
    type: "submit" | "reset" | "button" | undefined;
    text: string;
    color: "default" | "danger"
    loading?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const Button = ({type, text, color, loading, onClick}: Props) => {
  return (
    <button type={type} style={{backgroundColor: color === "default" ? "var(--blue)" : "var(--red)"}} id={styles.button} disabled={loading} onClick={onClick}>{loading ? <ReactLoading type="bubbles" color="white" height={30} width={30}/>: text}</button>
  )
}

export default Button;