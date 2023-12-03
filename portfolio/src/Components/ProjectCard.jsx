import { SecondaryButton } from "./SecondaryButton";
import { landingProjects } from "../const/landingProjects";
import { Link } from "react-router-dom";
import { useProjects } from "../projects/hooks/useProjects";

export function ProjectCard({projects}) {
    return (
        <>
            {
                projects.map(project => {
                    const {title, shortDesc, cardImg, longDesc, bannerImg, behance, author, type} = project
                    const background = `flex flex-col justify-end rounded-xl gap-5`;
                    return (
                        <div key={title} className={background}>
                            <img src={cardImg} alt="" loading="lazy" className="w-[150px] md:h-[300px] object-cover rounded-lg"/>
                            <div className="flex flex-col bg-dark-blue bg-opacity-70 text-white py-6 gap-4" loading="lazy">
                                <div className="mb-3">
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
        </>
    )
}