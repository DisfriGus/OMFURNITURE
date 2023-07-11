import React from 'react'
import Navbar from '../Component/Navbar'
import BackgroundImage from "../Assets/BackgroundImage1.png"
import { MdSearch } from 'react-icons/md'
const Home = () => {
  return (
    <div>
        <Navbar/>
        <div className='sm:mx-[240px] font-inter'>
            <div className='sm:w-[1440px] sm:h-[400px] sm:flex sm:items-center' style={{backgroundImage:`url(${BackgroundImage})`}}>
                <div className='h-400 sm:ml-[72px]'>
                    <h1 className='text-white sm:text-[32px] sm:font-bold leading-[42px] sm:mb-7'>Seek and Find<br/> your Ideal property</h1>
                    <div className='flex flex-row items-center justify-start bg-white w-[512px] sm:pl-6 sm:gap-3 rounded-xl sm:mb-5'>
                        <button className='text-[24px] dark'>
                            <MdSearch/>
                        </button>
                        <input className=' sm:py-[18px] w-[512px] text-[16px] outline-none bg-transparent' type="text" placeholder='Masukkan kata kunci atau Lokasi' />
                    </div>
                    <div className='text-white'>
                        <p>Popular Search: </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home