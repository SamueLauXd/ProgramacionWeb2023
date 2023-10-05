import { useState, useEffect, useCallback } from "react";
import { fetchCatFact, fetchCatImage } from "../services";

export function useCat () {
    const [fact, setFact] = useState(null)
    const [image, setImage] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const getFact = () => {
        fetchCatFact().then(setFact)
        .catch(() => {
            setError('Sorry we had some issues')
        })
    }

    const getImage = useCallback(() => {
        setIsLoading(true)
        fetchCatImage(fact).then(setImage)
        .catch(() => {
            setError('Sorry we had some issues')
        })
        .finally(() => {
            setIsLoading(false)
        })
    }, [fact])

    useEffect(() => {
        getImage()
    }, [fact])

    return {
        image,
        fact,
        error,
        isLoading,
        getFact
    }

}