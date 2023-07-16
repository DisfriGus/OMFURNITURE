import React from 'react'
import Navbar from '../Component/Navbar'
import BackgroundImage from "../Assets/Background2.jpg"
import { MdSearch, MdArrowBack, MdArrowForward, MdChat, MdEmail } from 'react-icons/md'
import FurnitureImage1 from '../Assets/no-revisions-p0MoUugYbvk-unsplash.jpg'
import Logo1 from '../Assets/logo1.svg'
import Logo2 from '../Assets/logo2.svg'
import Data from '../Data/Products'
import Footer from '../Component/Footer'
import {MdCall} from 'react-icons/md'
import PopularSlider from '../Component/PopularSlider'
const Home = () => {
    
  return (
    <div>
        <div className='font-inter '>
            <div className='hero xl:bg-[length:100%_338.824%] xl:bg-[center_bottom_-20rem]  max-2xl:bg-cover max-2xl:bg-center  '>
                <Navbar logo={Logo1} style={`max-lg:hidden`} user={'text-white'}/>
                <Navbar logo={Logo2} style={`lg:hidden`} />
                <div className='flex justify-center pt-14  lg:h-[425px]' >
                    <div className=''>
                        <h1 className='text-center text-white text-[26px] font-satoshi  lg:text-[48px] font-bold md:leading-[56px] mb-8 '>Seek and Find<br/> your Ideal property</h1>
                        <div className='flex flex-row items-center justify-start bg-white sm:w-[512px] lg:w-[659px] lg:pl-6 lg:gap-3 rounded-xl  sm:mb-5'>
                            <button className='text-[24px] dark'>
                                <MdSearch/>
                            </button>
                            <input className='py-4 xl:py-[18px] w-full xl:text-[16px] text-[12px] outline-none bg-transparent' type="text" placeholder='Masukkan kata kunci atau Lokasi' />
                        </div>
                        <div className='text-white max-sm:text-[12px] '>
                            <p>Popular Search: </p>
                        </div>
                    </div>
                </div>
            </div>
            <div  className='mt-[52px] px-5 lg:px-[80px] 2xl:px-[240px] '>
                <div className='mb-8 lg:mb-[100px]'>
                    <PopularSlider/>
                </div>
                <div className='flex mb-[100px] max-2xl:flex-col items-center gap-3 sm:gap-9 sm:gap-y-16 '>
                    <div className=''>
                        <img className='rounded-t-xl rounded-tr-[210px] rounded-bl-[210px] rounded-br-xl h-[420px] w-[720px] max-sm:rounded-lg object-cover' src={FurnitureImage1} alt="" />
                    </div>
                    <div className='2xl:w-[684px]'>
                        <h3 className='text-[18px] mb-2 text-[#1659E6]'>Our Values</h3>
                        <h1 className='text-[36px] sm:text-[48px] max-sm:text-center font-bold font-satoshi sm:leading-[56px] sm:tracking-[-0.96px] sm:mb-8'>Comfort is our Top<br/>priority for you<span className='text-[#E67D31]'>.</span> </h1>
                        <div className='flex flex-col w-full xl:w-[720px] 2xl:w-[560px] gap-5'>
                            <p className='text-[#425379] text-[16px] font-normal leading-[28px] max-sm:text-center'>Lorem ipsum dolor sit amet consectetur. Urna nunc netus dictum tortor tincidunt imperdiet porttitor eget. Vel purus metus donec orci amet donec leo vel. Mi nullam cursus malesuada velit purus.</p>
                            <ul className='list-disc marker:text-[#1659E6] grid grid-cols-2 pl-6 text-[14px] max-sm:gap-x-[33px] md:text-[18px] font-normal tracking-[-0.09px]'>
                                <li>Premium Quality Only</li>
                                <li>No obligation valuations</li>
                                <li>Managed Properties</li>
                                <li>Known in local area</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row-reverse mb-[100px] max-2xl:flex-col items-center gap-3 sm:gap-9 sm:gap-y-16 '>
                    <div className=''>
                        <img className='rounded-t-xl rounded-tr-[210px] rounded-bl-[210px] rounded-br-xl h-[420px] w-[720px] max-sm:rounded-lg object-cover' src={FurnitureImage1} alt="" />
                    </div>
                    <div className='2xl:w-[684px]'>
                        <h3 className='text-[18px] mb-2 text-[#1659E6]'>Contact Us</h3>
                        <h1 className='text-[36px] sm:text-[48px] max-sm:text-center font-bold font-satoshi sm:leading-[56px] sm:tracking-[-0.96px] sm:mb-8'>Connect with us!</h1>
                        <div className='flex flex-col w-full xl:w-[720px] 2xl:w-[560px] gap-5'>
                            <p className='text-[#425379] text-[16px] font-normal leading-[28px] max-sm:text-center'>Lorem ipsum dolor sit amet consectetur. Urna nunc netus dictum tortor tincidunt imperdiet porttitor eget. Vel purus metus donec orci amet donec leo vel. Mi nullam cursus malesuada velit purus.</p>
                            <ul className='grid sm:grid-cols-2 pl-6 text-[18px] font-normal tracking-[-0.09px] gap-y-8  '>
                                <div className='flex items-center gap-4'>
                                    <div className='rounded-lg p-[6px] bg-[#C5D7FF] text-[24px] text-[#1659E6]'>
                                        <MdCall className=' '/>
                                    </div>
                                    <div>
                                        <h4 className='text-[24px] font-satoshi font-medium'>Call</h4>
                                        <p className='text-[16px]'>+62 889-9819-9812</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <div className='rounded-lg p-[6px] bg-[#C5D7FF] text-[24px] text-[#1659E6]'>
                                        <MdChat className=' '/>
                                    </div>
                                    <div>
                                        <h4 className='text-[24px] font-satoshi font-medium'>Chat</h4>
                                        <p className='text-[16px]'>+62 880-9800-9900</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <div className='rounded-lg p-[6px] bg-[#C5D7FF] text-[24px] text-[#1659E6]'>
                                        <MdEmail className=' '/>
                                    </div>
                                    <div>
                                        <h4 className='text-[24px] font-satoshi font-medium'>Email</h4>
                                        <p className='text-[16px]'>contact@omfurniture.com</p>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='content h-[400px] flex flex-col items-center justify-center lg:py-16 rounded-bl-lg rounded-br-[210px] rounded-tl-[210px] rounded-tr-lg max-sm:rounded-lg text-white sm:bg-[length:100%_268%] sm:bg-[center_bottom_-10rem]  max-sm:bg-cover max-sm:bg-center'>
                    <h4 className='font-satoshi text-[24px] font-normal mb-2'>Contact Us</h4>
                    <h1 className='font-satoshi text-[48px] font-bold mb-6 max-xl:text-center max-sm:text-[28px]'>Get Started With Your New Furniture.</h1>
                    <p className=' font-inter font-normal sm:w-[560px] mb-[18px] text-center'>Lorem ipsum dolor sit amet consectetur. Urna nunc netus dictum tortor tincidunt imperdiet porttitor eget. Vel purus metus donec orci amet donec leo vel. Mi nullam cursus malesuada velit purus.</p>
                    <button className='bg-[#E67D31] py-[10px] px-9 rounded-[24px]'>
                        Get Started
                    </button>
                </div>
            </div>
        </div>
        <div className='mt-[60px] sm:mt-[120px] '>
            <Footer/>
        </div>
    </div>
  )
}

export default Home