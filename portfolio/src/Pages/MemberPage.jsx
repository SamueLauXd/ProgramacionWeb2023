import { useEffect } from "react";
import { Footer, Nav } from "../Components";
import { ProjectCard } from "../Components/ProjectCard";

export function MemberPage() {
    useEffect((() => {
        window.scrollTo(0, 0)
    }), [])
    return (
        <>
            <Nav />
            <main className="px-20 mt-10">
                <section className="flex flex-row items-center justify-around gap-42">
                    <img src="./src/assets/images/alejo.webp"
                        alt="Alejo image"
                        className="w-1/4" />
                    <div>
                        <h2 className="font-lato font-semibold text-aquamarine-100 text-xl">More about</h2>
                        <h1 className="font-raleway font-bold text-white text-7xl w-min">Alejandro Solarte</h1>
                    </div>
                </section>
                <section className="grid grid-cols-2 mt-32">
                    <h3 className="font-raleway font-bold w-3/4 text-white text-3xl border-r"><span className="text-aquamarine-100">My</span> Biography</h3>
                    <p className="font-lato font-light text-white">Passionate developer who likes to always keep learning about the new technologies and more ways to improve his work. Also great UI / UX designer.</p>
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