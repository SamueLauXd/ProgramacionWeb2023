const BASE_URL = 'https://catfact.ninja/fact'

export const fetchCatFact = async () => {
    return fetch(BASE_URL)
    .then(res => {
        if (!res.ok){
            throw new Error('Error fetching fata from API')
        }
        return res.json()
    })
    .then(({fact}) => {
        return fact
    })
    .catch((e) => {
        throw new Error(e)
    })
}