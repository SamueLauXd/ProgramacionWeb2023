import { Link } from "react-router-dom";
import { SecondaryButton } from "./SecondaryButton";
import { members } from "../const/members";
export function MemberCard () {
    return (
        <>
        {
            members.map(member => {
                const {id, name, description, role, img} = member
                return (
                    <div key={id} className="flex justify-end  w-6/12 relative px-4 py-10 rounded-3xl bg-[#1E2636] text-white">
                        <img className="w-[250px] absolute left-2 bottom-0" src={img} alt="" />
                        <div className="flex flex-col gap-6">
                            <div>
                                <h3 className="font-raleway font-bold text-3xl text-aquamarine-100">{name}</h3>
                                <p>{role}</p>
                            </div>
                            <p className="w-[350px]">{description}</p>
                            <nav className="flex gap-6">
                                <img src="./src/assets/icons/twitter.svg" alt="" />
                                <img src="./src/assets/icons/linkedin.svg" alt="" />
                                <img src="./src/assets/icons/instagram.svg" alt="" />
                                <img src="./src/assets/icons/behance.svg" alt="" />
                            </nav>
                            <div>
                                <Link to={`/member/${id}`} state={member}>
                                    <SecondaryButton>More about me</SecondaryButton>
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        </>
    )
}