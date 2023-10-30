export function SecondaryButton ({children}) {
    return (
        <button className="text-green border w-max border-solid border-green text-base font-medium px-6 py-2 rounded-lg shadow-lg shadow-green/40 transition-all duration-200 hover:border-aquamarine-100 hover:text-aquamarine-100 hover:shadow-aquamarine-100/40 hover:shadow-xl">
            {children}
        </button>
    )
}