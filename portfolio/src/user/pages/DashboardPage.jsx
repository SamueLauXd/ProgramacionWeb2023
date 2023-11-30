import { Link } from "react-router-dom"
import { AddButton } from "../components/AddButton"
import { HeaderDashboard } from "../components/HeaderDashboard"
import { useState } from "react"

export function DashboardPage() {
    const liStyle = "font-raleway font-regular text-white text-3xl"
    return (
        <>
            <HeaderDashboard />
            <main className="flex flex-col items-center px-20 py-10 mt-12">
                <h1 className="font-raleway font-semibold text-[90px] text-aquamarine-100">Projects Dashboard</h1>
                <Link to='/dashboard/add'>
                    <AddButton />
                </Link>
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