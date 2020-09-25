const apiKey = 'sUl68MD7h9bQb9DbITGZXdsGfz6pZ7E0';

export default function getGifs({keyword = 'morty'} = {}){
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=es`;

    return fetch(apiURL)
        .then(res => res.json())
        .then(response => {
            const { data = [] } = response
                const gifs = data.map(img => {
                    const {title, id} = img 
                    const { url } = img.images.downsized_medium
                    return {title, id, url}
                })
                return gifs
        })
}

