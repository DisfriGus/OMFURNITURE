import React from 'react'
import service1 from '../../Assets/service1.png'
import service2 from '../../Assets/service2.png'
import service3 from '../../Assets/service3.png'



const Services = () => {

    const data = [
        {
            title: 'Frequently Asked Questions',
            subtitle: 'Our experts will guide you through the process, sharing expert tips on selecting the finest materials and incorporating stylish accents.',
            image: service1
        },
        {
            title: 'Online Payment Process',
            subtitle: 'Our experts will guide you through the process, sharing expert tips on selecting the finest materials and incorporating stylish accents.',
            image: service2
        },
        {
            title: 'Home Delivery',
            subtitle: 'Our experts will guide you through the process, sharing expert tips on selecting the finest materials and incorporating stylish accents.',
            image: service3
        }
    ]

    const ServicesCard = ({ data }) => {


        return (
            <div className='services-card'>
                <div>
                    <img className='bg-cover w-full' src={data.image} alt="" />
                </div>
                <div className='flex flex-col'>
                    <h1 className='font-inter text-[#031C32] font-medium text-3xl overflow-ellipsis py-4'>{data.title}</h1>
                    <h1 className='text-[#425379] font-inter font-normal text-lg overflow-ellipsis'>Our experts will guide you through the process, sharing expert tips on selecting the finest materials and incorporating stylish accents.</h1>
                    <div className='flex flex-row gap-1 mt-8 cursor-pointer'>
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
        )
    }




    return (
        <div className='services-component py-12'>
            <div className='services-heading font-inter text-3xl font-semibold text-[#031C32] mb-8'>
                <h1>Services</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>

                {data.map((item, index) => {
                    return (
                        <div key={index}>
                            <ServicesCard data={item} />
                        </div>
                    )
                })}






            </div>
        </div>
    )
}

export default Services