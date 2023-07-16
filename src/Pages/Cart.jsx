import React from 'react'
import Layout from '../Component/Layout'
import Navbar from '../Component/Navbar'
import Logo from '../Assets/logo2.svg'
import CartItem from '../Component/CartPage/CartItem'



const Cart = () => {








  return (
    <>
      <Navbar logo={Logo} signup={'text-white'} />
      <Layout>
        <div className='flex flex-row py-20 gap-1'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <mask id="mask0_197_117" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
              <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_197_117)">
              <path d="M7.85039 13L10.7004 15.85C10.9004 16.05 10.9962 16.2833 10.9879 16.55C10.9796 16.8167 10.8837 17.05 10.7004 17.25C10.5004 17.45 10.2629 17.5542 9.98789 17.5625C9.71289 17.5708 9.47539 17.475 9.27539 17.275L4.70039 12.7C4.50039 12.5 4.40039 12.2667 4.40039 12C4.40039 11.7333 4.50039 11.5 4.70039 11.3L9.27539 6.725C9.47539 6.525 9.71289 6.42916 9.98789 6.4375C10.2629 6.44583 10.5004 6.55 10.7004 6.75C10.8837 6.95 10.9796 7.18333 10.9879 7.45C10.9962 7.71666 10.9004 7.95 10.7004 8.15L7.85039 11H19.0004C19.2837 11 19.5212 11.0958 19.7129 11.2875C19.9046 11.4792 20.0004 11.7167 20.0004 12C20.0004 12.2833 19.9046 12.5208 19.7129 12.7125C19.5212 12.9042 19.2837 13 19.0004 13H7.85039Z" fill="#757575" />
            </g>
          </svg>
          <h1 className='font-normal font-inter text-[#757575]'>Back</h1>
        </div>
        <CartItem />
      </Layout>




    </>
  )
}

export default Cart