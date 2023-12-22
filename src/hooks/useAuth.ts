import { useNavigate } from "react-router-dom"
import { useAxios } from "./useAxios"
import axios from 'axios'
import toast from "react-hot-toast";
import { useAppDispatch } from "../redux/hooks";
import { signup_failure, signup_request, signup_success } from "../redux/reducers/userRequestReducer";
import { runValidations } from "../utils/runValidations";
import { update_user_data } from "../redux/reducers/userReducer";

export const useAuth = (email?: string, password?: string, name?: string) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleSignup = async (e: any) => {
        e.preventDefault();
        const {runSignupValidation} = runValidations(email, password, name);
        if(runSignupValidation() === false){
            return;
        }
        dispatch(signup_request());
        try {
            const {postCall} = useAxios('/user/signup', {
                name: name,
                email: email,
                password: password
            });

            const response = await postCall();

            if(response.status === "success"){
                dispatch(signup_success({user: response.data.user, token: response.data.token}));
                dispatch(update_user_data(response.data.user));
                if(response.data.user.isEmailVerified === true){
                    return navigate('/');
                }else{
                    return navigate('/verify-email');
                }
            }
        } catch (error: any) {
            dispatch(signup_failure(error.message));
            if(axios.isAxiosError(error)){
                toast.error(error.response?.data.message);
                dispatch(signup_failure(error.response?.data.message));
            }
        }
    }

    const handleSignin = async (e: any) => {
        e.preventDefault()
        const {runSigninValidation} = runValidations(email, password);
        if(runSigninValidation() === false){
            return;
        }
        // dispatch()
        try {
            const {postCall} = useAxios('/user/signup', {
                email: email,
                password: password
            });
            const response = await postCall();
            console.log(response)
        } catch (error) {
            if(axios.isAxiosError(error)){
                toast.error(error.response?.data.message);
            }
        }
    }

    const handleVerifyEmail = async () => {
        try {
            const {postCall} = useAxios('/user/verify-email', {email: email})
            const response = await postCall();  
            if(response.status === "success"){
                toast.success(response.message);
            }  
            return;        
        } catch (error) {
            if(axios.isAxiosError(error)){
                return toast.error(error.response?.data.message);
            }
        }
    }

    return {handleSignup, handleSignin, handleVerifyEmail}
} 