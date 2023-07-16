import React, { useState, useEffect } from 'react'
import Layout from '../Component/Layout'
import Navbar from '../Component/Navbar'
import Logo from '../Assets/logo2.svg'
import CartItem from '../Component/CartPage/CartItem'
import Skeleton from '../Component/ProductsPage/Skeleton'
import {
  useNavigate,
} from 'react-router-dom';
import Footer from '../Component/Footer'


const Cart = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1)
  };
  const [cartData, setCartData] = useState([]);


  console.log(cartData);

  useEffect(() => {
    // Retrieve cart data from localStorage
    const existingCartData = localStorage.getItem('cartData');
    if (existingCartData) {
      setCartData(JSON.parse(existingCartData));
    }
  }, []);

  return (
    <>
      <Navbar logo={Logo} signup={'text-white'} />
      <Layout>
        <div onClick={handleGoBack} className='flex flex-row pt-9 gap-1 cursor-pointer'>
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
        <div className='text-[#031C32 font-inter text-3xl font-medium] py-10'>
          <h1>Cart</h1>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-6 gap-7'>
          <div className='col-span-4'>
            {cartData.map((item, index) => {
              return (
                <div key={index}>
                  <CartItem data={item} />
                </div>
              )
            })}
          </div>

          <div className='col-span-2 w-[412px] flex flex-col h-[316px] rounded-[16px] bg-white border-2 border-[#E7E7E7] py-[24px] px-[32px]'>
            <h1 className='text-[#031C32] font-satoshi font-medium text-2xl'>Shopping summary</h1>
            <div className='flex flex-col gap-3 mt-5'>
              <div className='flex flex-row justify-between'>
                <p className='font-inter text-lg'>Subtotal</p>
                <p className='font-inter text-lg text-[#031C32]'>$ 615,00</p>
              </div>
              <div className='flex flex-row justify-between'>
                <p className='font-inter text-lg'>Shipping Cost</p>
                <p className='font-inter text-lg text-[#031C32]'>$ 615,00</p>
              </div>
              <div className='border-2 w-full'></div>
              <div className='flex flex-row justify-between'>
                <p className='font-inter text-lg'>Total</p>
                <p className='font-inter text-lg text-[#031C32]'>$ 615,00</p>
              </div>
            </div>
            <button className='text-white bg-[#1659E6] text-lg font-medium font-inter max-w-[348px] max-h-[60px] py-[16px] px-[50px] rounded-[12px] mt-5'>
              Proceed to payment
            </button>
          </div>

        </div>

      </Layout>
      <div className='absolute w-full md:bottom-0'>
        <Footer />
      </div>
    </>
  )
}

export default Cart