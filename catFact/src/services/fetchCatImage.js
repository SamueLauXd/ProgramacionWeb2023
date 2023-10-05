const BASE_IMAGE_URL = 'https://cataas.com/cat/says/'

export const fetchCatImage = async (fact) => {
    if (!fact) return
    const firstFourWords = fact.split(' ', 4).join(' ')
    return fetch(`${BASE_IMAGE_URL}${firstFourWords}`)
    .then(res => {
        if (!res.ok){
            throw new Error('Error fetching image')
        }
        return res.blob()
    })
    .then(image => {
        const imageURL = URL.createObjectURL(image)
        return imageURL
    })
    .catch((e) => {
        throw new Error(e)
    })
}