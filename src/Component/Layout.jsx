import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='mx-[60px] sm:mx-[72px] lg:mx-[150px]'>
        {children}
    </div>
  )
}

export default Layout