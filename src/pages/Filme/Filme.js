import React from 'react'
import Filmes from '../../components/Filmes/Filmes';

function Filme(props) {
  console.log(props.data.poster_path.slice(1));
  
  return (
   <section>
      <Filmes/>
   </section>
  )
}

export default Filme