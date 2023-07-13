import React from 'react'
import Logo from '../Assets/logo.png'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
      <div className='font-inter flex items-center justify-between px-2 md:px-[80px] xl:px-[240px]  py-3 xl:py-[26px] max-lg:fixed max-lg:w-full  bg-white xl:bg-transparent'>
        <NavLink to="/" className='flex items-center gap-4   '>
          <img className='w-9 h-9' src={Logo} alt="" />
          <h1 className='text-[20px] font-semibold text-white max-xl:text-black'>Om Property</h1>
        </NavLink>
        <div className='flex pl-7 gap-[20px] text-[16px] text-white font-normal max-lg:hidden'>
          <NavLink to='/Dijual'>Buy</NavLink>
          <NavLink to="/Disewa">Rent</NavLink>
          <NavLink to="/PropertyBaru">Sell</NavLink>
          <NavLink to="/Panduan">Find Broker</NavLink>
        </div>
        <div className='flex gap-3 font-normal max-xl:hidden text-white items-center'>
          <NavLink className={`py-2 px-6  `}>Login</NavLink>
          <NavLink className={`py-2 px-6 bg-[#1659E6] rounded-md `}>Sign Up</NavLink>
        </div>
      </div>
  )
}

export default Navbar