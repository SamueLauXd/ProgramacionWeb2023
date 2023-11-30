import { Nav } from "../Components";
import { Footer } from "../Components";
import { useProjects } from "./hooks/useProjects";
import { Link } from "react-router-dom";
import { SecondaryButton } from "../Components";
import { useState } from "react";
import { ProjectsFilter } from "../Components/ProjectsFilter";

export function Projects() {

    const { projects } = useProjects()
    const [filterValue, setFilterValue] = useState('all')

    const handleFilterChange = ({ target }) => {
        setFilterValue(target.value)
    }

    const filteredProjects = filterValue === 'all' ? projects : projects.filter(project => Object.values(project.type).includes(filterValue))

    console.log(filteredProjects);

    return (
        <>
            <Nav />
            <div className="flex flex-col items-center gap-4">
                <h1 className="font-raleway font-bold text-6xl text-aquamarine-100">Our Projects</h1>
                <p className="font-lato text-white">Take a look of the projects we have been part of.</p>
            </div>
            <div className="grid place-items-center mt-20">
                <ProjectsFilter filter={filterValue} onChange={handleFilterChange} />
            </div>
            <section className="p-9 grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-10">
                {
                    filteredProjects.map(project => {
                        const { title, shortDesc, cardImg, longDesc, bannerImg, behance, author, type } = project
                        const background = `flex flex-col justify-end rounded-xl`;
                        return (
                            <div key={title} className={background}>
                                <img src={cardImg} loading="lazy" alt="" className="h-[300px] object-cover rounded-lg" />
                                <div className="flex flex-col bg-dark-blue bg-opacity-70 text-white py-6 gap-4" loading="lazy">
                                    <div>
                                        <h2 className="font-raleway font-bold text-2xl">{title}</h2>
                                        <p className="font-lato text-sm w-full">{shortDesc}</p>
                                    </div>
                                    <Link to={`/detail/${title}`} state={project}>
                                        <SecondaryButton>See more</SecondaryButton>
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
            </section>
            <Footer />
        </>
    )
}