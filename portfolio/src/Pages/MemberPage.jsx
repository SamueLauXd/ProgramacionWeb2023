import { useEffect } from "react";
import { Footer, Nav } from "../Components";
import { ProjectCard } from "../Components/ProjectCard";
import { useLocation } from "react-router-dom";

export function MemberPage() {
    useEffect((() => {
        window.scrollTo(0, 0)
    }), [])

    const {state} = useLocation()
    const {name, description, role, img} = state

    return (
        <>
            <Nav />
            <main className="px-20 mt-10">
                <section className="flex flex-row items-center justify-around gap-42">
                    <img src={img}
                        alt={`${name} image`}
                        className="w-1/4" />
                    <div>
                        <h2 className="font-lato font-semibold text-aquamarine-100 text-xl">More about</h2>
                        <h1 className="font-raleway font-bold text-white text-7xl w-min">{name}</h1>
                    </div>
                </section>
                <section className="grid grid-cols-2 mt-32">
                    <h3 className="font-raleway font-bold w-3/4 text-white text-3xl border-r"><span className="text-aquamarine-100">My</span> Biography</h3>
                    <p className="font-lato font-light text-white">{description}</p>
                </section>
                <h3 className="font-raleway font-bold w-[95%] text-white text-3xl mt-40 mb-10 text-center"><span className="text-aquamarine-100">My</span> Projects</h3>
                <section className="mb-20 flex flex-wrap gap-20 justify-center">
                    <ProjectCard />
                </section>
            </main>
            <Footer />
        </>
    )
}