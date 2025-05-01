function Filme(props) {  
  return (
    <div key={props.data.id} >
      <img src={`https://image.tmdb.org/t/p/w200${props.data.poster_path}`} alt=''/>
    </div>
  )
}

export default Filme