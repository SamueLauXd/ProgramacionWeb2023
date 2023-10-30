import { useEffect } from "react";
import { Footer, Nav } from "../Components";

export function ProjectDetailPage() {
    useEffect((() => {
        window.scrollTo(0,0)
    }), [])
    return (
        <>
            <Nav />
            <section>
                <img src="./src/assets/images/dunkin-detail-banner.webp" alt="Dunkin Banner" loading="lazy" />
            </section>
            <main className="px-20 py-10 mt-8 grid place-items-center">
                <h1 className="flex flex-col font-raleway font-bold text-white items-center text-6xl">
                    <span className="font-raleway font-bold text-aquamarine-100 text-4xl">OOH'</span>
                    Dunkin
                </h1>
                <section className="grid grid-cols-2 mt-20 items-center">
                    <h3 className="flex flex-col font-raleway font-bold text-white items-start text-4xl"><span className="text-aquamarine-100 font-light text-2xl">Client</span> Dunkin' Brief</h3>
                    <p className="font-lato font-light text-white">
                        Dunkin’ <strong><span className="text-aquamarine-100">needs to capture new leads</span> for their digital media</strong> (social media, website, apps), and they know out-of-home (OOH) advertising is an effective strategy to drive people into their channels. Nonetheless, they need help finding a way to incorporate technology into compelling and meaningful interactive experiences.
                        <br />
                        Our job as a design firm is to <strong>create and prototype an interactive <span className="text-aquamarine-100">OOH experience</span></strong>  that captivates people's attention, delight them, captures their data, and invites them to enter the brand's digital channels.</p>
                </section>
                <section className="grid grid-cols-2 mt-20">
                    <img src="./src/assets/images/about-1.webp" alt="" loading="lazy" />
                    <img src="./src/assets/images/about-2.webp" alt="" loading="lazy" />
                </section>
                <section className="grid grid-cols-2 mt-20 gap-20">
                    <img src="./src/assets/images/mvp-dunkin.webp" alt="" loading="lazy" />
                    <div className="flex flex-col gap-20">
                        <h3 className="font-raleway font-bold text-white items-start text-4xl">MVP</h3>
                        <p className="font-lato font-light text-white">In order to provide a better experience, we designed a physical control that will allow the user to have greater comfort, control and precision when fulfilling the objective of our interaction, accompanied by sounds and lights that bring immersion to the interaction and provide feedback to the user.</p>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}