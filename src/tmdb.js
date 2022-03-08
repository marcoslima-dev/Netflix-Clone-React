const API_KEY = '8cf92d42cbc6f5859029a2111ee990d2';
const API_BASE = 'https://api.themoviedb.org/3'

/**
 -Originais da netflix
 -recomendados
 -melhores votados(em alta)
 -filmes de ação 
 -filmes de comédia
 -filmes de terror
 -filmes de romance
 -filmes documentários
 */

const basicFetch = async(endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}
 

export default {
    getHomeList: async () => {
        return [
            {
                slug:'originals',
                title:'Originais netflix',
                items: await basicFetch(`/discover/tv?with_network=213&languange=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'trending',
                title:'Recomendados para você',
                items:await basicFetch(`/trending/all/week?languange=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'toprated',
                title:'Em alta',
                items:await basicFetch(`/movie/top_rated?languange=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'action',
                title:'Filmes de Ação',
                items:await basicFetch(`/discover/movie?with_genres=28&languange=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'comedy',
                title:'Filmes de Comédia',
                items:await basicFetch(`/discover/movie?with_genres=35&languange=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'horror',
                title:'Filmes de Terror',
                items:await basicFetch(`/discover/movie?with_genres=27&languange=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'romance',
                title:'Filmes de Romance',
                items:await basicFetch(`/discover/movie?with_genres=10749&languange=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'documentary',
                title:'Documentários',
                items:await basicFetch(`/discover/movie?with_genres=99&languange=pt-BR&api_key=${API_KEY}`)
            },
        ]
    },
    getMovieInfo: async (movieId,type) => {
        let info = {};
        if(movieId) {
            switch(type) {
                case 'movie':
                    info= await basicFetch(`/movie/${movieId}?languange=pt-BR&api_key=${API_KEY}`)
                break;
                case 'tv':
                    info= await basicFetch(`/tv/${movieId}?languange=pt-BR&api_key=${API_KEY}`)
                break;
                default:
                    info=null;
                break;
            }
        }
        return info
        }
}