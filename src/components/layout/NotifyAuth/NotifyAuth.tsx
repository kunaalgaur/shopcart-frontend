import { useNavigate } from "react-router-dom"
import Button from "../../ui/Button/Button"
import Heading from "../../ui/Heading/Heading"
import AuthLayout from "../AuthLayout/AuthLayout"
import styles from './NotifyAuth.module.css'

const NotifyAuth = () => {
    const navigate = useNavigate()
  return (
    <AuthLayout>
        <Heading>Please login to continue!</Heading>
        <span>Before continuing, please login to access this resource.</span>
        <div id={styles.wrapper}>
            <Button text="Sign in" color="default" type="button" onClick={() => navigate('/signin')}/>
            <Button text="I am new here!" color="danger" type="button" onClick={() => navigate('/signup')}/>
        </div>
    </AuthLayout>
  )
}

export default NotifyAuth