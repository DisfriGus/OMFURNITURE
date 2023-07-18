import React from 'react'

const Subnavbar = () => {
  return (
    <div className='flex justify-between bg-[#031C32] text-white px-[240px] py-[18px]  max-2xl:hidden'>
        <ul className='flex gap-4' >
            <li>Track Shipment</li>
            <li>Store Information</li>
            <li>Inspiration</li>
            <li>60-Day Return Policy</li>
        </ul>
        <div>
            EN  |  ID
        </div>
    </div>
  )
}

export default Subnavbar