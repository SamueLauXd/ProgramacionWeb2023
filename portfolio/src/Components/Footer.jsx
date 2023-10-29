import { Link } from "react-router-dom"

export function Footer () {
    return (
        <footer className="grid grid-cols-4 gap-20 text-white p-14 text-sm font-thin">
            <img src="./src/assets/icons/logo.svg" className="w-12"/>
            <section>
                <ul className="flex flex-col gap-6">
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About Us</Link>
                    </li>
                    <li>
                        <Link to='/services'>Services</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact Us</Link>
                    </li>
                    <li>Privacy Policy</li>
                </ul>
            </section>
            <section>
                <ul className="flex flex-col gap-6">
                    <li>Contact Us</li>
                    <li>123-456-789</li>
                    <li>@uxperience</li>
                    <li>uxperience@outlook.com</li>
                    <li>
                        <Link to='/login'>Administrator Panel</Link>
                    </li>
                </ul>
            </section>
            <section className="flex flex-col gap-2">
                <p>Social:</p>
                <nav className="flex gap-2">
                    <img src="./src/assets/icons/twitter.svg" alt="" />
                    <img src="./src/assets/icons/linkedin.svg" alt="" />
                    <img src="./src/assets/icons/instagram.svg" alt="" />
                    <img src="./src/assets/icons/behance.svg" alt="" />
                    <img src="./src/assets/icons/github.svg" alt="" />
                </nav>
            </section>
        </footer>
    )
}