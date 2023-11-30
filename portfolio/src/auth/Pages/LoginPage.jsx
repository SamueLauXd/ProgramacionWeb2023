import { Navigate } from "react-router-dom";
import { LoginForm } from "../components/LoginForm";
import { useAuth } from "../hooks/useAuth";

export function LoginPage() {
    const { user } = useAuth()

    if (user) {
        return <Navigate to='/dashboard' />
    }

    return (
        <main className="grid grid-cols-2 px-20 py-20 h-[100vh]">
            <div className="grid place-items-center">
                <img src="./src/assets/icons/logo-large.svg" className="w-1/2" alt="U-Xperience Logo" />
                <h1 className="font-raleway font-regular text-white text-4xl w-min text-center">Administrator Panel</h1>
            </div>
            <LoginForm />
        </main>
    )
}