import { useState } from "react"
import { useAuth } from "./useAuth"

export const useForm = () => {
    const { login } = useAuth()
    //Getting form data
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault(e)
        login(formData)
    }

    return {
        handleInputChange,
        handleSubmit,
        formData
    }
}