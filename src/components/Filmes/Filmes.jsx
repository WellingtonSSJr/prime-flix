import React from 'react'
import Filme from '../../pages/Filme/Filme';

function Filmes(props) {
  
  return (
    <div>
      {
        props.datasFilmes.map((filme)=>{
          return (
            <Filme data={filme}/>
          )
        })
      }
    </div>
  )
}

export default Filmes