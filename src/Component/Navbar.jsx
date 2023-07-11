import React from 'react'
import Logo from '../Assets/logo.png'
import { NavLink } from 'react-router-dom'
import Layout from './Layout'
const Navbar = () => {
  return (
      <div className='font-inter flex items-center justify-between py-[48px]'>
        <NavLink to="/" className='flex items-center gap-4   '>
          <img className='w-9 h-9' src={Logo} alt="" />
          <h1 className='text-[20px] font-semibold'>Om Property</h1>
        </NavLink>
        <div className='flex gap-[18px] text-[16px] dark font-normal '>
          <NavLink to='/Dijual'>Dijual</NavLink>
          <NavLink to="/Disewa">Disewa</NavLink>
          <NavLink to="/PropertyBaru">Property Baru</NavLink>
          <NavLink to="/Panduan">Panduan</NavLink>
        </div>
        <div className='flex gap-6 font-normal'>
          <NavLink>Sign Up</NavLink>
          <NavLink>Login</NavLink>
        </div>
      </div>
  )
}

export default Navbar