import api from "./api";


const getAll = ()=>{
    return api.get('/discover/movie')
}

const getMoviePlaying = () =>{
    return api.get('/movie/now_playing')
}


export{
    getAll,
    getMoviePlaying
}