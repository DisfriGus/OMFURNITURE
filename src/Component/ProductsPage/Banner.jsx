import React from 'react'
import sofa from '../../Assets/sofa.svg'
import sofa2 from '../../Assets/sofa.png'


const Banner = () => {

  const Button = () => {
    return (
      <button className='text-black font-inter font-semibold rounded-[26px] bg-[#FFC900] text-xs px-[10px] py-[5px] md:px-[28px] md:py-[12px] flex flex-row justify-center items-center w-fit'>
        Learn More
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
    <div className='w-full h-fit  bg-gradient-to-r from-blue-600 to-blue-900 flex flex-col-reverse max-sm:gap-5 md:flex-row justify-between px-16 py-12 rounded-lg'>
      <div className='left flex flex-col items-start justify-center gap-3 md:gap-10'>
        <div className='banner-heading text-white font-bold text-2xl sm:text-3xl md:text-5xl'>
          <h1>Furniture <br />
            Wonderland Awaits
          </h1>
        </div>
        <div className='banner-subheading text-white font-normal text:md md:text-lg'>
          <p>Transform Your Home with Stunning Furniture Pieces <br />
            Tailored to Your Style</p>
        </div>
        <Button />

      </div>
      <div className='right w-[80%] xl:w-fit flex items-center justify-center'>
        <img src={sofa2} alt="" />
      </div>

    </div>
  )
}

export default Banner