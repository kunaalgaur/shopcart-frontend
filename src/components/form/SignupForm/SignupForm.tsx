import { useState } from "react"
import FormControl from "../../ui/FormControl/FormControl"
import Input from "../../ui/Input/Input"
import Button from "../../ui/Button/Button";
import { useAuth } from "../../../hooks/useAuth";
import { useAppSelector } from "../../../redux/hooks";

const SignupForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const {handleSignup} = useAuth(email, password, name);
    const {loading} = useAppSelector((state) => state.userRequest.signup)
  return (
    <FormControl onSubmit={handleSignup}>
        <Input type="text" text="Please enter your name." onChange={(e) => setName(e.target.value)} name="name"/>
        <Input type="text" text="Please enter your email." onChange={(e) => setEmail(e.target.value)} name="email"/>
        <Input type="password" text="Please create a password." onChange={(e) => setPassword(e.target.value)} name="password"/>
        <Button type="submit" text="Sign up" color="default" loading={loading}/>
    </FormControl>
  )
}

export default SignupForm;