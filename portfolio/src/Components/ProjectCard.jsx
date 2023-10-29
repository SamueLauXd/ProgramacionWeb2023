export function ProjectCard ({title, subtitle, img}) {
    const background = `flex flex-col justify-end rounded-xl bg-[url(${img})] h-[525px]`
    return (
        <div className={background}>
            <div className="flex items-center justify-between bg-dark-blue bg-opacity-70 text-white px-10 py-6">
                <div>
                    <h2 className="font-raleway font-bold text-4xl">{title}</h2>
                    <p className="font-lato text-lg">{subtitle}</p>
                </div>
                <button className="bg-green text-dark-blue rounded-full px-4 py-2 hover:bg-aquamarine-100 transition-all duration-200">See more</button>
            </div>
        </div>
    )
}