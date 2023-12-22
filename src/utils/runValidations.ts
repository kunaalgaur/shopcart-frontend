import toast from "react-hot-toast";

const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const isValidPassword = (password: string) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password);
} 

export const runValidations = (email: string | undefined, password: string | undefined, name?: string | undefined) => {
    const runSignupValidation = () => {
        if(!name){
            toast.error("Form error: Name is a required feild.");
            return false;
        }
        if(!email){
            toast.error("Form error: Email is a required feild.");
            return false;
        }
        if(!isValidEmail(email)){
            toast.error("Form validation error: Must be a valid email.")
            return false;
        }
        if(!password){
            toast.error("Form error: Password is a required feild.");
            return false;
        }
        if(!isValidPassword(password)){
            toast.error("Form validation error: Password must contain at least one lowercase letter, At least one uppercase letter, at least one digit, minimum length of 8 characters.");
            return false;
        }
        return true;
    }

    const runSigninValidation = () => {
        if(!email){
            toast.error("Form error: Email is a required feild.");
            return false;
        }
        if(!password){
            toast.error("Form error: Password is a required feild.");
            return false;
        }
        if(!isValidEmail(email)){
            toast.error("Form validation error: Must be a valid email.")
            return false;
        }
        if(!isValidPassword(password)){
            toast.error("Form validation error: Must be a valid password.")
            return false;
        }
        return true;
    }

    return {runSignupValidation, runSigninValidation}
}