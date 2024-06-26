import React, { useState, useEffect } from 'react'
import Navbar from '../Component/Navbar'
import { MdSearch, MdChat, MdEmail, MdCenterFocusWeak } from 'react-icons/md'
import FurnitureImage1 from '../Assets/no-revisions-p0MoUugYbvk-unsplash-min.jpg'
import FurnitureImage2 from '../Assets/kam-idris-_HqHX3LBN18-unsplash.jpg'
import Logo1 from '../Assets/logo1.svg'
import Logo2 from '../Assets/logo2.svg'
import ShopingCart1 from '../Assets/shoppingCart1.svg'
import Footer from '../Component/Footer'
import { MdCall } from 'react-icons/md'
import PopularSlider from '../Component/PopularSlider'
import LoginDialog from '../Component/Auth/LoginDialog'
import { auth } from '../Component/Config/Firebase'
import { onAuthStateChanged } from 'firebase/auth'


const Home = () => {

    const [showDialog, setShowDialog] = useState(false)
    const [showPopup, setShowPopup] = useState(false);
    const [nameUser, setNameUser] = useState(null)

    useEffect(() => {
        // Mendengarkan perubahan status otentikasi
        const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
            if (userAuth) {
                // Pengguna berhasil login
                setNameUser(userAuth); // Mengatur informasi pengguna ke dalam state user
                const handleShowPopup = () => {
                    setShowPopup(true);
                    setTimeout(() => {
                        setShowPopup(false);
                    }, 3000); // Popup akan hilang setelah 3 detik (3000ms)
                };
                handleShowPopup()
            } else {
                // Pengguna tidak login atau berhasil logout
                setNameUser(null); // Reset state user menjadi null
            }
        });

        // Membersihkan efek sebelumnya
        return () => unsubscribe();
    }, []);
    const handleShowDialog = () => {
        setShowDialog(!showDialog)
    }
    




    return (
        <div>
            {showDialog && (<LoginDialog handleShowDialog={handleShowDialog} />)}
            
            <div className='font-inter '>
                <div className='hero xl:bg-[length:100%_338.824%] xl:bg-[center_bottom_-20rem]  max-2xl:bg-cover max-2xl:bg-center  '>
                    <Navbar logo={Logo1} style={`max-lg:hidden`} inputStyle={'hidden'} user={'text-white'} cart={ShopingCart1} />
                    <Navbar logo={Logo2} style={`lg:hidden`} />
                    <div className='flex justify-center pt-20 h-[280px] sm:h-[350px] lg:h-[425px] relative' >
                        <div className=''>
                            <div className='p-[21px] rounded-full bg-[#6B9AF4] absolute right-[775px] top-[75px]  max-2xl:hidden'> </div>
                            <div className='p-[12px] rounded-full bg-[#1659E6] absolute left-[725px] top-[145px]  max-2xl:hidden'></div>
                            <h1 className='text-center text-white text-[26px] font-satoshi  lg:text-[48px] font-bold xl:leading-[56px] mb-8 relative z-10 '>Seek and Find<br /> your Ideal property<span className='text-[#E67D31]'>.</span></h1>
                            <div className='flex flex-row items-center justify-start bg-white w-[345px]  lg:w-[659px] gap-3 px-3 lg:px-6 lg:gap-3 rounded-xl  sm:mb-5'>
                                <button className='text-[24px] dark'>
                                    <MdSearch />
                                </button>
                                <input className='py-4 xl:py-[18px] w-full xl:text-[16px] text-[12px] outline-none bg-transparent' type="text" placeholder='Search product...' />
                                <button>
                                    <MdCenterFocusWeak className='text-[28px] dark' />
                                </button>
                            </div>
                            <div className='text-white max-sm:text-[12px] '>
                                <p className='text-center text-[14px] max-md:hidden'>Trending searches: <u>Wardrobe</u>, <u>bed</u>, <u>Coffee Shop Table</u></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-[52px] px-5 lg:px-[80px] 2xl:px-[240px] '>
                    <div className='mb-8 lg:mb-[100px]'>
                        <PopularSlider handleShowDialog={handleShowDialog} />
                    </div>
                    <div className='flex mb-[100px] max-2xl:flex-col items-center gap-3 sm:gap-9 sm:gap-y-16 '>
                        <div className=''>
                            <img className='rounded-tr-[48px] rounded-tl-[6px] rounded-bl-[48px] rounded-br-[6px] sm:rounded-tl-xl sm:rounded-tr-[210px] sm:rounded-bl-[210px] sm:rounded-br-xl h-[140px] w-[345px] sm:h-[420px] sm:w-[720px] object-cover object-[0px_-44.179px]  ' src={FurnitureImage1} alt="" />
                        </div>
                        <div className='2xl:w-[684px]'>
                            <h3 className='text-[18px] mb-2 text-[#1659E6]'>Our Values</h3>
                            <h1 className='text-[24px] sm:text-[48px]  font-bold font-satoshi sm:leading-[56px] sm:tracking-[-0.96px] sm:mb-8'>We only served our customers with high quality products<span className='text-[#E67D31]'>.</span> </h1>
                            <div className='flex flex-col w-full xl:w-[720px] 2xl:w-[560px] gap-5'>
                                <p className='text-[#425379] text-[16px] font-normal leading-[28px]'>Lorem ipsum dolor sit amet consectetur. Urna nunc netus dictum tortor tincidunt imperdiet porttitor eget. Vel purus metus donec orci amet donec leo vel. Mi nullam cursus malesuada velit purus.</p>
                                <ul className='list-disc marker:text-[#1659E6] grid grid-cols-2 pl-6 text-[14px] max-sm:gap-x-[33px] max-sm:gap-y-3 md:text-[18px] font-normal tracking-[-0.09px]'>
                                    <li>Premium Quality Only</li>
                                    <li>60-day Guarantees</li>
                                    <li>Managed Properties</li>
                                    <li>Known in local area</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row-reverse mb-[100px] max-2xl:flex-col items-center gap-3 sm:gap-9 sm:gap-y-16 '>
                        <div className=''>
                            <img className='rounded-tl-[48px] rounded-tr-[6px] rounded-br-[48px] rounded-bl-[6px] sm:rounded-tr-xl sm:rounded-tl-[210px] sm:rounded-br-[210px] sm:rounded-bl-xl h-[140px] w-[345px] sm:h-[420px] sm:w-[720px] object-cover object-[0px_-125.823px]' src={FurnitureImage2} alt="" />
                        </div>
                        <div className='2xl:w-[684px]'>
                            <h3 className='text-[18px] mb-2 text-[#1659E6]'>Contact Us</h3>
                            <h1 className='text-[24px] sm:text-[48px]  font-bold font-satoshi sm:leading-[56px] sm:tracking-[-0.96px] sm:mb-8'>Connect with us!</h1>
                            <div className='flex flex-col w-full xl:w-[720px] 2xl:w-[560px] gap-5'>
                                <p className='text-[#425379] text-[16px] font-normal leading-[28px] '>Lorem ipsum dolor sit amet consectetur. Urna nunc netus dictum tortor tincidunt imperdiet porttitor eget. Vel purus metus donec orci amet donec leo vel. Mi nullam cursus malesuada velit purus.</p>
                                <ul className='grid grid-cols-1 sm:grid-cols-2 md:pl-6 text-[18px] font-normal tracking-[-0.09px] gap-y-8  '>
                                    <div className='flex items-center gap-4'>
                                        <div className='rounded-lg p-[6px] bg-[#C5D7FF] text-[24px] text-[#1659E6]'>
                                            <MdCall className=' ' />
                                        </div>
                                        <div>
                                            <h4 className='text-[24px] font-satoshi font-medium'>Call</h4>
                                            <p className='text-[16px]'>+62 889-9819-9812</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <div className='rounded-lg p-[6px] bg-[#C5D7FF] text-[24px] text-[#1659E6]'>
                                            <MdChat className=' ' />
                                        </div>
                                        <div>
                                            <h4 className='text-[24px] font-satoshi font-medium'>Chat</h4>
                                            <p className='text-[16px]'>+62 880-9800-9900</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <div className='rounded-lg p-[6px] bg-[#C5D7FF] text-[24px] text-[#1659E6]'>
                                            <MdEmail className=' ' />
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
                    <div>
                        <div className='md:hidden max-md:mx-auto content max-md:w-[345px] max-md:h-[140px]  max-sm:bg-no-repeat max-sm:bg-[length:100%_268%] max-md:bg-[center_bottom_-5rem] rounded-tr-[48px] rounded-tl-[6px] rounded-bl-[48px] rounded-br-[6px]'>

                        </div>
                    </div>
                    <div className='content max-md:bg-none max-md:text- h-[400px] flex flex-col items-center justify-center lg:py-16 rounded-bl-lg rounded-br-[210px] rounded-tl-[210px] rounded-tr-lg max-md:rounded-lg text-white sm:bg-[length:100%_268%] sm:bg-[center_bottom_-10rem]  max-sm:bg-cover max-sm:bg-center'>
                        <h4 className='font-satoshi text-[24px] font-medium mb-2 max-md:text-[#031C32]'>Let’s get started</h4>
                        <h1 className='font-satoshi text-[48px] font-bold mb-6 max-xl:text-center max-md:tracking-tight max-md:text-[28px] max-md:text-[#031C32]'>Get Started With Your New Furniture.</h1>
                        <p className=' font-inter font-normal sm:w-[560px] mb-[18px] text-center max-md:text-[#425379] max-md:tracking-[-0.08px]'>Lorem ipsum dolor sit amet consectetur. Urna nunc netus dictum tortor tincidunt imperdiet porttitor eget. Vel purus metus donec orci amet donec leo vel. Mi nullam cursus malesuada velit purus.</p>
                        <button className='bg-[#E67D31] py-[10px] px-9 rounded-[24px]'>
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
            <div className='mt-[60px] sm:mt-[120px] '>
                <Footer />
            </div>
            
            {nameUser && showPopup && (
                <div className="fixed top-4 right-1 bg-white p-4 rounded-lg shadow-lg text-black">
                    Welcome {nameUser.displayName}
                </div>
            )}

        </div>
    )
}

export default Home