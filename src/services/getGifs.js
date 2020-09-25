const apiURL = 'https://api.giphy.com/v1/gifs/search?api_key=sUl68MD7h9bQb9DbITGZXdsGfz6pZ7E0&q=space&limit=25&offset=0&rating=g&lang=es';

export default function getGifs(){
    fetch(apiURL)
        .then(res => res.json())
        .then(response => {
            const { data } = response
            const gifs = data.map(image => image.images.downsized_medium.url)
            setGifs(gifs)
        })
}

