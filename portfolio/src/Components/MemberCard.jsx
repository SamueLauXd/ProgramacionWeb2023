import { Link } from "react-router-dom";
import { SecondaryButton } from "./SecondaryButton";
export function MemberCard ({name, subtitle, text, img}) {
    return (
        <div className="flex justify-end  w-6/12 relative px-4 py-10 rounded-3xl bg-[#1E2636] text-white">
            <img className="w-[250px] absolute left-2 bottom-0" src={img} alt="" />
            <div className="flex flex-col gap-6">
                <div>
                    <h3 className="font-raleway font-bold text-3xl text-aquamarine-100">{name}</h3>
                    <p>{subtitle}</p>
                </div>
                <p className="w-[350px]">{text}</p>
                <nav className="flex gap-6">
                    <img src="./src/assets/icons/twitter.svg" alt="" />
                    <img src="./src/assets/icons/linkedin.svg" alt="" />
                    <img src="./src/assets/icons/instagram.svg" alt="" />
                    <img src="./src/assets/icons/behance.svg" alt="" />
                </nav>
                <div>
                    <Link to="/member">
                        <SecondaryButton>More about me</SecondaryButton>
                    </Link>
                </div>
            </div>
        </div>
    )
}