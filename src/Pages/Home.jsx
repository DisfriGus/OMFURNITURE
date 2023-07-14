import React from 'react'
import Navbar from '../Component/Navbar'
import BackgroundImage from "../Assets/Background2.jpg"
import { MdSearch, MdArrowBack, MdArrowForward } from 'react-icons/md'
import Layout from '../Component/Layout'
import FurnitureImage1 from '../Assets/no-revisions-p0MoUugYbvk-unsplash.jpg'
import Logo1 from '../Assets/logo1.svg'
import Logo2 from '../Assets/logo2.svg'
import Recomendations from '../Data/Recomendation.json'
import Recomendation from '../Component/Recomendation'
import Footer from '../Component/Footer'
const Home = () => {
  return (
    <div>
        <div className='font-inter '>
            <div className='hero  ' style={{ backgroundPosition: `0px -523.686px`, backgroundSize:`100% 268.657%`}}>
                <Navbar logo={Logo1} style={`max-lg:hidden`}/>
                <Navbar logo={Logo2} style={`lg:hidden`}/>
                <div className='flex justify-center pt-14 h-[300px] sm:h-[425px]' >
                    <div className=' '>
                        <h1 className='text-center text-white text-[26px] font-satoshi  sm:text-[48px] font-bold md:leading-[42px] mb-8 '>Seek and Find<br/> your Ideal property</h1>
                        <div className='flex flex-row items-center justify-start bg-white md:w-[512px] sm:pl-6 sm:gap-3 rounded-xl sm:mb-5'>
                            <button className='text-[24px] dark'>
                                <MdSearch/>
                            </button>
                            <input className='py-4 sm:py-[18px] w-full text-[16px] max-sm:text-[12px] outline-none bg-transparent' type="text" placeholder='Masukkan kata kunci atau Lokasi' />
                        </div>
                        <div className='text-white max-sm:text-[12px]'>
                            <p>Popular Search: </p>
                        </div>
                    </div>
                </div>
            </div>
            <div  className='mt-[52px] px-5 lg:px-[80px] 2xl:px-[240px] '>
                <div className='mb-[42px] flex items-center justify-between '>
                    <div>
                        <h3 className='text-[18px] text-[#1659E6]'>Popular Choice</h3>
                        <h1 className='text-[30px] font-medium'>Best Property Just For You</h1>
                    </div>
                    <div className='flex items-center gap-4 max-md:hidden'>
                        <button className='text-[26px]'>
                            <MdArrowBack/>
                        </button>
                        <button className='text-[26px]'>
                            <MdArrowForward/>
                        </button>
                    </div>
                </div>
                <div className='whitespace-nowrap overflow-x-auto flex gap-[32px] h-[350px] mb-[100px]'>
                    {Recomendations.recomendation.map((val)=>(
                        <Recomendation 
                            key={val.id}
                            src={val.image.url}
                            price={val.price}
                            title={val.title}
                            place={val.place}
                            luas={val.luas}
                            bed={val.bed}
                            bath={val.bath}
                        />
                    ))}
                </div>
                <div className='flex mb-[100px] max-2xl:flex-col items-center gap-3 sm:gap-9 sm:gap-y-16 '>
                    <div className=''>
                        <img className='rounded-t-xl rounded-tr-[210px] rounded-bl-[210px] rounded-br-xl h-[420px] w-[720px] max-sm:rounded-lg object-cover' src={FurnitureImage1} alt="" />
                    </div>
                    <div className='2xl:w-[684px]'>
                        <h3 className='text-[18px] mb-2'>Our Values</h3>
                        <h1 className='text-[36px] sm:text-[48px] max-sm:text-center font-bold font-satoshi sm:leading-[56px] sm:tracking-[-0.96px] sm:mb-8'>Comfort is our Top<br/>priority for you<span className='text-[#E67D31]'>.</span> </h1>
                        <div className='flex flex-col w-full xl:w-[720px] 2xl:w-[560px] gap-5'>
                            <p className='text-[#425379] text-[16px] font-normal leading-[28px] max-sm:text-center'>Lorem ipsum dolor sit amet consectetur. Urna nunc netus dictum tortor tincidunt imperdiet porttitor eget. Vel purus metus donec orci amet donec leo vel. Mi nullam cursus malesuada velit purus.</p>
                            <ul className='list-disc marker:text-[#1659E6] grid sm:grid-cols-2 pl-6 text-[18px] font-normal tracking-[-0.09px]'>
                                <li>Premium Quality Only</li>
                                <li>No obligation valuations</li>
                                <li>Managed Properties</li>
                                <li>Known in local area</li>
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