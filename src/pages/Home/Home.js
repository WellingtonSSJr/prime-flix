import React from 'react'
import { getAll, getMoviePlaying } from '../../services/moviesApi'
import Filmes from '../../components/Filmes/Filmes'

function Home() {
  const [filmes, setFilmes] = React.useState([])

  
  React.useEffect(() => {
    async function getAllMovies(){
      const res = await getMoviePlaying()
      setFilmes(res.data.results);
    }
    getAllMovies()

  },[])

  return (
    <section>
      <Filmes datasFilmes={filmes} />
    </section>
  )
}

export default Home