import { SecondaryButton } from "./SecondaryButton";
import { landingProjects } from "../const/landingProjects";
import { Link } from "react-router-dom";

export function ProjectCard() {

    return (
        <>
            {
                landingProjects.map(({title, text, img}) => {
                    const background = `flex flex-col justify-end rounded-xl w-[613px] h-[476px] ${img}`;
                    return (
                        <div className={background}>
                            <div className="mt-60 flex items-center justify-between bg-dark-blue bg-opacity-70 text-white px-10 py-6" loading="lazy">
                                <div>
                                    <h2 className="font-raleway font-bold text-2xl">{title}</h2>
                                    <p className="font-lato text-sm w-96">{text}</p>
                                </div>
                                <Link to="/detail">
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