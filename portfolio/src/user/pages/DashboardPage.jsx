import { useAuth } from "../../auth/hooks/useAuth"

export function DashboardPage() {
    const { logout } = useAuth()
    const liStyle = "font-raleway font-regular text-white text-3xl"
    return (
        <>
            <header className="flex px-20 py-8 items-center justify-between">
                <img
                    src="../src/assets/icons/logo.svg"
                    alt="Logo UXperience"
                    className="w-20" />
                <h2 className="font-raleway font-semibold text-white text-2xl">Hello, user</h2>
                <span 
                className="inline-flex items-center gap-3 hover:cursor-pointer"
                onClick={logout}>
                    <p className="font-raleway font-semibold text-white text-2xl hover:cursor-pointer">Log out</p>
                        <img src="../src/assets/icons/logout.svg" alt="" />
                </span>
            </header>
            <main className="flex flex-col items-center px-20 py-10 mt-12">
                <h1 className="font-raleway font-semibold text-[90px] text-aquamarine-100">Projects Dashboard</h1>
                <button className="bg-aquamarine-100 font-inter font-medium text-dark-blue text-xl px-3 py-2 rounded-2xl">Add new project</button>
                <ul className="flex items-center justify-between w-11/12">
                    <li className={liStyle}>Web Design</li>
                    <li>UX / UI</li>
                    <li>Brand</li>
                </ul>
                <section>
                    <article>Proyecto 1</article>
                    <article>Proyecto 2</article>
                </section>
            </main>
        </>
    )
}