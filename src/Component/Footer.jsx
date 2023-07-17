import React from 'react'
import Logo1 from '../Assets/logo1.svg'
import { NavLink } from 'react-router-dom'
import { MdOutlineExpandMore } from 'react-icons/md'
const Footer = () => {
  return (
    <div className='flex items-center gap-[386px] bg-[#03121F] py-[18px] max-lg:pb-[34px] lg:px-[240px] lg:py-10 max-lg:justify-center'>
        <div>
            <img src={Logo1} alt="" />
        </div>
        <div className='flex pl-7 gap-[20px] text-[16px] text-white font-normal max-lg:hidden'>
          <NavLink to='/Products' className={`flex items-center`}>Category<MdOutlineExpandMore className='text-[24px]'/></NavLink>
          <NavLink to="/Products">Rent</NavLink>
          <NavLink to="/Products">Sell</NavLink>
          <NavLink to="/Products">Find Broker</NavLink>
        </div>
    </div>
  )
}

export default Footer