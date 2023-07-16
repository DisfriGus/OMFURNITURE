import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='layout-div mx-[30px] md:mx-[60px] lg:mx-[240px]'>
        {children}
    </div>
  )
}

export default Layout