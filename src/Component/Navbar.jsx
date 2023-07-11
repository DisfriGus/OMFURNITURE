import React from 'react'
import Logo from '../Assets/logo.png'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
      <div className='font-inter flex items-center justify-between py-[26px]  xl:mx-[240px] lg:mx-[120px] max-lg:px-[80px] max-sm:px-[12px] max-sm:py-[12px] max-lg:fixed max-lg:bg-white max-lg:w-full'>
        <NavLink to="/" className='flex items-center sm:gap-4   '>
          <img className='w-9 h-9' src={Logo} alt="" />
          <h1 className='text-[20px] font-semibold'>Om Property</h1>
        </NavLink>
        <div className='flex gap-[18px] text-[16px] dark font-normal max-lg:hidden'>
          <NavLink to='/Dijual'>Dijual</NavLink>
          <NavLink to="/Disewa">Disewa</NavLink>
          <NavLink to="/PropertyBaru">Property Baru</NavLink>
          <NavLink to="/Panduan">Panduan</NavLink>
        </div>
        <div className='flex gap-6 font-normal max-lg:hidden'>
          <NavLink>Sign Up</NavLink>
          <NavLink>Login</NavLink>
        </div>
      </div>
  )
}

export default Navbar