export function AboutParagraph ({order, title, text, image}) {

    const style = `flex ${order} justify-center items-center gap-20`

    return (
        <div className={style}>
            <div className="flex flex-col gap-10">
                    <h1 className="font-bold text-4xl">Our <span className="text-aquamarine-100">{title}</span></h1>
                    <p className="text-lg max-w-lg">
                        {text}
                    </p>
            </div>
            <img loading="lazy" src={`./src/assets/images/about-${image}.webp`} alt="" className="w-5/12 hidden lg:block"/>
        </div>
    )
}