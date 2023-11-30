import { contactOptions } from "../const/contactOptions"

export function ContactOptions() {
    return (
        <ul className="flex md:flex-col gap-12">
            {
                contactOptions.map(({ image, alt, label }) => {
                    return (
                        <a href="#"><li className="hidden sm:flex gap-2 items-center text-white text-sm md:text-base" key={label}><img src={image} alt={alt} aria-hidden="true" /> {label}</li></a>
                    )

                })
            }
        </ul>
    )
}
