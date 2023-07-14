import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = ({logo, style}) => {
  const [open, setOpen] = useState(false)
  return (
      
      <div className={`font-inter flex items-center justify-between px-2 md:px-[80px] xl:px-[240px]  py-3 xl:py-[26px] max-lg:fixed max-lg:w-full   bg-white xl:bg-transparent ${style}`} >
        <NavLink to="/" className=''>
          <img className='w-[157px] h-[29px] ' src={logo} alt="" />
        </NavLink>
        <div className='flex pl-7 gap-[20px] text-[16px] text-white font-normal max-xl:flex-col '>
          <NavLink to='/Dijual'>Buy</NavLink>
          <NavLink to="/Disewa">Rent</NavLink>
          <NavLink to="/PropertyBaru">Sell</NavLink>
          <NavLink to="/DetailPage">Find Broker</NavLink>
        </div>
        <div className={`md:hidden text-[18px] font-medium flex flex-col gap-10 pt-4 absolute top-12 duration-200 bg-white w-full h-[800px] z-20 items-center  ${open ? 'translate-x-[1000px]':'translate-x-0'}`}>
            <NavLink to='/Article '>Article</NavLink>
            <NavLink to='/Destination'>Destination</NavLink>
            <NavLink to='/YourOrders'>Your Orders</NavLink>
        </div>
        <div className='xl:hidden'>
          <button onClick={()=>{
            setOpen(!open)
          }}>burger</button>
        </div>
      </div>
  )
}

export default Navbar