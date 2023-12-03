import { Navigate } from "react-router-dom";
import { LoginForm } from "../components/LoginForm";
import { useAuth } from "../hooks/useAuth";

export function LoginPage() {
    const { user } = useAuth()

    if (user) {
        return <Navigate to='/dashboard' />
    }

    return (
        <main className="flex flex-col md:grid md:grid-cols-2 px-8 md:px-20 gap-8 py-8 md:py-20 h-[100vh]">
            <div className="grid place-items-center">
                <img src="/logo-large.svg" className="md:w-1/2 w-16" alt="U-Xperience Logo" />
                <h1 className="font-raleway font-regular text-white text-xl md:text-4xl md:w-min text-center">Administrator Panel</h1>
            </div>
            <LoginForm />
        </main>
    )
}