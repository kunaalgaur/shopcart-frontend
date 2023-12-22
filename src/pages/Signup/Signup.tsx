import SignupForm from '../../components/form/SignupForm/SignupForm'
import AuthLayout from '../../components/layout/AuthLayout/AuthLayout'
import styles from './Signup.module.css'
import {Link} from 'react-router-dom';

const Signup = () => {
  return (
    <AuthLayout>
      <span id={styles.heading}>Shopcart</span>
      <SignupForm/>
      <span id={styles.text}>Already a user ? <Link to="/signin" className={styles.link}>Sign in</Link></span>
      <Link to="/forgot-password" className={styles.link}>Forgot password ?</Link>
    </AuthLayout>
  )
}

export default Signup