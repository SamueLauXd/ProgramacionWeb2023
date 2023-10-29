import { Nav } from "../Components/Nav"
import { Footer } from "../Components/Footer"
import { ServiceCard } from "../Components/ServiceCard"
import { Link } from "react-router-dom"


export function Landing () {
    return (
        <>
            <Nav/>
            <main className="px-20 py-10 mt-20">
            <img src="./src/assets/images/bg-landing-1.webp" className="absolute top-0 right-0 -z-10"/>
                <div className="h-96">
                    <section className="flex flex-col rounded-2xl px-14 py-9 w-8/12 gap-10 backdrop-blur-md border border-solid border-white border-opacity-10">
                        <p className="text-aquamarine-100 text-x font-raleway">UXPERIENCE</p>
                        <h1 className="font-medium font-raleway text-white text-5xl">TRANSFORMING IDEAS INTO <span className="text-aquamarine-100">UNIQUE EXPERIENCES</span></h1>
                    </section>
                </div>

                <section className="flex items-end gap-40 text-white">
                    <img className="mt-36" loading="lazy" src="./src/assets/icons/landing-bg.svg"/>
                    <div className="flex flex-col gap-16">
                        <p className="text-lg text-aquamarine-200">About Us</p>
                        <h1 className="font-bold font-raleway text-3xl text-white">We are <span className="text-aquamarine-100">UXperience</span></h1>
                        <p className="text-lg font-lato border-t border-solid border-white pt-12">
                            We are an innovative design and development consultancy dedicated to transforming ideas
                            into exceptional digital experiences. Our focus is on creating impactful and effective 
                            solutions that captivate users and deliver tangible results for our clients.
                        </p>
                        <Link to='/about'>
                            <button className="bg-green text-dark-blue rounded-full px-4 py-2 hover:bg-aquamarine-100 transition-all duration-200">Learn more about us</button>
                        </Link>
                    </div>
                </section>

                <section className="flex flex-col items-center gap-8 mt-56">
                    <h1 className="font-bold font-raleway text-4xl text-white">We produce and craft <span className="text-aquamarine-100">experiences</span> to live</h1>
                    <p className="text-lg font-lato font-light text-white">Unique experiences that physically and emotionally engage the general public.</p>
                </section>

                <section className="flex justify-center gap-16 mt-28">
                    <ServiceCard icon={<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-vector-bezier" width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M3 14m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
                    <path d="M17 14m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
                    <path d="M10 6m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
                    <path d="M10 8.5a6 6 0 0 0 -5 5.5" />
                    <path d="M14 8.5a6 6 0 0 1 5 5.5" />
                    <path d="M10 8l-6 0" />
                    <path d="M20 8l-6 0" />
                    <path d="M3 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    <path d="M21 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    </svg>
                    }
                    title='UI & UX Design'
                    text='UI and UX Design to achieve an impressive look and feel of your apps, webs, among others'/>

                    <ServiceCard icon={<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-source-code" width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M14.5 4h2.5a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-5" />
                    <path d="M6 5l-2 2l2 2" />
                    <path d="M10 9l2 -2l-2 -2" />
                    </svg>
                    }
                    title='Web Design & Development'
                    text='Responsive web design and development to boost your online presence'/>

                    <ServiceCard icon={<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-layout-bottombar" width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                    <path d="M4 15l16 0" />
                    </svg>
                    }
                    title='Brand design & strategy'
                    text='Brand design and strategy to boost your business and be recognize by the audience'/>
                </section>

                <section className="w-full flex justify-end mt-32">
                    <div className="flex flex-col items-end gap-4">
                        <p className="font-lato text-white text-light">PROJECTS</p>
                        <h1 className="font-raleway font-bold text-white text-3xl">Our <span className="text-aquamarine-100">Projects</span></h1>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}