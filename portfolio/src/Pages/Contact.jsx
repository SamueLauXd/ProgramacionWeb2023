import { Nav, Footer } from "../Components"
import { contactOptions } from "../const/contactOptions"
import { services } from "../const/services"

export function Contact() {
    return (
        <>
            <Nav />
            <main className="grid grid-cols-2 px-12 mt-20">
                <section className="flex flex-col gap-8">
                    <h1 className="mb-4 text-4xl text-white w-3/4 font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Let’s discuss on something <span className="text-aquamarine-100">cool</span> together</h1>
                    <ContactOptions />
                </section>
                <ContactForm />
            </main>
            <Footer />
        </>

    )
}

function ContactOptions() {
    return (
        <ul className="flex flex-col gap-12">
            {
                contactOptions.map(({ image, alt, label }) => {
                    return (
                        <a href="#"><li className="flex gap-2 items-center text-white"><img src={image} alt={alt} aria-hidden="true" /> {label}</li></a>
                    )

                })
            }
        </ul>
    )
}

function ContactForm() {
    return (
        <form className="flex flex-col justify-between bg-white rounded-lg py-6 px-8" id="contact-form">
            <fieldset className="flex flex-col gap-4 mb-16">
                <h6>I’m interested in...</h6>
                <ul className=" flex flex-wrap w-5/6 justify-start gap-4">
                    {
                        services.map(({ id, inputLabel, value }) => {
                            return (
                                <li className="w-min" key={id}>
                                    <input type="checkbox" id={id} value={value} className="hidden peer" required="" />
                                    <label htmlFor={id} className="inline-flex items-center opacity-50 justify-between w-max px-5 py-2.5 text-gray-500 bg-white border-2 border-gray-200 rounded-2xl cursor-pointer dark:hover:text-aquamarine-200 dark:border-gray-700 peer-checked:border-aquamarine-200 peer-checked:opacity-100 peer-checked:bg-aquamarine-200 hover:text-gray-600 dark:peer-checked:text-white peer-checked:text-white hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                        {inputLabel}
                                    </label>
                                </li>
                            )
                        })
                    }
                </ul>
            </fieldset>

            <fieldset className="flex flex-col gap-6">
                <div className="relative h-11 w-full min-w-[200px]">
                    <input
                        type="text"
                        name="name/company"
                        className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-aquamarine-200 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" "
                    />
                    <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-aquamarine-100 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:after:scale-x-100 peer-focus:after:border-aquamarine-200 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Your name / company
                    </label>
                </div>
                <div className="relative h-11 w-full min-w-[200px]">
                    <input
                        type="email"
                        name="email"
                        className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-aquamarine-200 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" "
                    />
                    <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-aquamarine-100 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:after:scale-x-100 peer-focus:after:border-aquamarine-200 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Your email...
                    </label>
                </div>
                <div className="relative w-full min-w-[200px]">
                    <textarea
                        className="peer h-full min-h-[100px] w-full resize-none border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-aquamarine-200 focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" "
                    ></textarea>
                    <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-0 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-aquamarine-200 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:after:scale-x-100 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Message
                    </label>
                </div>
            </fieldset>

            <button type="submit"
                className="w-max flex flex-row items-center justify-center gap-1 text-white bg-aquamarine-200 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-2xl text-sm px-5 py-2.5 mr-2 mt-12 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                <img src="./src/assets/icons/send-icon.svg" alt="Send Message Icon" aria-hidden="true" />
                Send Message
            </button>
        </form>
    )
}