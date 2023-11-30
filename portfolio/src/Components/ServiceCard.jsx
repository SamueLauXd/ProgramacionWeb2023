import { Link } from "react-router-dom"
import { SecondaryButton } from "./SecondaryButton"
import { services } from "../const/services"
/* eslint-disable react/prop-types */
export function ServiceCard () {
    return (
        <>
        {
            services.map(thing => {
                const {service, img, description, id } = thing
                console.log(img);
                return (
                    <div key={id} className="flex flex-col gap-9 items-center justify-between text-center w-80 h-[400px] px-10 py-5 rounded-2xl border border-solid border-aquamarine-100 border-opacity-40">
                        <div className="grid place-items-center p-3 bg-aquamarine-200 rounded-full">
                            <img src={img} alt="" />
                        </div>
                        <h1 className="font-bold font-raleway text-2xl text-aquamarine-100">{service}</h1>
                        <p className="font-lato text-white">{description}</p>
                        <Link to='/services'>
                            <SecondaryButton>See more</SecondaryButton>
                        </Link>
                    </div>
                )
            })
        }
        </>
    )
}