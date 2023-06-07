const apiKey= 'QP8U1mQoaoknYXia8cdtw6D4eUZnotKu'; //guardamos la apikey en una variable

export default function getGifs({keywords = 'panda'} = {}){
    //interpolamos la ruta con la variable de la api key y el valor de las keywords pasadas por parámetro
    const apiUrl= `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keywords}&limit=10&offset=0&rating=g&lang=en`;
    return fetch(apiUrl)
      .then(res => res.json())
      .then(response =>{
        const {data= []}= response;
        if (Array.isArray(data)){
            const gifs = data.map(image => {
                const {images, title, id}= image
                const {url} = images.downsized_medium
                return {title, id, url}
            });
                
            return gifs;
        }
      });
}