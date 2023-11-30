import { Link, useNavigate } from "react-router-dom"
import { NavLink } from "react-router-dom"

export function Nav () {

    const navigate = useNavigate()

    const goHome = () => {
        navigate('/')
    }

const isActive = ({isActive}) => {
    return isActive ? 'text-aquamarine-100 border-b border-solid border-aquamarine-100' : 'hover:text-aquamarine-100'
}

    return (
        <nav className="w-full flex flex-col justify-between py-8 px-12 text-white bg-dark-blue opacity-80 md:flex-row md:items-center">
            <button onClick={goHome} className="transition-all pointer duration-200 hover:scale-110">
                <img src="/src/assets/icons/logo.svg" className="w-12"></img>
            </button>

            <section className="flex flex-col md:flex-row gap-6 items-center">
                <NavLink to='/projects' className={isActive}>Projects</NavLink>
                <NavLink to='/services' className={isActive}>Services</NavLink>
                <NavLink to='/about' className={isActive}>About Us</NavLink>
                <NavLink to='/contact' className={isActive}>Contact</NavLink>
            </section>
        </nav>
    )
}