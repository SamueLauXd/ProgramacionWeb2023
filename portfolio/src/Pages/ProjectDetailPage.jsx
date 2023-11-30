import { useEffect } from "react";
import { Button, Footer, Nav } from "../Components";
import { useLocation, useNavigate } from "react-router-dom";

export function ProjectDetailPage() {
    
    const {state} = useLocation()
    const {title, cardImg, longDesc, bannerImg, behance, shortDesc} = state

    useEffect((() => {
        window.scrollTo(0,0)
        console.log(state);
    }), [])

    const navigate = useNavigate()

    return (
        <>
            <Nav />
            <div className="my-8 px-10">
                <button className="text-white px-4 py-2 rounded-lg border border-aquamarine-200" onClick={() => navigate(-1)}>
                    Go back
                </button>
            </div>
            <div>
                <img src={bannerImg} alt="" />
            </div>
            <main className="text-white px-14 mt-10">
                <div className="flex flex-col gap-3">
                    <h1 className="font-bold text-5xl text-aquamarine-100">{title}</h1>
                    <p className="font-medium">{shortDesc}</p>
                </div>

                <div className="flex flex-col gap-3 mt-10">
                    <p>
                        {longDesc}
                    </p>
                </div>

                <a className="flex justify-center mt-10" href={behance} target="_blank">
                    <Button>See on Behance</Button>
                </a>
            </main>
            <Footer />
        </>
    )
}