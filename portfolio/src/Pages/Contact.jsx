import { Nav, Footer } from "../Components"
import { ContactForm } from "../components/ContactForm"
import { ContactOptions } from "../components/ContactOptions"

export function Contact() {
    return (
        <>
            <Nav />
            <main className="flex flex-col sm:gap-16 md:gap-0 md:grid md:grid-cols-2 px-12 mt-20">
                <section className="flex flex-col gap-2 md:gap-8">
                    <h1 className="mb-4 text-4xl text-white w-full md:w-3/4 font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Let’s discuss on something <span className="text-aquamarine-100">cool</span> together</h1>
                    <ContactOptions />
                </section>
                <ContactForm />
            </main>
            <Footer />
        </>

    )
}
