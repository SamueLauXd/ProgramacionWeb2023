import { Link } from "react-router-dom"

/* eslint-disable react/prop-types */
export function ServiceCard ({icon, title, text}) {
    return (
        <div className="flex flex-col gap-9 items-center justify-between text-center w-80 px-10 py-5 rounded-2xl border border-solid border-aquamarine-100 border-opacity-40">
            <div className="grid place-items-center p-3 bg-aquamarine-200 rounded-full w-min">
                {icon}
            </div>
            <h1 className="font-bold font-raleway text-3xl text-aquamarine-100">{title}</h1>
            <p className="font-lato text-white text-lg">{text}</p>
            <Link to='/services'>
                <button className="bg-green px-4 py-2 rounded-full hover:bg-aquamarine-100 transition-all duration-200">See more</button>
            </Link>
        </div>
    )
}