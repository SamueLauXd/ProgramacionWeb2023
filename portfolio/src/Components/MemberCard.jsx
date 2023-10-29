export function MemberCard ({name, subtitle, text, img}) {
    return (
        <div className="flex justify-end  w-6/12 relative px-4 py-5 rounded-3xl bg-[#1E2636] text-white">
            <img className="w-[250px] absolute left-2 bottom-0" src={img} alt="" />
            <div className="flex flex-col gap-9">
                <div>
                    <h3 className="font-raleway font-bold text-3xl text-aquamarine-100">{name}</h3>
                    <p>{subtitle}</p>
                </div>
                <p className="w-[350px]">{text}</p>
                <nav className="flex gap-6">
                    <img src="./src/assets/icons/twitter.svg" alt="" />
                    <img src="./src/assets/icons/linkedin.svg" alt="" />
                    <img src="./src/assets/icons/instagram.svg" alt="" />
                    <img src="./src/assets/icons/behance.svg" alt="" />
                </nav>
                <div>
                    <button className="bg-green text-dark-blue rounded-full px-4 py-2 hover:bg-aquamarine-100 transition-all duration-200">More about me</button>
                </div>
            </div>
        </div>
    )
}