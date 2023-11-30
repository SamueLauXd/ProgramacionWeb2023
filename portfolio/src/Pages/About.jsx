import { Values } from "../Components/Values"
import { Nav } from "../Components/Nav"
import { Footer } from "../Components/Footer"
import { useEffect } from "react"
import { AboutParagraph } from "../Components/AboutParagraph"

export function About () {
    
    useEffect((() => {
        window.scrollTo(0,0)
    }), [])

    return (
        <>
        <Nav/>
        <img src="./src/assets/images/bg-image-1.webp" className="absolute top-0 right-0 -z-10"/>
        <main className="flex flex-col px-20 gap-36 text-white">
            <section className="flex flex-col mt-20">
                <div className="flex flex-col text-5xl md:text-8xl">
                    <h1 className="font-bold">What’s</h1>
                    <h1 className="font-bold"><span className="text-aquamarine-100">UX</span>PERIENCE?</h1>
                </div>
                <p className="max-w-3xl mt-16 text-lg">
                    We are an innovative design and development consultancy dedicated to
                    transforming ideas into exceptional digital experiences. Our focus is on creating 
                    impactful and effective solutions that captivate users and deliver tangible results for our clients.
                </p>
            </section>

            <section>
                <AboutParagraph order='flex-row' 
                title='Vision' 
                text='To be leaders in creating exceptional and transformative digital experiences 
                        that revolutionize the way people interact with the digital world. We strive to 
                        drive constant innovation, setting new standards in digital design and development, 
                        while working tirelessly to improve the human experience.'
                image='1'
                />
            </section>

            <section>
                <AboutParagraph order='flex-row-reverse' 
                title='Mision' 
                text='At U-Xperience, our mission is to leverage creativity and technology to transform 
                ideas into impactful digital solutions that captivate users and generate tangible results 
                for our clients. We are motivated by a deep desire to improve the human experience 
                online and offline, promoting projects and businesses that make a difference in the world. 
                We work closely with our clients to understand their aspirations and needs, 
                and use our unique approach to design and develop solutions that transcend expectations. 
                We are agents of change dedicated to turning ideas into actions that improve people’s lives 
                and transform the world.'
                image='2'
                />
            </section>

            <section className="flex flex-col items-center gap-20 mb-20">
                <h1 className="font-bold text-4xl">Our <span className="text-aquamarine-100">Values</span></h1>
                <Values
                    title='Creative Excellence'
                    text='We seek excellence in everything we do, driven by creativity and innovation. 
                    We believe creativity is the driving force behind exceptional solutions and we 
                    constantly strive to push boundaries.'
                    number='1'
                />
                <Values
                    title='Empathy and Commitment'
                    text='We value empathy towards our customers and end users. We are committed to 
                    understanding your needs and creating solutions that improve your lives. 
                    We put ourselves in the shoes of others to design more meaningful experiences.'
                    number='2'
                />
                <Values
                    title='Collaboration'
                    text='We believe in the strength of collaboration and work as a team to achieve 
                    outstanding results. We foster a work environment where ideas flow freely and where 
                    every voice is heard and respected.'
                    number='3'
                />
            </section>
        </main>
        <Footer/>
        </>
    )
}