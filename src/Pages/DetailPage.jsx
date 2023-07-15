import React, { useState,useEffect } from 'react'
import Navbar from '../Component/Navbar'
import { useNavigate, useParams } from 'react-router-dom'
import Profile from '../Assets/kam-idris-_HqHX3LBN18-unsplash.jpg'
import Logo from '../Assets/logo2.svg'
const DetailPage = () => {
    const [place, setPlace] = useState(null)
    const {id} = useParams()
    const navigate = useNavigate()
    const [count, setCount] = useState(0)

    function pengurangan (){
        if (count > 0 ){
            setCount(count - 1)
        }
        
    }
  return (
    <div>
      <Navbar logo={Logo} />
      <div className='py-11 lg:px-[240px] flex max-lg:flex-col  gap-11 items-center'>
        <div className="  lg:w-[720px]  max-sm:py-10 max-sm:px-6 ">
            <div className="flex flex-row w-full items-center gap-2 mb-4">
            <button onClick={() => navigate(-1)} className="bg-[#F7F8FB] w-[50px] h-[50px] flex items-center justify-center rounded-full">
                <h5 className="subHeading">Back</h5>
            </button>
            </div>
                <div className="flex items-center gap-3 w-full mb-10">
                <img className='w-[42px] h-[42px] rounded-full' src={Profile} alt="" />  {/*PP seller */}
                <h3> Ganjo</h3> {/*Nama Seller  */}
            </div>
            <div className='flex flex-col gap-[29px]'>
                <img className='w-[720px] h-[400px]' src={Profile} alt="" />
                <div>
                    <img className='w-[100px] h-[100px] lg:w-[224px] lg:h-[120px] object-cover object-center' src={Profile} alt="" />
                </div>
            </div>
        </div>
        <div className='max-lg:w-full max-lg:px-4' >
            <h1 className='font-satoshi text-[36px] font-bold'>Nama Barang</h1>
            <p className='mb-[50px]'>Description</p>
            <h3 className='text-[24px]'><span className='text-[#1659E6] font-bold'>$</span> Harga</h3>
            <h3 className='mb-[50px]'>teuing teu apal</h3>
            <div className='flex mb-[26px]'>
                <div className='flex bg-[#F2F2F2] w-fit gap-[9px] rounded-3xl text-[16px]'>
                    <button onClick={pengurangan} className='hover:hover:bg-slate-200 flex pl-[18px] pr-[9px] py-3 rounded-bl-3xl rounded-tl-3xl '>-</button>
                    <p className='py-3'>{count}</p>
                    <button onClick={()=>setCount(count + 1)} className='hover:bg-gray-200 pr-[18px] pl-[9px] py-3 rounded-br-3xl rounded-tr-3xl '>+</button>
                </div>
                <div>
                    <p>Only ... left Dont mess it</p>
                </div>
            </div>
            <div className='flex gap-[18px] mb-[50px]'>
                <button className='px-[56px] py-3 rounded-[27px] bg-[#031C32] text-white'>Buy Now</button>
                <button className='px-[56px] py-3 rounded-[27px] '>Add Cart</button>
            </div>
            <div>
                <div className='py-[14px] w-[520px]'>
                    <h4>Free Delivery</h4>
                    <p className='pl-[40px]'>Enter</p>
                </div>
                <div className='py-[14px] w-[520px]'>
                    <h4>Return Policy</h4>
                    <p className='pl-[40px]'>Free</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default DetailPage