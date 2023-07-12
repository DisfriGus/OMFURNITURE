import React from 'react'
import { NavLink } from 'react-router-dom'
const Recomendation = ({src, price, title, luas,bed, bath}) => {
  return (
    <div className='w-[300px] h-[400px]'>
        <NavLink className="font-inter">
            <img src={src} className='w-[336px] h-[120px] rounded-xl mb-6 object-cover object-center'/>
            <h2 className='text-[#493EC7] mb-3 text-[22px] font-medium'>$ {price}</h2>
            <h4 className='mb-4 font-medium text-[20px]'>{title}</h4>
            <div className='flex gap-3'>
                <h4>luas: {luas} ft2</h4>
                <h4>bed: {bed}</h4>
                <h4>bath: {bath}</h4>
            </div>
        </NavLink>
    </div>
  )
}

export default Recomendation