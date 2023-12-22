import React from "react";
import styles from './FormControl.module.css'

type Props = {
    onSubmit?: React.FormEventHandler<HTMLFormElement> | undefined;
    children: React.ReactNode;
}

const FormControl = ({onSubmit, children}: Props) => {
  return (
    <form onSubmit={onSubmit} id={styles.container}>
        {children}
    </form>
  )
}

export default FormControl