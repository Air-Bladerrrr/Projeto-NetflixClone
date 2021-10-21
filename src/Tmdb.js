const API_KEY = 'b7c78236153fdad404d8b8c8e72fab3a';
const API_BASE = 'https://api.themoviedb.org/3';

/*
- Originais da Netflix.
- Recomendados
- Em Alta
- ação, comedia, terror, romance, documentarios  
*/

const basicFetch = async (endpoint) => {
    const req= await fetch('${API_BASE}${endpoint}');
    const json = await req.json();
    return json;
}

export default{
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await basicFetch('/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}')
            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: await basicFetch('/trending/all/week?language=pt-BR&api_key=${API_KEY}')
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFetch('/movie/top_rated?language=pt-BR&api_key=${API_KEY}')
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch('/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}')
            },
            {
                slug: 'comedy',
                title: 'Comedia',
                items: []
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: []
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: []
            },
            {
                slug: 'documentary',
                title: 'Documentarios',
                items: []
            },
        ]
    }
}