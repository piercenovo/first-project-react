import {API_KEY, API_URL} from '../services/settings'

const fromApiResponseToGifs = apiResponse => {
    const { data = [] } = apiResponse
    if (Array.isArray(data)) {
        const gifs = data.map(image => {
            const { images, title, id } = image
            const { url } = images.downsized_medium
            return { title, id, url }
        })
        return gifs
    }
    return []
}

export default function getGifs({ limit = 30, keyword = 'morty' } = {}) {
    const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=0&rating=G&lang=es`

    return fetch(apiURL)
        .then(res => res.json())
        .then(fromApiResponseToGifs)
}

// const apiKey = 'sUl68MD7h9bQb9DbITGZXdsGfz6pZ7E0';

// 'dIJrma20pSU6ymMwWnDbiaT7NFHeAGVa'

// export default function getGifs({keyword = 'morty'} = {}){
//     const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=28&offset=0&rating=g&lang=es`;

//     return fetch(apiURL)
//         .then(res => res.json())
//         .then(response => {
//             const { data = [] } = response
//                 const gifs = data.map(img => {
//                     const {title, id} = img 
//                     const { url } = img.images.downsized_medium
//                     return {title, id, url}
//                 })
//                 return gifs
//         })
// }

