import React from 'react'

function Filme(props) {
  console.log(props.data.poster_path.slice(1));
  
  return (
    <div key={props.data.id} >
      <img src={`https://image.tmdb.org/t/p/w200/${props.data.poster_path.slice(1)}`}/>
    </div>
  )
}

export default Filme