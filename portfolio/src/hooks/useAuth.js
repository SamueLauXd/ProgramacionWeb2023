import { useContext } from "react"
import { AuthContext } from "../auth/context/AuthContext"

export const useAuth = () => {
    const authContext = useContext(AuthContext)

    if (!authContext) {
        throw new Error('useAuth hook component use should be within its context Provider <AuthContextProvider>')
    }

    const {
        user,
        login,
        logout
    } = authContext

    return {
        user,
        login,
        logout
    }
}