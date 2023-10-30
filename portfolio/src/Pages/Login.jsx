export function Login() {
    return (
        <main className="grid grid-cols-2 px-20 py-20 h-[100vh]">
            <div className="grid place-items-center">
                <img src="./src/assets/icons/logo-large.svg" className="w-1/2" alt="U-Xperience Logo" />
                <h1 className="font-raleway font-regular text-white text-4xl w-min text-center">Administrator Panel</h1>
            </div>
            <LoginForm/>
        </main>
    )
}

function LoginForm() {
    return (
        <form className="flex flex-col bg-[#1e2435] items-center justify-center border border-aquamarine-100 rounded-lg gap-12">
            <h5 className="font-raleway text-white font-bold text-xl text-center">Hello! <br /> Log in to enter the administrator panel</h5>
            <fieldset className="flex flex-col gap-12 w-1/2">
                <div>
                    <label for="username" class="font-lato block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                    <input type="text" id="username" class="font-lato bg-[#1e2435] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Username" required />
                </div>
                <div>
                    <label for="password" class="font-lato block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" id="password" class="font-lato bg-[#1e2435] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" required />
                </div>
                <button className="bg-aquamarine-100 py-2 font-lato font-medium rounded-lg" type="submit">Sign In</button>
            </fieldset>
        </form>
    )
}