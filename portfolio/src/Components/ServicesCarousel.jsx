import { services } from "../const/services"
import { SecondaryButton } from "./SecondaryButton"

export function ServicesCarousel({ filter }) {
    const filterServices = services.filter(({ value }) => value === filter)
    return (
        <section className="w-11/12 px-8 sm:px-20 inline-flex items-center justify-center">
            {
                filterServices.map(({ service, includes, banner, img }) => {
                    return (
                        <article className="flex flex-col bg-gray-white rounded-xl w-full relative py-6 px-4 sm:px-8 lg:flex-row lg:p-0 lg:gap-20" key={service}>
                            <img src={img} alt="Web & Dev icon" className="hidden -left-[6%] -top-[8%] lg:block lg:absolute lg:w-32" />
                            <h2 className="relative font-raleway w-full text-aquamarine-100 text-2xl font-bold text-center lg:absolute lg:left-[10%] lg:top-[10%] lg:w-1/3">{service}</h2>
                            <img src={banner} loading="lazy" className=" w-1/2 object-cover hidden lg:block" alt="Web design and development image" />
                            <div className="flex flex-col justify-center gap-12 w-full py-8">
                                <ul className="flex flex-col gap-4 w-full">
                                    {
                                        includes.map(feature => {
                                            return (
                                                <li className="font-lato text-white font-light text-xl pb-4 border-b-2 border-aquamarine-200 w-11/12 lg:w-5/6" key={feature}>{feature}</li>
                                            )

                                        })
                                    }
                                </ul>
                                <div className="m-auto lg:m-0">
                                    <Link to='/contact'>
                                        <SecondaryButton>Learn more</SecondaryButton>
                                    </Link>
                                </div>
                            </div>
                        </article>
                    )
                })
            }
        </section>
    )
}