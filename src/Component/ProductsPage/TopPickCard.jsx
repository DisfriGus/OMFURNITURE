import React from 'react'

const TopPickCard = ({ data }) => {



    return (
        <div className='bg-[#F2F2F2] rounded-mdd w-[215px] h-[240px] max-sm:mx-auto text-[#031C32] text-center text-2xl font-medium flex flex-col justify-between items-center pt-8'>
            {data.title}
            <img src={data.image} alt={data.title} />
        </div>
    )
}

export default TopPickCard