import React from 'react'
import Card from './Card'
import Apartment from '../Assets/Apartment.png'
import House from '../Assets/House.png'
import Office from '../Assets/Office.png'
import Penthouse from '../Assets/Penthouse.png'
import { NavLink } from 'react-router-dom'
const CardCategory = () => {
    const categories = [
        {
            image: House,
            title: 'House'
        },
        {
            image: Apartment,
            title: "Apartment"
        },
        {
            image: Office,
            title: 'Office'
        },
        {
            image: Penthouse,
            title: "Penthouse"
        }
    ]
    return (
        <div>
            <div className='md:mx-[80px] mx-[12px] mt-9 font-inter font-medium max-sm:w-full max-sm:mx-1'>
                <div>
                    <h1 className='text-[21px] mb-4'>
                        Categories
                    </h1>
                </div>
                <NavLink className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 sm:grid-cols-2 max-sm:place-items-center max-sm:gap-4'>
                    {
                        categories.map((item, index) => {
                            return (
                                <div key={index}>
                                    <Card image={item.image} title={item.title} />
                                </div>
                            )
                        })
                    }

                </NavLink>
            </div>
        </div>
    )
}

export default CardCategory