import React from 'react'
import Logo1 from '../Assets/logo1.svg'
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='flex items-center gap-[386px] bg-[#03121F] py-[18px] max-lg:pb-[34px] lg:px-[240px] lg:py-10'>
        <div>
            <img src={Logo1} alt="" />
        </div>
        <div className='flex pl-7 gap-[20px] text-[16px] text-white font-normal max-lg:hidden'>
          <NavLink to='/Dijual'>Buy</NavLink>
          <NavLink to="/Disewa">Rent</NavLink>
          <NavLink to="/PropertyBaru">Sell</NavLink>
          <NavLink to="/Panduan">Find Broker</NavLink>
        </div>
    </div>
  )
}

export default Footer