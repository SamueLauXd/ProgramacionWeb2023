import { Link } from "react-router-dom"
import { AddButton } from "../components/AddButton"
import { HeaderDashboard } from "../components/HeaderDashboard"
import { useState } from "react"
import { useProjects } from "../../projects/hooks/useProjects"
import { ProjectCard } from "../../Components/ProjectCard"

export function DashboardPage() {
    const { projects } = useProjects()
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
                    <l className={liStyle} i>UX / UI</l>
                    <li className={liStyle}>Brand</li>
                </ul>
            </main>

            <section className="p-9 grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-10">
                <ProjectCard projects={projects} />
            </section>
        </>
    )
}