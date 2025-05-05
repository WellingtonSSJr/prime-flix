import React from 'react'
import { getMoviesPopular } from '../../services/moviesApi'
import Filme from '../Filmes/Filme';

function SectionFilms(props) {
  
  return (
    <section className='w-fit justify-self-center flex flex-col p-5 gap-2 2xl:items-center'>
  {props.title && (
    <p className='text-gray-50/50 cursor-pointer underline self-start'>{props.title}</p>
  )}
  <ul className='flex gap-4 w-fit'>
    {props.data && props.data.map((item, index) => (
      <li className='cursor-pointer' key={item.id}>
        <Filme data={item} width={200} />
      </li>
    ))}
  </ul>
</section>

  )
}

export default SectionFilms