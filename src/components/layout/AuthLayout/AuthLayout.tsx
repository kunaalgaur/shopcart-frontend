import React from 'react'
import styles from './AuthLayout.module.css'

const AuthLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div id={styles.container}>
        <div id={styles.wrapper}>
            {children}
        </div>
    </div>
  )
}

export default AuthLayout