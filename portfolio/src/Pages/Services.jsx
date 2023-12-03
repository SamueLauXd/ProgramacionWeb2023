import { Nav } from "../Components/Nav"
import { Footer } from "../Components/Footer"
import { useEffect, useState } from "react"
import { SecondaryButton } from "../Components";
import { ServicesNav } from "../components/ServicesNav";
import { ServicesCarousel } from "../components/ServicesCarousel";
import { Link } from "react-router-dom";


export function Services() {
    const [filter, setFilter] = useState('web')
    const handleChange = ({ target }) => {
        setFilter(target.value)
    }

    useEffect((() => {
        window.scrollTo(0, 0)
    }), [])

    return (
        <>
            <header className="w-full bg-services-banner bg-cover h-[80vh] mb-8">
                <Nav className="absolute top-0 left-0 w-full z-10" />
                <section className="px-20 z-10 md:py-20">
                    <h1 className="flex flex-col gap-2 mb-4 text-4xl py-12 text-white w-full font-black leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-aquamarine-200 border-b-2 border-aquamarine-200 lg:w-1/2">What <span className="text-white">We excel at</span></h1>
                    <p className="font-lato font-light text-white text-xl mt-12">We offer a wide range of design services</p>
                </section>
            </header>
            <main className="py-10 flex flex-col items-center justify-center">
                <ServicesNav filter={filter} onChange={handleChange} />
                <ServicesCarousel filter={filter} />
                <section className="my-36">
                    <h3 className="font-raleway text-white font-bold text-3xl sm:text-6xl flex flex-col items-center gap-14">
                        <div className="flex flex-col">
                            <span>Have an idea?</span>
                            <span className="text-aquamarine-100">Let’s bring it to life</span>
                        </div>
                        <Link to='/contact'>
                            <SecondaryButton>Learn more</SecondaryButton>
                        </Link>
                    </h3>
                </section>
            </main>
            <Footer className="relative z-10" />
        </>
    )
}

