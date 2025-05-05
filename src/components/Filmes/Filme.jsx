function Filme(props) {  
  let width = props.width || 200;
  console.log(props.data);
  
  return (
    <div className="flex flex-col justify-between" key={props.data.id} >
      <img className="rounded" src={`https://image.tmdb.org/t/p/w${width}${props.data.poster_path}`} alt=''/>
      <div>
        <p className="text-white">{props.data.title}</p>
        <p>⭐<span className="font-bold text-white">{props.data.vote_average}</span></p>
      </div>
    </div>
  )
}

export default Filme