import { useEffect, useState } from "react"
import getCustomers from "../services/getCustomers"


export function useFilter () {
    const [search, setSearch] = useState('')
    const [customerList, setCustomerList] = useState([])

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    useEffect((() => {
        getCustomers().then(setCustomerList)
    }), [])

    const filter = () => {
        if (search.trim() === ''){
            return customerList
        }
        return customerList.filter((customer) => Object.values(customer).toString().includes(search))
    }
    return {
        filter,
        handleChange,
        search
    }
}