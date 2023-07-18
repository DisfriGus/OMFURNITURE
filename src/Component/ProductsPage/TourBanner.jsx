import React from 'react'
import tourbanner from '../../Assets/tourbanner.png'



const TourBanner = () => {


    const Button = () => {
        return (
            <button className='text-[#031C32] font-inter font-semibold rounded-[26px] bg-[#FFC900] text-lg px-[10px] py-[5px] md:px-[28px] md:py-[12px] flex flex-row justify-center items-center w-fit'>
                Start tour
                <svg className='w-[20px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"  >
                    <mask id="mask0_161_695" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                        <rect width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_161_695)">
                        <path d="M14 18L12.6 16.55L16.15 13H4V11H16.15L12.6 7.45L14 6L20 12L14 18Z" fill="#1C1B1F" />
                    </g>
                </svg>
            </button>
        )
    }



    return (
        <div className='w-full flex flex-col-reverse lg:flex-row justify-start items-center gap-16 rounded-lg bg-gradient-to-l from-blue-600 to-blue-700 py-[48px] px-[24px] md:px-[50px]'>
            <div className=''>
                <img src={tourbanner} alt="" />
            </div>
            <div className='title text-white flex flex-col gap-5 text-center lg:text-left items-center lg:items-start'>
                <h1 className='font-satoshi text-[24px] md:text-[36px] font-bold self-stretch'>
                    This wardrobe can't fill<br className="max-md:hidden" /> itself, right?
                </h1>

                <p className='font-inter font-light text-sm md:text-lg'>We think that maybe you would like to see more of our <br className="max-md:hidden" /> products, right? How about we give you a little tour?</p>
                <Button />
            </div>
        </div>
    )
}

export default TourBanner