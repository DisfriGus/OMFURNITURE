import Card from '../Card';
import TopPickCard from './TopPickCard';
import furniture2 from '../../Assets/furniture2.png'


import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


const TopPickSlider = () => {
    const swiperRef = useRef();

    const cardData = [
        {
            title: 'Sofa',
            image: furniture2,
        },
        {
            title: 'Coffee Table',
            image: furniture2,
        },
        {
            title: 'Card 3',
            image: 'path/to/card3-image.jpg',
        },
        {
            title: 'Card 4',
            image: 'path/to/card4-image.jpg',
        },
        {
            title: 'Card 5',
            image: 'path/to/card5-image.jpg',
        },
        {
            title: 'Card 6',
            image: 'path/to/card6-image.jpg',
        },
        {
            title: 'Card 7',
            image: 'path/to/card7-image.jpg',
        },
        {
            title: 'Card 8',
            image: 'path/to/card8-image.jpg',
        },
    ];

    const sliderSettings = {
        440: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        550: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        800: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
        1500: {
            slidesPerView: 6,
            spaceBetween: 30,
        },
    };

    return (
        <div className='pick-of-the-week'>
            <div className='header-pick-of-the-week flex flex-row justify-between my-8'>
                <div className='flex flex-col gap-1 '>
                    <h3 className='text-[#1659E6] font-inter font-medium text-lg'>Pick of the week</h3>
                    <h1 className='text-[#031C32] font-inter font-semibold text-3xl '>Our Top Pick Just For You</h1>
                </div>
                <div className='navigation-arrow flex flex-row-reverse gap-2 items-end'>

                    <div onClick={() => swiperRef.current?.slideNext()} className="swiper-button-next">
                        <svg className='bg-[#1659E6] rounded-full' xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                            <circle cx="18" cy="18" r="18" />
                            <mask id="mask0_165_713" maskUnits="userSpaceOnUse" x="6" y="6" width="24" height="24">
                                <rect x="6" y="6" width="24" height="24" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_165_713)">
                                <path d="M20 24L18.6 22.55L22.15 19H10V17H22.15L18.6 13.45L20 12L26 18L20 24Z" fill="white" />
                            </g>
                        </svg>
                    </div>
                    <div onClick={() => swiperRef.current?.slidePrev()} className="swiper-button-prev bg-slate-300 hover:bg-[#1659E6] rounded-full">
                        <svg className='' xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                            <circle cx="18" cy="18" r="18" />
                            <mask id="mask0_165_708" maskUnits="userSpaceOnUse" x="6" y="6" width="24" height="24">
                                <rect width="24" height="24" transform="matrix(-1 0 0 1 30 6)" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_165_708)">
                                <path d="M16 24L17.4 22.55L13.85 19H26V17H13.85L17.4 13.45L16 12L10 18L16 24Z" fill="#F2F2F2" />
                            </g>
                        </svg>
                    </div>

                </div>
            </div>
            <div>
                <div>
                    <Swiper
                        breakpoints={sliderSettings}
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        >
                        {cardData.map((card, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <TopPickCard data={card} />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>

                </div>
            </div>
        </div>
    )
}

export default TopPickSlider