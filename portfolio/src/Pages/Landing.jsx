import { Nav } from "../Components/Nav"
import { Footer } from "../Components/Footer"
import { ServiceCard } from "../Components/ServiceCard"
import { ProjectCard } from "../Components/ProjectCard"
import { Link } from "react-router-dom"
import { MemberCard } from "../Components/MemberCard"
import { Button } from "../Components/Button"
import { SecondaryButton } from "../Components/SecondaryButton"


export function Landing () {
    return (
        <>
            <Nav/>
            <main className="px-20 py-10 mt-20">
            <img src="./src/assets/images/bg-landing-1.webp" className="absolute top-0 right-0 -z-10"/>
                <div className="h-96">
                    <section className="flex flex-col rounded-2xl px-14 py-9 w-full gap-10 backdrop-blur-md border border-solid border-white border-opacity-10 lg:w-8/12">
                        <p className="text-aquamarine-100 text-x font-raleway">UXPERIENCE</p>
                        <h1 className="font-medium font-raleway text-white text-5xl">TRANSFORMING IDEAS INTO <span className="text-aquamarine-100">UNIQUE EXPERIENCES</span></h1>
                        <Link to="/contact">
                            <Button>Get Started</Button>
                        </Link>
                    </section>
                </div>

                <section className="flex items-center gap-40 text-white mt-36">
                    <img className="hidden lg:block" loading="lazy" src="./src/assets/icons/landing-bg.svg"/>
                    <div className="flex flex-col gap-6">
                        <div>
                            <p className="text-lg text-aquamarine-200">About Us</p>
                            <h1 className="font-bold font-raleway text-5xl text-white">We are <span className="text-aquamarine-100">UXperience</span></h1>
                        </div>
                        <p className="text-lg font-lato border-t border-solid border-white pt-12">
                            We are an innovative design and development consultancy dedicated to transforming ideas
                            into exceptional digital experiences. Our focus is on creating impactful and effective 
                            solutions that captivate users and deliver tangible results for our clients.
                        </p>
                        <Link to='/about'>
                            <SecondaryButton>Learn more about us</SecondaryButton>
                        </Link>
                    </div>
                </section>

                <section className="flex flex-col items-center gap-3 mt-36">
                    <h1 className="font-bold font-raleway text-4xl text-white">We produce and craft <span className="text-aquamarine-100">experiences</span> to live</h1>
                    <p className="text-lg font-lato font-light text-white">Unique experiences that physically and emotionally engage the general public.</p>
                </section>

                <section className="flex justify-center items-center gap-16 mt-20 flex-wrap">
                    <ServiceCard/>
                </section>

                <section className="w-full flex justify-end mt-32">
                    <div className="flex flex-col items-end gap-4">
                        <p className="font-lato text-white text-light">PROJECTS</p>
                        <h1 className="font-raleway font-bold text-white text-5xl">Our <span className="text-aquamarine-100">Projects</span></h1>
                    </div>
                </section>

                <section className="flex flex-wrap gap-10 mt-20 items-center">
                    <ProjectCard/>
                    <div className="rounded-xl flex flex-col items-start gap-2 justify-center h-min p-20">
                        <h1 className="font-raleway font-medium text-white text-3xl">More to come</h1>
                        <SecondaryButton>See all</SecondaryButton>
                    </div>
                </section>

                <section>
                    <img className="w-11/12 mt-32" src="./src/assets/images/jum.webp" alt="" />
                </section>

                <section className="flex flex-col flex-wrap gap-12 mt-24">
                    <MemberCard/> 

                    <div className="flex justify-between">
                        <div className="w-4/12 flex flex-col justify-center">
                            <p className="font-raleway text-aquamarine-100">MEET OUR TEAM</p>
                            <h2 className="font-raleway font-medim text-4xl text-white"><span className="text-aquamarine-100">GREAT</span> PEOPLE BEHIND UXPERIENCE</h2>
                        </div>
                    </div>
                </section>

                <section className="mt-32 flex flex-col items-center gap-20">
                    <div className="text-white">
                        <p className="font-lato">TESTIMONIALS</p>
                        <h2 className="font-raleway font-bold text-4xl">What out clients say <span className="text-aquamarine-100">about us</span></h2>
                    </div>
                    <div className="w-6/12 flex flex-col gap-9 bg-aquamarine-200 text-black p-14 rounded-xl relative">
                        <img className="absolute -left-16 -top-16 w-32" src="./src/assets/images/profile.webp" alt="" />
                        <p>
                            “My experience working with the UXperience agency has been truly exceptional. From initial design through development and implementation, the UXperience team demonstrated a consistent commitment to excellence and innovation."
                        </p>
                        <div className="text-[#5E6282]">
                            <h4 className="font-lato font-medium text-xl">Mike Taylor</h4>
                            <p>Logistic manager of Dunkin’</p>
                        </div>
                    </div>
                </section>

                <section className="bg-landing-banner text-white px-10 py-44 flex flex-col gap-10 mt-32 rounded-3xl">
                    <div className="flex flex-col gap-4">
                        <h1 className="font-raleway text-4xl">Do you have any <span className="text-aquamarine-100">questions</span>?</h1>
                        <p>Feel free to send us your questions or request a free consultation.</p>
                    </div>
                    <Link to="/contact">
                        <Button>Contact Us</Button>
                    </Link>
                </section>
            </main>
            <Footer/>
        </>
    )
}