import React, { useEffect, useState } from 'react'
import Navbar from '../Component/Navbar'
import { useNavigate, useLocation, useParams } from 'react-router-dom'
import Profile from '../Assets/kam-idris-_HqHX3LBN18-unsplash.jpg'
import Logo from '../Assets/logo2.svg'
import failedImage from '../Assets/cabinet.png'
import Delivery from '../Assets/Local_shipping.svg'
import Box from '../Assets/box.svg'
import { MdArrowBack, MdOutlineExpandLess, MdOutlineExpandMore } from 'react-icons/md'
import { RiStarSFill } from 'react-icons/ri'
import Footer from '../Component/Footer'
import ShoppingCart from '../Assets/shoppingCart.svg'
import { featuredProducts } from '../Data/Products'
import { ToastContainer, toast } from 'react-toastify';
import Subnavbar from '../Component/Subnavbar'


const DetailPage = () => {
   
    const navigate = useNavigate()

    const navigateToCart = () => {
        navigate('/cart')
    }


    const [count, setCount] = useState(0)
    const [expand, setExpand] = useState(false)
    function pengurangan() {
        if (count > 0) {
            setCount(count - 1)
        }

    }
    const slidePrice = (price) => {
        const extractedNumber = price.replace(/[^0-9,]/g, ''); // Remove all non-digit and non-comma characters
        return extractedNumber;
    };

    let { title } = useParams();

    const [data, setData] = useState(null);
  
    useEffect(() => {
      const getProductById = (id) => {
        const product = featuredProducts.find((item) => item.id === parseInt(id));
        setData(product);
      };
  
      getProductById(title);
    }, [title]);
  
    console.log(data);
  
    if (!data) {
      return <div></div>;
    }

    // if (!data) {
    //     // Handle loading state or error state when data is not available
    //     return <div>
    //         <Navbar logo={Logo} />
    //         <div className='py-16 lg:py-11 lg:px-[240px] flex max-2xl:flex-col  gap-11 items-center font-inter'>
    //             <div className="  lg:w-[720px]  max-sm:py-10 max-sm:px-6 ">
    //                 <div className="flex flex-row w-full items-center gap-2 mb-4">
    //                     <button onClick={() => navigate(-1)} className="max-lg:hidden">
    //                         <h5 className="flex items-center text-[#757575] gap-[6px] "><MdArrowBack /> Back</h5>
    //                     </button>
    //                 </div>
    //                 <div className="flex items-center gap-3 w-full mb-10">
    //                     <img className='w-[42px] h-[42px] rounded-full' src={Profile} alt="" />  {/*PP seller */}
    //                     <h3 className='text-[18px] text-[#031C32] font-bold'>Noble House</h3> {/*Nama Seller  */}
    //                 </div>
    //                 <div className='flex flex-col gap-[29px]'>
    //                     <img className='w-[345px] lg:w-[720px] h-[400px] object-cover object-center' src={failedImage} alt="" />
    //                     <div>
    //                         <img className='w-[100px] h-[100px] lg:w-[224px] lg:h-[120px] object-cover object-center' src={failedImage} alt="" />
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className='max-lg:w-full max-lg:px-4' >
    //                 <h1 className='font-satoshi text-[36px] font-bold'>Cabinet</h1>
    //                 <p className='mb-[50px]'>Smoke and accented finishing cabinet</p>
    //                 <h3 className='text-[24px] font-bold'><span className='text-[#1659E6] font-bold'>$</span> 1201</h3>
    //                 <h3 className='mb-[50px] text-[#425379] font-medium'>Suggested payments with secure payment system.</h3>
    //                 <div className='flex mb-[26px] gap-7'>
    //                     <div className='flex bg-[#F2F2F2] w-fit gap-[9px] rounded-3xl text-[16px]'>
    //                         <button onClick={pengurangan} className='hover:hover:bg-slate-200 flex pl-[18px] pr-[9px] py-3 rounded-bl-3xl rounded-tl-3xl '>-</button>
    //                         <p className='py-3'>{count}</p>
    //                         <button onClick={() => setCount(count + 1)} className='hover:bg-gray-200 pr-[18px] pl-[9px] py-3 rounded-br-3xl rounded-tr-3xl '>+</button>
    //                     </div>
    //                     <div>
    //                         <p>Only 10 left!<br />Dont mess it</p>
    //                     </div>
    //                 </div>
    //                 <div className='flex gap-[18px] mb-[50px]'>
    //                     <button className='px-[56px] py-3 rounded-[27px] bg-[#031C32] text-white max-sm:text-[12px]'>Buy Now</button>
    //                     <button className='px-[56px] py-3 rounded-[27px] max-sm:text-[12px] border'>Add Cart</button>
    //                 </div>
    //                 <div>
    //                     <div className='border rounded-t-[12px] flex gap-3 px-[18px]  py-[14px] lg:w-[520px]'>
    //                         <div className='w-[24px] h-[24px]'>
    //                             <img src={Delivery} alt="" />
    //                         </div>
    //                         <div className=''>
    //                             <h4 className='text-[16px] font-semibold text-[#031C32]'>Free Delivery</h4>
    //                             <p className='font-normal underline text-[#031C32]'>Enter your postal code for delivery availability</p>
    //                         </div>
    //                     </div>
    //                     <div className='border flex rounded-b-[12px] px-[18px] gap-3 py-[14px] lg:w-[520px]'>
    //                         <div>
    //                             <img src={Box} alt="" />
    //                         </div>
    //                         <div>
    //                             <h4 className='text-[16px] font-semibold text-[#031C32]'>Return Policy</h4>
    //                             <p className='font-normal text-[#031C32]'>Free 60-days delivery return. <span className='underline'>Details</span></p>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //         <div className='px-4 lg:px-[240px] font-inter '>
    //             <h1 className='text-[24px] font-bold text-[#031C32]'>Product Spesification</h1>
    //             <div className='flex flex-col 2xl:flex-row gap-6 mb-9'>
    //                 <div className='lg:w-[680px]'>
    //                     <div className='border bg-[#F5F5F7] py-4 px-3'>
    //                         <h3 className='mb-4 font-medium'>General Spesification</h3>
    //                         <div className='bg-white flex justify-between py-3'>
    //                             <h4>Material</h4>
    //                             <h4>Tweed, Wood</h4>
    //                         </div>
    //                         <div className='flex justify-between py-3'>
    //                             <h4>Overall</h4>
    //                             <h4>H: 33 in, W: 55 in, D:31.5 in</h4>
    //                         </div>
    //                         <div className='bg-white flex justify-between py-3'>
    //                             <h4>Manufacture Date</h4>
    //                             <h4>21 July 2023</h4>
    //                         </div>
    //                         <div className='flex justify-between py-3'>
    //                             <h4>Primary Finish</h4>
    //                             <h4>Platinum Tweed</h4>
    //                         </div>
    //                         <div className='bg-white flex justify-between py-3 '>
    //                             <h4>Fabric Content</h4>
    //                             <h4 className='max-md:w-[138px]'>56% Polyester, 22% Cotton, 18% Acryclic, 4% Polyethylene</h4>
    //                         </div>
    //                         <div className='flex justify-between py-3'>
    //                             <h4>Overall</h4>
    //                             <h4>H: 33 in, W: 55 in, D:31.5 in</h4>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div className='lg:w-[680px]'>
    //                     <div className='border bg-[#F5F5F7] py-4 px-3'>
    //                         <h3 className='mb-4 font-medium'>Product Detail</h3>
    //                         <div className='bg-white flex justify-between py-3'>
    //                             <h4>Material</h4>
    //                             <h4>Tweed, Wood</h4>
    //                         </div>
    //                         <div className='flex justify-between py-3'>
    //                             <h4>Overall</h4>
    //                             <h4>H: 33 in, W: 55 in, D:31.5 in</h4>
    //                         </div>
    //                         <div className='bg-white flex justify-between py-3'>
    //                             <h4>Manufacture Date</h4>
    //                             <h4>21 July 2023</h4>
    //                         </div>
    //                         <div className='flex justify-between py-3'>
    //                             <h4>Primary Finish</h4>
    //                             <h4>Platinum Tweed</h4>
    //                         </div>
    //                         <div className='bg-white flex justify-between py-3 '>
    //                             <h4>Fabric Content</h4>
    //                             <h4 className='max-md:w-[138px]'>56% Polyester, 22% Cotton, 18% Acryclic, 4% Polyethylene</h4>
    //                         </div>
    //                         <div className='flex justify-between py-3'>
    //                             <h4>Overall</h4>
    //                             <h4>H: 33 in, W: 55 in, D:31.5 in</h4>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className={`border py-4 px-3 w-full lg:w-[680px]`} >
    //                 <div className={`justify-between ${expand ? 'mb-[32px]' : 'mb-0'} flex items-center cursor-pointer`} onClick={() => setExpand(!expand)}>
    //                     <h3 className='font-medium'>Reviews (173)</h3>
    //                     <button className='text-[28px]' >
    //                         {
    //                             expand ? <MdOutlineExpandLess /> : <MdOutlineExpandMore />
    //                         }
    //                     </button>
    //                 </div>
    //                 {expand ? (
    //                     <div className='flex flex-col gap-[34px]'>
    //                         <div>
    //                             <div className='flex items-center justify-between mb-2'>
    //                                 <h1 className=' font-inter text-[#031C32] font-medium'>Tommy Sudarso - 29 Juli 2023</h1>
    //                                 <div className='flex items-center gap-[18px]'>
    //                                     <div className='flex items-center text-[#FFC900] text-[18px]'>
    //                                         <RiStarSFill />
    //                                         <RiStarSFill />
    //                                         <RiStarSFill />
    //                                         <RiStarSFill />
    //                                         <RiStarSFill />
    //                                     </div>
    //                                     <p>5.0 Stars</p>
    //                                 </div>
    //                             </div>
    //                             <p className='text-[#425379] tracking-tight'>Fits great looks great. Wish it was slightly more comfortable . But overall good shoe like a multi tool for any distance</p>
    //                         </div>
    //                         <div>
    //                             <div className='flex items-center justify-between mb-2'>
    //                                 <h1 className=' font-inter text-[#031C32] font-medium'>Pandu Winoto - 1 August 2023</h1>
    //                                 <div className='flex items-center gap-[18px]'>
    //                                     <div className='flex items-center text-[#FFC900] text-[18px]'>
    //                                         <RiStarSFill />
    //                                         <RiStarSFill />
    //                                         <RiStarSFill />
    //                                         <RiStarSFill />
    //                                         <RiStarSFill />
    //                                     </div>
    //                                     <p>5.0 Stars</p>
    //                                 </div>
    //                             </div>
    //                             <p className='text-[#425379] tracking-tight'>Fits great looks great. Wish it was slightly more comfortable . But overall good shoe like a multi tool for any distance</p>
    //                         </div>
    //                         <div>
    //                             <div className='flex items-center justify-between mb-2'>
    //                                 <h1 className=' font-inter text-[#031C32] font-medium'>Jennifer K. - 3 August 2023</h1>
    //                                 <div className='flex items-center gap-[18px]'>
    //                                     <div className='flex items-center text-[#FFC900] text-[18px]'>
    //                                         <RiStarSFill />
    //                                         <RiStarSFill />
    //                                         <RiStarSFill />
    //                                         <RiStarSFill />
    //                                         <RiStarSFill />
    //                                     </div>
    //                                     <p>5.0 Stars</p>
    //                                 </div>
    //                             </div>
    //                             <p className='text-[#425379] tracking-tight'>Fits great looks great. Wish it was slightly more comfortable . But overall good shoe like a multi tool for any distance</p>
    //                         </div>
    //                         <div className='flex justify-center  '>
    //                             <button className='border py-3 px-[56px] rounded-[26px] max-md:w-full'>
    //                                 Load More
    //                             </button>
    //                         </div>
    //                     </div>
    //                 ) : (
    //                     <div></div>
    //                 )}
    //             </div>
    //         </div>
    //         <div className='mt-[100px]'>
    //             <Footer />
    //         </div>
    //     </div>
    // }

    const addToCart = () => {
        const existingCartData = localStorage.getItem('cartData');
        let cartData = existingCartData ? JSON.parse(existingCartData) : [];

        const existingItem = cartData.find(item => item.id === data.id);
        if (existingItem) {
            existingItem.quantity = (existingItem.quantity || 1) + 1;
        } else {
            cartData.push({ ...data, quantity: 1 });
        }

        localStorage.setItem('cartData', JSON.stringify(cartData));
        toast.success('Product added', {
            position: "top-center",
            autoClose: 700,
            });
    };


    return (
        <div>
            <Subnavbar/>
            <Navbar logo={Logo} cart={ShoppingCart} />
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className='lg:px-[240px] flex max-2xl:flex-col  gap-11 items-center font-inter'>
                <div className="  lg:w-[720px]  max-sm:py-10 max-sm:px-6 ">
                    <div className="flex flex-row w-full items-center gap-2 mb-4">
                        <button onClick={() => navigate(-1)} className="max-lg:hidden">
                            <h5 className="flex items-center text-[#757575] gap-[6px] "><MdArrowBack /> Back</h5>
                        </button>
                    </div>
                    <div className="flex items-center gap-3 w-full mb-6">
                        <img className='w-[42px] h-[42px] rounded-full' src={Profile} alt="" />  {/*PP seller */}
                        <h3 className='text-[18px] text-[#031C32] font-bold font-satoshi'>Noble House</h3> {/*Nama Seller  */}
                    </div>
                    <div className='flex flex-col gap-[29px]'>
                        <img className='w-[345px] lg:w-[720px] h-[400px] object-cover object-center' src={data.image} alt="" />
                        <div>
                            <img className='w-[100px] h-[100px] lg:w-[224px] lg:h-[120px] object-cover object-center' src={data.image} alt="" />
                        </div>
                    </div>
                </div>
                <div className='max-lg:w-full max-lg:px-4' >
                    <h1 className='font-satoshi text-[36px] font-bold'>{data.title}</h1>
                    <p className=''>{data.subtitle}</p>
                    <hr className='my-6'/>
                    <h3 className='text-[32px] font-bold font-satoshi'><span className='text-[#1659E6] font-bold'>$</span> {slidePrice(data.price)}</h3>
                    <h3 className='mb-[50px] text-[#425379] font-medium'>Suggested payments with secure payment system.</h3>
                    <div className='flex mb-[26px] gap-7'>
                        <div className='flex bg-[#F2F2F2] w-fit gap-[9px] rounded-3xl text-[16px]'>
                            <button onClick={pengurangan} className='hover:hover:bg-slate-200 flex pl-[18px] pr-[9px] py-3 rounded-bl-3xl rounded-tl-3xl '>-</button>
                            <p className='py-3'>{count}</p>
                            <button onClick={() => setCount(count + 1)} className='hover:bg-gray-200 pr-[18px] pl-[9px] py-3 rounded-br-3xl rounded-tr-3xl '>+</button>
                        </div>
                        <div>
                            <p>Only {data.stock} left!<br />Dont mess it</p>
                        </div>
                    </div>
                    <div className='flex gap-[18px] '>
                        <button onClick={navigateToCart} className='px-[56px] py-3 rounded-[27px] bg-[#031C32] text-white max-sm:text-[12px]'>Buy Now</button>
                        <button onClick={addToCart} className='px-[56px] py-3 rounded-[27px] max-sm:text-[12px] border'>Add Cart</button>
                    </div>
                    <hr className='my-6'/>
                    <div>
                        <div className='border rounded-t-[12px] flex gap-3 px-[18px]  py-[14px] lg:w-[520px]'>
                            <div className='w-[24px] h-[24px]'>
                                <img src={Delivery} alt="" />
                            </div>
                            <div className=''>
                                <h4 className='text-[16px] font-semibold text-[#031C32]'>Free Delivery</h4>
                                <p className='font-normal underline text-[#031C32]'>Enter your postal code for delivery availability</p>
                            </div>
                        </div>
                        <div className='border flex rounded-b-[12px] px-[18px] gap-3 py-[14px] lg:w-[520px]'>
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
            <div className='px-4 lg:px-[240px] font-inter '>
                <h1 className='text-[24px] font-bold text-[#031C32]'>Product Spesification</h1>
                <div className='flex flex-col 2xl:flex-row gap-6 mb-9'>
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
                            <div className='bg-white flex justify-between py-3 '>
                                <h4>Fabric Content</h4>
                                <h4 className='max-md:w-[138px]'>56% Polyester, 22% Cotton, 18% Acryclic, 4% Polyethylene</h4>
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
                            <div className='bg-white flex justify-between py-3 '>
                                <h4>Fabric Content</h4>
                                <h4 className='max-md:w-[138px]'>56% Polyester, 22% Cotton, 18% Acryclic, 4% Polyethylene</h4>
                            </div>
                            <div className='flex justify-between py-3'>
                                <h4>Overall</h4>
                                <h4>H: 33 in, W: 55 in, D:31.5 in</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`border py-4 px-3 w-full lg:w-[680px]`} >
                    <div className={`justify-between ${expand ? 'mb-[32px]' : 'mb-0'} flex items-center cursor-pointer`} onClick={() => setExpand(!expand)}>
                        <h3 className='font-medium'>Reviews (173)</h3>
                        <button className='text-[28px]' >
                            {
                                expand ? <MdOutlineExpandLess /> : <MdOutlineExpandMore />
                            }
                        </button>
                    </div>
                    {expand ? (
                        <div className='flex flex-col gap-[34px]'>
                            <div>
                                <div className='flex items-center justify-between mb-2'>
                                    <h1 className=' font-inter text-[#031C32] font-medium'>Tommy Sudarso - 29 Juli 2023</h1>
                                    <div className='flex items-center gap-[18px]'>
                                        <div className='flex items-center text-[#FFC900] text-[18px]'>
                                            <RiStarSFill />
                                            <RiStarSFill />
                                            <RiStarSFill />
                                            <RiStarSFill />
                                            <RiStarSFill />
                                        </div>
                                        <p>5.0 Stars</p>
                                    </div>
                                </div>
                                <p className='text-[#425379] tracking-tight'>Fits great looks great. Wish it was slightly more comfortable . But overall good shoe like a multi tool for any distance</p>
                            </div>
                            <div>
                                <div className='flex items-center justify-between mb-2'>
                                    <h1 className=' font-inter text-[#031C32] font-medium'>Pandu Winoto - 1 August 2023</h1>
                                    <div className='flex items-center gap-[18px]'>
                                        <div className='flex items-center text-[#FFC900] text-[18px]'>
                                            <RiStarSFill />
                                            <RiStarSFill />
                                            <RiStarSFill />
                                            <RiStarSFill />
                                            <RiStarSFill />
                                        </div>
                                        <p>5.0 Stars</p>
                                    </div>
                                </div>
                                <p className='text-[#425379] tracking-tight'>Fits great looks great. Wish it was slightly more comfortable . But overall good shoe like a multi tool for any distance</p>
                            </div>
                            <div>
                                <div className='flex items-center justify-between mb-2'>
                                    <h1 className=' font-inter text-[#031C32] font-medium'>Jennifer K. - 3 August 2023</h1>
                                    <div className='flex items-center gap-[18px]'>
                                        <div className='flex items-center text-[#FFC900] text-[18px]'>
                                            <RiStarSFill />
                                            <RiStarSFill />
                                            <RiStarSFill />
                                            <RiStarSFill />
                                            <RiStarSFill />
                                        </div>
                                        <p>5.0 Stars</p>
                                    </div>
                                </div>
                                <p className='text-[#425379] tracking-tight'>Fits great looks great. Wish it was slightly more comfortable . But overall good shoe like a multi tool for any distance</p>
                            </div>
                            <div className='flex justify-center  '>
                                <button className='border py-3 px-[56px] rounded-[26px] max-md:w-full'>
                                    Load More
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
            </div>
            <div className='mt-[100px]'>
                <Footer />
            </div>
        </div>
    )
}

export default DetailPage