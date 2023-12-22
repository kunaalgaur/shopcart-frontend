import styles from './Heading.module.css'

const Heading = ({children}: {children: React.ReactNode}) => {
  return (
    <span id={styles.heading}>{children}</span>
  )
}

export default Heading