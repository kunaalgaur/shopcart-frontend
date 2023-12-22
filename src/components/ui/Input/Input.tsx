import styles from './Input.module.css';
import {useState} from 'react'

type Props = {
    text: string;
    type: string;
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
    name: string;
}

const Input = ({text, type, onChange, name}: Props) => {
  const [toggle, setToggle] = useState(true)
  return (
    <label htmlFor={name} id={styles.container}>
        <span id={styles.text}>{text}</span>
        {type === "password" ?  
          <input type={toggle ? "password" : "text"} onChange={onChange} id={styles.input}/> :  
          <input type={type} onChange={onChange} id={styles.input}/>}
        {type === "password" ? 
          <div id={styles.wrapper}>
            <input type="checkbox" name="" id="" onChange={() => {setToggle(!toggle)}}/> 
            <span id={styles.text}>Show password</span>
          </div> : null}
    </label>
  )
}

export default Input