import React from 'react'
import logo from './../../assets/images/logoCine.png'
import Home from '../../pages/Home/Home'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className='flex justify-between items-center p-4 bg-[#102A43]'>
        <img className='w-28' src={logo} alt='logo cine noticia'/>

        <nav className='me-20'>
            <ul className='flex gap-4 [&>*]:hover:text-[#4D96FF] [&>*]:text-[#D9E2EC]'>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/favoritos'>Favoritos</NavLink>
                </li>
                <li>
                    <NavLink to='/sobre'>Sobre</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header