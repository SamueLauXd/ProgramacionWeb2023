import { Nav } from "../Components";
import { Footer } from "../Components";
import { useProjects } from "./hooks/useProjects";

export function Projects() {

    const { projects } = useProjects()

    return (
        <>
            <Nav />
            <div className="flex flex-col items-center gap-4">
                <h1 className="font-raleway font-bold text-6xl text-aquamarine-100">Our Projects</h1>
                <p className="font-lato text-white">Take a look of the projects we have been part of.</p>
            </div>
            <section className="text-white">
                Aqui van las cosas cuando alejo funcione
            </section>
            <Footer />
        </>
    )
}