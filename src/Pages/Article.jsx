import React from 'react'
import Subnavbar from '../Component/Subnavbar'
import Navbar from '../Component/Navbar'
import Logo from '../Assets/logo2.svg'
import ShoppingCart from '../Assets/shoppingCart.svg'
import { useNavigate, useLocation, useParams } from 'react-router-dom'
import { MdArrowBack, MdOutlineExpandLess, MdOutlineExpandMore } from 'react-icons/md'
import Layout from '../Component/Layout'
import Profile from '../Assets/kam-idris-_HqHX3LBN18-unsplash.jpg'
import Footer from '../Component/Footer'
import artikel1 from '../Assets/artikel1.png'
import artikel2 from '../Assets/artikel2.png'
import artikel3 from '../Assets/artikel3.png'
import artikel4 from '../Assets/artikel4.png'

const Article = () => {

    const navigate = useNavigate()



    return (
        <>
            <Subnavbar />
            <Navbar logo={Logo} signup={'text-white'} cart={ShoppingCart} />
            <Layout>
                <div className='grid grid-cols-1 md:grid-cols-6 gap-[72px]'>
                    <div className='flex flex-col md:col-span-4'>
                        <div className="flex flex-row w-full items-center gap-2 mb-[36px]">
                            <button onClick={() => navigate(-1)} className="max-lg:hidden">
                                <h5 className="flex items-center text-[#757575] gap-[6px] "><MdArrowBack /> Back</h5>
                            </button>

                        </div>

                        <div>
                            <h1 className='font-inter text-[18px] font-normal text-[#757575] mb-[12px]'>Posted 27 July 2023, 04:00 AM</h1>
                            <h1 className='text-[#031C32] font-satoshi text-[48px] font-bold mb-[18px]'>Transforming Your Kitchen Set</h1>
                        </div>

                        <div className="flex items-center gap-3 w-full mb-6">
                            <img className='w-[42px] h-[42px] rounded-full' src={Profile} alt="" />  {/*PP seller */}
                            <h3 className='text-[18px] text-[#031C32] font-bold font-satoshi'>Travis Sekut</h3> {/*Nama Seller  */}
                        </div>

                        <div className='w-full rounded-[8px] mb-[36px]'>
                            <img className='w-full' src={artikel1} alt="" />
                        </div>
                        <div className='flex flex-col gap-[16px] text-justify mb-[36px]'>
                            <h1 className='font-satoshi text-[#031C32] text-[36px] font-bold'>The Contemporary Chic Collection</h1>
                            <p className='font-inter text-[18px] font-normal text-[#425379]'>Are you looking to transform your living space into a haven of style and comfort? Look no further than our handpicked inspiration sets for furniture collections. Whether you're moving into a new home or giving your existing space a much-needed refresh, these furniture sets are designed to elevate your living experience to new heights. Discover a perfect blend of aesthetics, functionality, and quality craftsmanship that will leave you feeling truly inspired.</p>
                        </div>

                        <div className='flex flex-col xl:flex-row gap-[24px] mb-[36px]'>
                            <img src={artikel2} alt="" />
                            <img src={artikel3} alt="" />
                        </div>
                        <div className='flex flex-col gap-[16px] md:text-justify '>
                            <h1 className='font-satoshi text-[#031C32] text-[36px] font-bold'>Rustic Elegance: Embrace Nature's Charm</h1>
                            <p className='font-inter text-[18px] font-normal text-[#425379]'>For those who cherish the charm of the countryside, the Rustic Elegance collection embraces the beauty of natural materials. Crafted from reclaimed wood, each piece in this set exudes warmth and character, providing a cozy and inviting atmosphere. Experience the rustic allure with farmhouse-inspired dining tables, earthy-hued sofas, and handcrafted accents that celebrate the beauty of imperfection.</p>
                        </div>




                    </div>
                    <div className='md:col-span-2 w-full md:py-[120px]'>
                        <div className='flex flex-col'>
                            <div className='flex flex-col'>
                                <h1 className='font-satoshi text-[20px] font-bold text-[#031C32] mb-[14px]'>Sign up to newsletter</h1>
                                <h1 className='text-[#425379] font-inter font-normal text-[18px] mb-[32px]'>Get the latest articles on all things data delivered straight to your inbox.</h1>
                            </div>
                            <div className='w-full flex flex-col gap-[12px] mb-[32px]'>
                                <div className='bg-white px-[24px] py-[16px] rounded-[8px] border-[1px] border-[#F2F2F2]'>
                                    <input type="text" placeholder='Your email work...' className='outline-none bg-transparent w-full' />
                                </div>
                            </div>
                            <div className='w-fit mb-[32px] text-[#1659E6] text-[18px] font-medium font-inter px-[36px] py-[12px] text-center rounded-[6px] border-[1px] border-[#1659E6]' >
                                Subscribe
                            </div>
                            <div className='w-[520px] h-[2px] bg-[#F8F8F8] rounded-[7px] text-center mb-[32px] max-sm:hidden'></div>
                            <div className='flex flex-row justify-between items-center mb-[32px]'>
                                <h1 className='font-inter text-[18px] font-medium text-[#757575]'>Share</h1>
                                <div className='flex flex-row gap-[18px]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M14.0581 3.40989C12.2511 4.17689 11.0631 5.86289 11.0021 7.78989L11.0001 7.97189L10.7571 7.94889C8.36508 7.67989 6.25908 6.43689 4.81308 4.41789C4.71517 4.28105 4.58431 4.17114 4.43262 4.09832C4.28094 4.0255 4.11333 3.99213 3.94532 4.00131C3.77732 4.01048 3.61434 4.0619 3.47148 4.1508C3.32863 4.2397 3.21051 4.36321 3.12808 4.50989L3.03108 4.69589L2.98208 4.79489C2.26308 6.27989 1.79208 8.08489 1.96508 9.99789L1.99508 10.2709C2.27808 12.5339 3.49508 14.4859 5.77408 15.9499L5.94708 16.0569L5.86608 16.0999C4.55108 16.7629 3.34808 17.0519 2.03908 16.9999C0.98308 16.9599 0.59308 18.3719 1.52108 18.8779C5.11908 20.8389 8.98208 21.4439 12.3131 20.4779C16.3731 19.2979 19.4651 16.2549 20.6481 12.0449L20.7751 11.5499C21.0131 10.5569 21.1471 9.54389 21.1761 8.52589L21.1791 8.19389L21.5721 7.41489L22.0121 6.55289L22.2261 6.11889L22.3441 5.87189C22.6091 5.30689 22.8001 4.83889 22.9181 4.44189L22.9321 4.38589L22.9401 4.36789C23.1601 3.77489 22.7741 3.00989 21.9991 3.00989L21.8771 3.01689C21.7981 3.0266 21.7205 3.04574 21.6461 3.07389L21.5601 3.11189C21.2747 3.25048 20.9808 3.37072 20.6801 3.47189L20.3241 3.58689L20.0531 3.66689L19.2811 3.88089C17.9451 2.76289 16.1371 2.62689 14.2691 3.32689L14.0581 3.40989Z" fill="#757575" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M8 11V16M8 8V8.01M12 16V11M16 16V13C16 12.4696 15.7893 11.9609 15.4142 11.5858C15.0391 11.2107 14.5304 11 14 11C13.4696 11 12.9609 11.2107 12.5858 11.5858C12.2107 11.9609 12 12.4696 12 13M4 6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V6Z" stroke="#757575" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M18 2C18.2449 2.00003 18.4813 2.08996 18.6644 2.25272C18.8474 2.41547 18.9643 2.63975 18.993 2.883L19 3V7C19 7.24493 18.91 7.48134 18.7473 7.66437C18.5845 7.84741 18.3603 7.96434 18.117 7.993L18 8H15V9H18C18.1424 9.00005 18.2831 9.0305 18.4127 9.0893C18.5423 9.14811 18.6579 9.23391 18.7517 9.34098C18.8456 9.44804 18.9154 9.57391 18.9567 9.71015C18.998 9.84639 19.0096 9.98987 18.991 10.131L18.971 10.243L17.971 14.243C17.9214 14.4405 17.8126 14.6182 17.6593 14.7522C17.506 14.8862 17.3154 14.9702 17.113 14.993L17 15H15V21C15 21.2449 14.91 21.4813 14.7473 21.6644C14.5845 21.8474 14.3603 21.9643 14.117 21.993L14 22H10C9.75507 22 9.51866 21.91 9.33563 21.7473C9.15259 21.5845 9.03566 21.3603 9.007 21.117L9 21V15H7C6.75507 15 6.51866 14.91 6.33563 14.7473C6.15259 14.5845 6.03566 14.3603 6.007 14.117L6 14V10C6.00003 9.75507 6.08996 9.51866 6.25272 9.33563C6.41547 9.15259 6.63975 9.03566 6.883 9.007L7 9H9V8C8.99994 6.44762 9.60157 4.95564 10.6785 3.83753C11.7554 2.71942 13.2237 2.06221 14.775 2.004L15 2H18Z" fill="#757575" />
                                    </svg>
                                </div>
                            </div>
                            <div className='w-[520px] h-[2px] bg-[#F8F8F8] rounded-[7px] text-center mb-[32px] max-sm:hidden'></div>
                            <h1 className='text-[#757575] text-[18px] font-medium font-inter'>Category: Furniture, Kitchen Set, Ideas, Inspiration</h1>

                        </div>
                    </div>

                    <div className='md:col-span-6'>
                        <h1 className='font-satoshi text-[#031C32] text-[30px] font-bold mb-[18px]'>More Ideas</h1>
                        <div className='flex flex-col md:flex-row gap-[24px]'>
                            <div className='flex flex-col md:flex-row gap-[24px] mb-[36px]'>
                                <div className='w-full h-[280px] mb-28'>
                                    <img className='w-full h-full mb-[24px]' src={artikel1} alt="" />
                                    <div className='flex flex-col gap-[16px] text-justify mb-[24px]'>
                                        <h1 className='font-satoshi text-[#031C32] text-[30px] font-medium'>Transforming Your Kitchen Set</h1>
                                        <p className='font-inter text-[18px] font-normal text-[#425379]'>Our experts will guide you through the process, sharing expert tips on selecting the finest materials and incorporating stylish accents.</p>
                                    </div>
                                    <div className='flex flex-row gap-1 cursor-pointer'>
                                        <h1 className='text-[#031C32] font-inter underline'>See more</h1>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <mask id="mask0_280_911" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                                <rect width="24" height="24" fill="#D9D9D9" />
                                            </mask>
                                            <g mask="url(#mask0_280_911)">
                                                <path d="M16.15 13H5C4.71667 13 4.47917 12.9042 4.2875 12.7125C4.09583 12.5208 4 12.2833 4 12C4 11.7167 4.09583 11.4792 4.2875 11.2875C4.47917 11.0958 4.71667 11 5 11H16.15L13.3 8.15001C13.1 7.95001 13.0042 7.71668 13.0125 7.45001C13.0208 7.18335 13.1167 6.95001 13.3 6.75001C13.5 6.55001 13.7375 6.44585 14.0125 6.43751C14.2875 6.42918 14.525 6.52501 14.725 6.72501L19.3 11.3C19.4 11.4 19.4708 11.5083 19.5125 11.625C19.5542 11.7417 19.575 11.8667 19.575 12C19.575 12.1333 19.5542 12.2583 19.5125 12.375C19.4708 12.4917 19.4 12.6 19.3 12.7L14.725 17.275C14.525 17.475 14.2875 17.5708 14.0125 17.5625C13.7375 17.5542 13.5 17.45 13.3 17.25C13.1167 17.05 13.0208 16.8167 13.0125 16.55C13.0042 16.2833 13.1 16.05 13.3 15.85L16.15 13Z" fill="#031C32" />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                                <div className='w-full h-[280px] mb-28'>
                                    <img className='w-full h-full mb-[24px]' src={artikel3} alt="" />
                                    <div className='flex flex-col gap-[16px] text-justify mb-[24px]'>
                                        <h1 className='font-satoshi text-[#031C32] text-[30px] font-medium'>Transforming Your Kitchen Set</h1>
                                        <p className='font-inter text-[18px] font-normal text-[#425379]'>Our experts will guide you through the process, sharing expert tips on selecting the finest materials and incorporating stylish accents.</p>
                                    </div>
                                    <div className='flex flex-row gap-1 cursor-pointer'>
                                        <h1 className='text-[#031C32] font-inter underline'>See more</h1>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <mask id="mask0_280_911" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                                <rect width="24" height="24" fill="#D9D9D9" />
                                            </mask>
                                            <g mask="url(#mask0_280_911)">
                                                <path d="M16.15 13H5C4.71667 13 4.47917 12.9042 4.2875 12.7125C4.09583 12.5208 4 12.2833 4 12C4 11.7167 4.09583 11.4792 4.2875 11.2875C4.47917 11.0958 4.71667 11 5 11H16.15L13.3 8.15001C13.1 7.95001 13.0042 7.71668 13.0125 7.45001C13.0208 7.18335 13.1167 6.95001 13.3 6.75001C13.5 6.55001 13.7375 6.44585 14.0125 6.43751C14.2875 6.42918 14.525 6.52501 14.725 6.72501L19.3 11.3C19.4 11.4 19.4708 11.5083 19.5125 11.625C19.5542 11.7417 19.575 11.8667 19.575 12C19.575 12.1333 19.5542 12.2583 19.5125 12.375C19.4708 12.4917 19.4 12.6 19.3 12.7L14.725 17.275C14.525 17.475 14.2875 17.5708 14.0125 17.5625C13.7375 17.5542 13.5 17.45 13.3 17.25C13.1167 17.05 13.0208 16.8167 13.0125 16.55C13.0042 16.2833 13.1 16.05 13.3 15.85L16.15 13Z" fill="#031C32" />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                                <div className='w-full h-[280px] mb-[200px]'>
                                    <img className='w-full h-full mb-[24px]' src={artikel4} alt="" />
                                    <div className='flex flex-col gap-[16px] text-justify mb-[24px]'>
                                        <h1 className='font-satoshi text-[#031C32] text-[30px] font-medium'>Transforming Your Kitchen Set</h1>
                                        <p className='font-inter text-[18px] font-normal text-[#425379]'>Our experts will guide you through the process, sharing expert tips on selecting the finest materials and incorporating stylish accents.</p>
                                    </div>
                                    <div className='flex flex-row gap-1 cursor-pointer'>
                                        <h1 className='text-[#031C32] font-inter underline'>See more</h1>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <mask id="mask0_280_911" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                                <rect width="24" height="24" fill="#D9D9D9" />
                                            </mask>
                                            <g mask="url(#mask0_280_911)">
                                                <path d="M16.15 13H5C4.71667 13 4.47917 12.9042 4.2875 12.7125C4.09583 12.5208 4 12.2833 4 12C4 11.7167 4.09583 11.4792 4.2875 11.2875C4.47917 11.0958 4.71667 11 5 11H16.15L13.3 8.15001C13.1 7.95001 13.0042 7.71668 13.0125 7.45001C13.0208 7.18335 13.1167 6.95001 13.3 6.75001C13.5 6.55001 13.7375 6.44585 14.0125 6.43751C14.2875 6.42918 14.525 6.52501 14.725 6.72501L19.3 11.3C19.4 11.4 19.4708 11.5083 19.5125 11.625C19.5542 11.7417 19.575 11.8667 19.575 12C19.575 12.1333 19.5542 12.2583 19.5125 12.375C19.4708 12.4917 19.4 12.6 19.3 12.7L14.725 17.275C14.525 17.475 14.2875 17.5708 14.0125 17.5625C13.7375 17.5542 13.5 17.45 13.3 17.25C13.1167 17.05 13.0208 16.8167 13.0125 16.55C13.0042 16.2833 13.1 16.05 13.3 15.85L16.15 13Z" fill="#031C32" />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </Layout>
            <div className='mt-[100px]'>
                <Footer />
            </div>
        </>
    )
}

export default Article