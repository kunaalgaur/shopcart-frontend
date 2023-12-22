import { useEffect } from "react";
import AuthLayout from "../../components/layout/AuthLayout/AuthLayout";
import { useAuth } from "../../hooks/useAuth";
import { useAppSelector } from "../../redux/hooks";
import Heading from "../../components/ui/Heading/Heading";
import Button from "../../components/ui/Button/Button";
import {useNavigate} from 'react-router-dom';
import NotifyAuth from "../../components/layout/NotifyAuth/NotifyAuth";

const VerifyEmail = () => {
    const user = useAppSelector((state) => state.user.user);
    const navigate = useNavigate();

    if(!user.email){
      return <NotifyAuth/>
    }

    const {handleVerifyEmail} = useAuth(user.email as string);

    useEffect(() => {
        handleVerifyEmail();
    }, []);

  return (
    <AuthLayout>
        <Heading>Verify your email!</Heading>
        <span>We have sent an email to your registered email account, that email consists a link please click on that link to verify your email. Don't worry we will redirect you to us.</span>
        <Button text="I will do it later" type="button" color="default" onClick={() => {navigate('/')}}/>
    </AuthLayout>
  )
}

export default VerifyEmail