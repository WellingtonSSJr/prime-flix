import api from "./api";


const getAll = ()=>{
    return api.get('/discover/movie')
}

const getMoviePlaying = () =>{
    return api.get('/movie/now_playing')
}

const getMoviesPopular = () =>{
    return api.get('https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1')
}

export{
    getAll,
    getMoviePlaying,
    getMoviesPopular
}