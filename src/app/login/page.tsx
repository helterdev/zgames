import LoginForm from "@/components/LoginForm/LoginForm";
import Navbar from "@/components/Navbar/Navbar";

export default function Login() {
    return <>
        <Navbar text="Signin" url="/" />
        <LoginForm />
    </>
}