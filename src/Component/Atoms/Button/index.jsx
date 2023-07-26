import React from 'react'

const Button = ({onClick, title,loading}) => {
    if(loading === true){
        return<button onClick={onClick}>Loading</button>
        
    }
  return (
    <button onClick={onClick}>{title}</button>
  )
}

export default Button