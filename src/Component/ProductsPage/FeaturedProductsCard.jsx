import React, {useState} from 'react';
import furniture2 from '../../Assets/furniture2.png';
import cabinet from '../../Assets/cabinet.png'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginDialog from '../Auth/LoginDialog';

const FeaturedProductsCard = ({ data, landingPage, handleShowDialog }) => {

    const navigate = useNavigate();
    const navigateToDetailPage = () => {
        navigate(`/DetailPage/${data.id}`, { state: { data } });
    };


    

    console.log(data);

    const starSvg = (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <g clipPath="url(#clip0_257_747)">
                <path d="M9.00012 13.3125L4.37112 15.7462L5.25537 10.5915L1.50537 6.94122L6.68037 6.19122L8.99487 1.50146L11.3094 6.19122L16.4844 6.94122L12.7344 10.5915L13.6186 15.7462L9.00012 13.3125Z" fill="#FFC900" stroke="#FFC900" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_257_747">
                    <rect width="18" height="18" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );

    const stars = Array.from({ length: 5 }, (v, i) => i + 1);


    // const addToCart = () => {
    //     const existingCartData = localStorage.getItem('cartData');
    //     const cartData = existingCartData ? JSON.parse(existingCartData) : [];
    //     cartData.push(data);
    //     localStorage.setItem('cartData', JSON.stringify(cartData));
    // };

    const addToCart = () => {
        const user = localStorage.getItem('isLogin');
        if (user) {
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
        } else {
            handleShowDialog();
        }

    };

    return (
        <>
            <div className="bg-white w-[320px] h-full max-md:mx-auto font-satoshi">
                <div onClick={navigateToDetailPage} className="image rounded-md cursor-pointer">
                    <img src={data.image} alt="" />
                    {/* <img src="../../Assets/cabinet.png" alt="" /> */}
                </div>
                <div className="title flex flex-col gap-3 rounded-md w-[320px]">
                    <div className="flex flex-row justify-between text-[#031C32] font-bold text-xl text-ellipsis cursor-pointer">
                        <h1 onClick={navigateToDetailPage} >{data.title}</h1>
                        <h1>{data.price}</h1>
                    </div>
                    <div className="subtitle font-inter text-xl font-medium text-[#425379]">
                        <h1>{data.subtitle}</h1>
                    </div>
                    <div className='flex flex-row justify-start items-center gap-1 mb-[14px]'>
                        <div className="star flex flex-row justify-start items-center">
                            {stars.map((index) => (
                                <div key={index}>{starSvg}</div>
                            ))}
                        </div>
                        <div>
                            <h1>{data.sold}</h1>
                        </div>
                    </div>
                    <button onClick={addToCart} className="w-fit py-[12px] px-[36px] rounded-[27px] border-slate-400 border-[1px] hover:border-none text-black hover:bg-[#031C32] hover:text-white text-lg">
                        {landingPage ? 'Buy now' : 'Add to Cart'}
                    </button>

                </div>

            </div>
        </>
    );
};

export default FeaturedProductsCard;
