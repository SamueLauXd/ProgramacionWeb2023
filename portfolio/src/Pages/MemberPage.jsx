import { useEffect } from "react";
import { Footer, Nav } from "../Components";
import { ProjectCard } from "../Components/ProjectCard";
import { useLocation } from "react-router-dom";
import { useProjects } from "../projects/hooks/useProjects";

export function MemberPage() {
    useEffect((() => {
        window.scrollTo(0, 0)
        console.log(filteredProjects);
    }), [])

    const {projects} = useProjects()

    const {state} = useLocation()
    const {name, description, role, img} = state

    const filterKey = name.split(' ').slice(0, 1)[0].toLowerCase()

    const filteredProjects = projects.filter(project => project.author === filterKey)

    return (
        <>
            <Nav />
            <main className="px-20 mt-10">
                <section className="flex flex-row-reverse items-start md:flex-row md:items-center justify-around gap-42">
                    <img src={img}
                        alt={`${name} image`}
                        className="w-1/4" />
                    <div>
                        <h2 className="font-lato font-semibold text-aquamarine-100 text-xl">More about</h2>
                        <h1 className="font-raleway font-bold text-white text-3xl md:text-7xl w-min">{name}</h1>
                        <p className="text-white">{role}</p>
                    </div>
                </section>
                <section className="grid grid-cols-2 mt-32">
                    <h3 className="font-raleway font-bold w-3/4 text-white text-3xl border-r"><span className="text-aquamarine-100">My</span> Biography</h3>
                    <p className="font-lato font-light text-white">{description}</p>
                </section>
                <h3 className="font-raleway font-bold w-[95%] text-white text-3xl mt-40 mb-10 text-center"><span className="text-aquamarine-100">My</span> Projects</h3>
            </main>
                <section className='grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-10 px-9'>
                    <ProjectCard projects={filteredProjects} />
                </section>
            <Footer />
        </>
    )
}