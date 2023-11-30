/* eslint-disable react/prop-types */
export function Values ({title, text, number}) {
    return (
        <div className="max-w-3xl text-lg relative">
            <h3 className="font-bold text-2xl ml-14 text-transparent">
                {title}
            </h3>
            <p className="px-14 py-8 bg-gray-blue border-solid border border-white/10 rounded-2xl">
                {text}
            </p>
            <div className="absolute -left-8 -top-2 rounded-full">
                <h1 className="w-min h-min px-7 py-5 font-bold text-xl rounded-full bg-aquamarine-100 shadow-lg shadow-aquamarine-200">
                    {number}
                </h1>
            </div>
        </div>
    )
}