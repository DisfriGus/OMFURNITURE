import React, { useState,useEffect } from 'react'
import Navbar from '../Component/Navbar'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import Profile from '../Assets/kam-idris-_HqHX3LBN18-unsplash.jpg'
import Logo from '../Assets/logo2.svg'
import Delivery from '../Assets/Local_shipping.svg'
import Box from '../Assets/box.svg'
const DetailPage = () => {



    const location = useLocation();
    const { data } = location.state;
    console.log(data);

    const [place, setPlace] = useState(null)
    const {title} = useParams()
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
                <button className='px-[56px] py-3 rounded-[27px] bg-[#031C32] text-white max-sm:text-[12px]'>Buy Now</button>
                <button className='px-[56px] py-3 rounded-[27px] max-sm:text-[12px]'>Add Cart</button>
            </div>
            <div>
                <div className=' flex gap-3  py-[14px] w-[520px]'>
                    <div className='w-[24px] h-[24px]'>
                        <img src={Delivery} alt="" />
                    </div>
                    <div>
                        <h4 className='text-[16px] font-semibold text-[#031C32]'>Free Delivery</h4>
                        <p className='font-normal underline text-[#031C32]'>Enter your postal code for delivery availability</p>
                    </div>
                </div>
                <div className='flex py-[14px] w-[520px]'>
                    <div>
                        <img src={Box} alt="" />
                    </div>
                    <div>
                        <h4 className='text-[16px] font-semibold text-[#031C32]'>Return Policy</h4>
                        <p className='font-normal text-[#031C32]'>Free 60-days delivery return. <span className='underline'>Details</span></p>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className='px-4 lg:px-[240px] '>
        <h1 className='text-[24px] font-bold text-[#031C32]'>Product Spesification</h1>
        <div className='flex flex-wrap gap-6'>
            <div className='lg:w-[680px]'>
                <div className='border bg-[#F5F5F7] py-4 px-3'>
                    <h3 className='mb-4 font-medium'>General Spesification</h3>
                    <div className='bg-white flex justify-between py-3'>
                        <h4>Material</h4>
                        <h4>Tweed, Wood</h4>
                    </div>
                    <div className='flex justify-between py-3'>
                        <h4>Overall</h4>
                        <h4>H: 33 in, W: 55 in, D:31.5 in</h4>
                    </div>
                    <div className='bg-white flex justify-between py-3'>
                        <h4>Manufacture Date</h4>
                        <h4>21 July 2023</h4>
                    </div>
                    <div className='flex justify-between py-3'>
                        <h4>Primary Finish</h4>
                        <h4>Platinum Tweed</h4>
                    </div>
                    <div className='bg-white flex justify-between py-3 max-sm:flex-col max-sm:gap-2'>
                        <h4>Fabric Content</h4>
                        <h4>56% Polyester, 22% Cotton, 18% Acryclic, 4% Polyethylene</h4>
                    </div>
                    <div className='flex justify-between py-3'>
                        <h4>Overall</h4>
                        <h4>H: 33 in, W: 55 in, D:31.5 in</h4>
                    </div>
                </div>
            </div>
            <div className='lg:w-[680px]'>
                <div className='border bg-[#F5F5F7] py-4 px-3'>
                    <h3 className='mb-4 font-medium'>Product Detail</h3>
                    <div className='bg-white flex justify-between py-3'>
                        <h4>Material</h4>
                        <h4>Tweed, Wood</h4>
                    </div>
                    <div className='flex justify-between py-3'>
                        <h4>Overall</h4>
                        <h4>H: 33 in, W: 55 in, D:31.5 in</h4>
                    </div>
                    <div className='bg-white flex justify-between py-3'>
                        <h4>Manufacture Date</h4>
                        <h4>21 July 2023</h4>
                    </div>
                    <div className='flex justify-between py-3'>
                        <h4>Primary Finish</h4>
                        <h4>Platinum Tweed</h4>
                    </div>
                    <div className='bg-white flex justify-between py-3 max-sm:flex-col max-sm:gap-2'>
                        <h4>Fabric Content</h4>
                        <h4>56% Polyester, 22% Cotton, 18% Acryclic, 4% Polyethylene</h4>
                    </div>
                    <div className='flex justify-between py-3'>
                        <h4>Overall</h4>
                        <h4>H: 33 in, W: 55 in, D:31.5 in</h4>
                    </div>
                </div>
            </div>
            <div className='w-full lg:w-[680px]'>
                <div className='border py-4 px-3'>
                    <h3 className='mb-4 font-medium'>Reviews (173)</h3>
                    
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default DetailPage