import React from 'react'
import Navbar from '../Component/Navbar'
import BackgroundImage from "../Assets/BackgroundImage1.png"
import { MdSearch } from 'react-icons/md'
import Layout from '../Component/Layout'
const Home = () => {
  return (
    <Layout>
        <Navbar/>
        <div className='font-inter'>
            <div className='py-[60px] max-sm:w-full flex items-center lg:w-full lg:h-[400px] rounded-[16px] bg-no-repeat bg-cover' style={{backgroundImage:`url(${BackgroundImage})`}}>
                <div className='h-400 sm:ml-[72px] w-full'>
                    <h1 className='max-md:text-center text-white text-[26px]  sm:text-[32px]  font-bold md:leading-[42px] mb-7 '>Seek and Find<br/> your Ideal property</h1>
                    <div className='flex flex-row items-center justify-start bg-white w-full sm:pl-6 sm:gap-3 rounded-xl sm:mb-5'>
                        <button className='text-[24px] dark'>
                            <MdSearch/>
                        </button>
                        <input className='py-4 sm:py-[18px] w-full text-[16px] outline-none bg-transparent' type="text" placeholder='Masukkan kata kunci atau Lokasi' />
                    </div>
                    <div className='text-white'>
                        <p>Popular Search: </p>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Home