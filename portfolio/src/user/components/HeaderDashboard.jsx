import { useAuth } from "../../auth/hooks/useAuth"

export function HeaderDashboard() {
    const { logout, user } = useAuth()
    return (
        <header className="flex px-4 lg:px-20 py-4 sm:py-8 items-center justify-between">
            <img
                src="/logo.svg"
                alt="Logo UXperience"
                className="w-8 sm:w-20" />
            <h2 className="font-raleway font-semibold text-white hidden lg:block md:text-2xl">Hello, {user.email}</h2>
            <span
                className="flex items-center sm:gap-3 hover:cursor-pointer"
                onClick={logout}>
                <p className="font-raleway font-semibold text-white text-base hidden sm:text-2xl hover:cursor-pointer">Log out</p>
                <img src="/logout.svg" alt="" className="w-8" />
            </span>
        </header>
    )
}