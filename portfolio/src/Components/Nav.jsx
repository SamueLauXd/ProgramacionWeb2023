import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { NavLink } from "react-router-dom"

export function Nav() {
    const [activeNav, setActiveNav] = useState(false)

    const navigate = useNavigate()

    const goHome = () => {
        navigate('/')
    }

    const isActive = ({ isActive }) => {
        return isActive ? 'text-aquamarine-100 border-b border-solid border-aquamarine-100' : 'hover:text-aquamarine-100'
    }

    const menuDisplay = activeNav ? 'flex flex-col text-xl bg-dark-blue absolute right-0 w-1/2 h-screen pr-12' : 'hidden'
    const navItems = activeNav ? 'h-screen items-start' : ''

    const toggleHamburger = () => {
        setActiveNav(prevState => !prevState)
    }

    return (
        <nav className={`w-full flex justify-between py-8 px-12 text-white bg-dark-blue opacity-80 md:flex-row md:items-center ${navItems}`}>
            <button onClick={goHome} className="transition-all pointer duration-200 hover:scale-110">
                <img src="/logo.svg" className="w-12"></img>
            </button>

            <button 
            className="w-12 md:hidden"
            onClick={toggleHamburger}
            ><img src="/hamburger.svg"/></button>
            <section className={`${menuDisplay} md:flex gap-6 md:items-center items-end`}>
                <button onClick={toggleHamburger}
                className="md:hidden"><img src="/close.svg" alt="" className="w-6"/></button>
                <NavLink to='/projects' className={isActive}>Projects</NavLink>
                <NavLink to='/services' className={isActive}>Services</NavLink>
                <NavLink to='/about' className={isActive}>About Us</NavLink>
                <NavLink to='/contact' className={isActive}>Contact</NavLink>
            </section>
        </nav>
    )
}