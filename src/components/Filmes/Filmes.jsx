import React from 'react'
import Filme from './Filme'

function Filmes(props) {
  
  return (
    <div>
      {
        props.datasFilmes.map((filme)=>{
          return (
            <Filme key={filme.id} data={filme}/>
          )
        })
      }
    </div>
  )
}

export default Filmes