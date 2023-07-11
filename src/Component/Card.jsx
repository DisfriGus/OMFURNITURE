import React from 'react'

const Card = (props) => {
  return (
    <div style={{backgroundImage:`url(${props.image})`}} className='bg-no-repeat h-[200px] bg-cover w-[300px] border-2 rounded-[12px] pt-2 pl-3'>
        <h1 className='font-bold'>{props.title}</h1>
    </div>
  )
}

export default Card