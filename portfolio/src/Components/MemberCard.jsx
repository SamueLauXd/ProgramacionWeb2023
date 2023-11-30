import { Link } from "react-router-dom";
import { SecondaryButton } from "./SecondaryButton";
import { members } from "../const/members";
export function MemberCard () {
    return (
        <section className="flex flex-wrap gap-20 justify-center">
        {
            members.map(member => {
                const {id, name, role, img} = member
                return (
                    <div key={id} className="flex flex-col lg:flex-row justify-center gap-6 items-center relative px-10 pt-10 rounded-3xl bg-[#1E2636] text-white">
                        <img className="w-[250px]" src={img} alt="" />
                        <div className="flex flex-col gap-6">
                            <div>
                                <h3 className="font-raleway font-bold text-3xl text-aquamarine-100">{name}</h3>
                                <p>{role}</p>
                            </div>
                            <nav className="flex gap-6">
                                <img src="./src/assets/icons/twitter.svg" alt="" />
                                <img src="./src/assets/icons/linkedin.svg" alt="" />
                                <img src="./src/assets/icons/instagram.svg" alt="" />
                                <img src="./src/assets/icons/behance.svg" alt="" />
                            </nav>
                            <div className="grid place-items-center pb-6">
                                <Link to={`/member/${id}`} state={member}>
                                    <SecondaryButton>More about me</SecondaryButton>
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        </section>
    )
}