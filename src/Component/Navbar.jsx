import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {MdMenu, MdClose} from 'react-icons/md'
const Navbar = ({logo, style}) => {
  const [open, setOpen] = useState(true)
  return (
      
      <div className={`font-inter flex items-center justify-between px-5 lg:px-[80px] 2xl:px-[240px]  py-3 xl:py-[26px] max-lg:fixed max-lg:w-full   bg-white lg:bg-transparent ${style}`} >
        <NavLink to="/" className=''>
          <img className='w-[157px] h-[29px] ' src={logo} alt="" />
        </NavLink>
        <div className='flex pl-7 gap-[20px] text-[16px] text-white font-normal max-lg:flex-col max-lg:hidden '>
          <NavLink to='/Dijual'>Buy</NavLink>
          <NavLink to="/Disewa">Rent</NavLink>
          <NavLink to="/PropertyBaru">Sell</NavLink>
          <NavLink to="/DetailPage">Find Broker</NavLink>
        </div>
        <div className={`lg:hidden text-black text-[18px] font-medium flex flex-col gap-10  absolute top-[52px] duration-200 bg-white w-full h-[2000px] z-20 items-center  ${open ? 'translate-x-full lg:translate-x-full ':'translate-x-[-8px] md:translate-x-[-80px]'}`}>
          <NavLink to='/Dijual'>Buy</NavLink>
          <NavLink to="/Disewa">Rent</NavLink>
          <NavLink to="/PropertyBaru">Sell</NavLink>
          <NavLink to="/DetailPage">Find Broker</NavLink>
        </div>
        <div className='flex gap-3 font-normal max-lg:hidden text-white items-center'>
          <NavLink className={`py-2 px-6  `}>Login</NavLink>
          <NavLink className={`py-2 px-6 bg-[#1659E6] rounded-md `}>Sign Up</NavLink>
        </div>
        <div className='lg:hidden text-[30px]'>
          <button onClick={()=>{
            setOpen(!open)
          }}>{open? <MdMenu/> : <MdClose/>}</button>
        </div>
      </div>
  )
}

export default Navbar