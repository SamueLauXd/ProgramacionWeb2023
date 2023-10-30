export function Button ({children}) {
    return (
        <button className="text-black font-medium px-6 py-2 bg-green rounded-lg shadow-lg shadow-green/40 transition-all duration-200 hover:bg-aquamarine-100 hover:shadow-aquamarine-100/40 hover:shadow-xl">
            {children}
        </button>
    )
}