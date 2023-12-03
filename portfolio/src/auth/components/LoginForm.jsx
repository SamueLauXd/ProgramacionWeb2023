import { Link } from "react-router-dom"
import { useForm } from "../hooks/useForm"

export function LoginForm() {
    const {
        handleSubmit,
        handleInputChange,
        formData
    } = useForm()
    return (
        <form 
        onSubmit={handleSubmit}
        className="flex flex-col bg-[#1e2435] items-center justify-center py-6 border border-aquamarine-100 rounded-lg gap-12">
            <h5 className="font-raleway text-white font-bold text-lg md:text-xl text-center w-3/4 md:w-full">Hello! <br /> Log in to enter the administrator panel</h5>
            <fieldset className="flex flex-col gap-12 w-10/12 md:w-3/4">
                <div>
                    <label htmlFor="email" className="font-lato block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="font-lato bg-[#1e2435] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required />
                </div>
                <div>
                    <label htmlFor="password" className="font-lato block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="font-lato bg-[#1e2435] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required />
                </div>
                <fieldset className="flex flex-col gap-4">
                <button className="bg-aquamarine-100 py-2 font-lato font-medium rounded-lg" type="submit">Sign In</button>
                <Link to='/' className="border border-aquamarine-100 py-2 font-lato font-medium rounded-lg text-center text-white">
                    Return home
                </Link>
                </fieldset>
            </fieldset>
        </form>
    )
}