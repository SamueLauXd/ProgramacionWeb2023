import { Nav } from "../Components/Nav"
import { Footer } from "../Components/Footer"
import { useEffect } from "react"

export function Services() {

    useEffect((() => {
        window.scrollTo(0,0)
    }), [])

    return (
        <>
            <header className="w-full bg-services-banner bg-cover h-[80vh] mb-16">
                <Nav className="absolute top-0 left-0 w-full z-10" />
                <section className="px-20 py-10 z-10 ">
                    <h1 className="flex flex-col gap-2 mb-4 text-4xl py-12 text-white w-1/2 font-black leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-aquamarine-200 border-b-2 border-aquamarine-200">What <span className="text-white">We excel at</span></h1>
                    <p className="font-lato font-light text-white text-xl mt-12">We offer a wide range of design services</p>
                </section>
            </header>
            <main className="px-20 py-10 flex flex-col items-center justify-center">
                <ul className="flex flex-row justify-between items-center w-5/6 border-b-2 border-aquamarine-100 pb-8 mb-24">
                    <li className="text-white font-raleway font-medium text-lg cursor-pointer hover:text-aquamarine-100 transition-colors">Web Design & Development</li>
                    <li className="text-white font-raleway font-medium text-lg cursor-pointer hover:text-aquamarine-100 transition-colors">UX/UI Design</li>
                    <li className="text-white font-raleway font-medium text-lg cursor-pointer hover:text-aquamarine-100 transition-colors">Brand design & strategy</li>
                </ul>

                <section>
                    <article className="grid grid-cols-2">
                        <div className="relative">
                            <h2 className="absolute font-raleway w-1/2 text-aquamarine-100 text-2xl font-bold">Web Design & Development</h2>
                            <img src="./src/assets/images/services-img-1.webp" className="w-5/6" alt="Web design and development image" />
                        </div>
                        <div className="grid place-start">
                            <ul className="flex flex-col gap-4">
                                <li className="font-lato text-white font-light text-xl pb-4 border-b-2 border-aquamarine-200 w-2/3">Responsive Web Design</li>
                            </ul>
                            <button>Learn more</button>
                        </div>
                    </article>
                </section>
            </main>
            <Footer className="relative z-10" />
        </>
    )
}