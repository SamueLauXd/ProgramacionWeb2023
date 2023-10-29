import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"

export function Nav () {

const isActive = ({isActive}) => {
    return isActive ? 'text-aquamarine-100 border-b border-solid border-aquamarine-100' : 'hover:text-aquamarine-100'
}

    return (
        <nav className="w-full flex justify-between items-center py-8 px-12 text-white bg-dark-blue opacity-80">
            <Link to='/'>
                <img src="./src/assets/icons/logo.svg" className="w-12"></img>
            </Link>
            <section className="flex gap-6 items-center">
                <NavLink to='/' className={isActive}>Home</NavLink>
                <NavLink to='/services' className={isActive}>Services</NavLink>
                <NavLink to='/about' className={isActive}>About Us</NavLink>
                <NavLink to='/contact' className={isActive}>Contact</NavLink>
            </section>
        </nav>
    )
}