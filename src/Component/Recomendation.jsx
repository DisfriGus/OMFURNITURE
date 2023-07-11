import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdLocationOn } from 'react-icons/md'
const Recomendation = ({src, place, price, title, lb, lt,bed, bath}) => {
  return (
    <div className='w-[300px] h-[400px]'>
        <NavLink className="font-inter">
            <img src={src} className='w-[300px] h-[240px] rounded-xl mb-6'/>
            <h3 className='flex items-center text-[#747371] mb-4 text-[16px] font-medium'><MdLocationOn fontSize={24}/>{place}</h3>
            <h2 className='text-[#493EC7] mb-3 text-[22px] font-medium'>IDR {price}</h2>
            <h4 className='mb-4 font-medium text-[20px]'>{title}</h4>
            <div className='flex gap-3'>
                <h4>LT: {lb} m<sup>2</sup></h4>
                <h4>LB: {lt} m<sup>2</sup></h4>
            </div>
            <div className='flex gap-3'>
                <h4>bed: {bed}</h4>
                <h4>bath: {bath}</h4>
            </div>
        </NavLink>
    </div>
  )
}

export default Recomendation