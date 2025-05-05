import React from 'react'
import { getAll, getMoviePlaying, getMoviesPopular } from '../../services/moviesApi'
import Filmes from '../../components/Filmes/Filmes'
import api from '../../services/api'
import Section from '../../components/Section/SectionFilms'
import SectionFilms from '../../components/Section/SectionFilms'

function Home() {
  
  const [filmes, setFilmes] = React.useState([])
  const [capa, setCapa] = React.useState([])
  const [favorite, setFavorite] = React.useState(false)
  const [popular, setPopular] = React.useState([])
  const [plus, setPlus] = React.useState(false)
  
  const path = 'https://image.tmdb.org/t/p/w300'
 

  React.useEffect( () => {

    async function fetchData(){
      const res = await getMoviesPopular()
      const json = res.data

      setPopular(json.results.slice(0, 6));
    }

    fetchData()

  },[])

  React.useEffect(()=>{

    async function getPopulares(){
        const populares = api.get('https://api.themoviedb.org/3/person/popular?language=pt-Br&page=1',{
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZGUxYTkyNmUzYTE3ZDdiZjIyMWQ2Y2IxNDg0YTdiYiIsIm5iZiI6MTc0NTk1NTAxMS43NDIsInN1YiI6IjY4MTEyOGMzZGRlNmUxODBmNjgxMzViZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m9mhfPrcjP3FI7GIAvpyFyojDIRFy-GTUUwb3R6H28E'
          }
        })

        const res = await populares
        setCapa(res.data.results[0].known_for[0]);
        

    }

    getPopulares()

  }, [])
  
  React.useEffect(() => {
    async function getAllMovies(){
      const res = await getMoviePlaying()
      setFilmes(res.data.results);
    }
    getAllMovies()

  },[])

  const toggleFavorite = () => setFavorite(!favorite)
  const togglePlus = () => setPlus(!plus)

  return (
    <main>
      <section className="p-5">

          <div className="flex items-center  justify-around sm-gap-80 p-5 h-fit [&>*]:text-white">
            <div className='w-fit p-2 flex flex-col h-full gap-10'>
              <div className='flex flex-col gap-4'>
                <h1 className="text-6xl">{capa.title ? capa.title : capa.name}</h1>
                <p className='w-[500px]'>{capa.overview}</p>
              </div>

              <div className='flex gap-50'>
                <h2 className='flex flex-col items-start'><span className='text-6xl font-bold'>{capa.vote_average}</span> <span>MÉDIA DE VOTOS</span></h2>
                <h2 className='flex flex-col items-start'><span className='text-6xl font-bold'>{capa.vote_count}</span> <span>VOTOS</span></h2>
              </div>

              <div className='flex gap-14 justify-start items-center'>
                  <button 
                      onClick={toggleFavorite} 
                      className="flex items-center justify-center p-2 bg-red-500 hover:bg-red-600 rounded-full w-12 h-12 transition-all"
                    >
                      <HeartIcon fill={favorite ? "#ffffff" : "none"} />
                  </button>

                  <button 
                      onClick={togglePlus} 
                      className="flex items-center justify-center p-2 bg-none border border-white hover:bg-white/5 hover:stroke-white text-black rounded-full w-12 h-12 transition-all"
                    >
                      <PlusIcon fill={favorite ? "#333" : "none"} />
                  </button>
              </div>
            </div>
            <img
              src={`${path}${capa.poster_path}`}
              alt="Imagem de fundo"
              className=' right-0 rounded'
            />
          </div>

      </section>

      <SectionFilms title={'ver mais'} data={popular}/>
    </main>

  )
}

function HeartIcon({ fill = "none" }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg" stroke="white" strokeWidth="2">
      <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="white" strokeWidth="2">
      <path d="M12 4V20M4 12H20" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default Home