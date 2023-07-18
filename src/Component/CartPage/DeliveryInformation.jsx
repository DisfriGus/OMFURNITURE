import React from 'react'

const DeliveryInformation = () => {


    const Button = () => {
        return (
            <button className='bg-[#031C32] px-[56px] py-[16px] text-white font-inter text-[18px] font-medium rounded-[32px] w-fit'>
                Save Information
            </button>
        )
    }







    return (
        <div className='delivery-information h-fit  bg-white rounded-[18px] border-[1px] border-[#E7E7E7] px-[32px] py-[24px] mt-5'>
            <div className='flex flex-col gap-[24px]'>
                <div className='heading mb-[18px] text-[#031C32] font-satoshi text-[24px] font-medium'>
                    Delivery Information
                </div>
                <div className='flex flex-col md:flex-row gap-[32px]'>

                    <div className='w-full flex flex-col gap-[12px]'>
                        <h1 className='font-inter text-[#031C32] text-[16px] font-medium'>First Name</h1>
                        <div className='bg-white px-[24px] py-[16px] rounded-[8px] border-[1px] border-[#F2F2F2]'>
                            <input type="text" placeholder='Enter here...' className='outline-none bg-transparent w-full' />
                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-[12px]'>
                        <h1 className='font-inter text-[#031C32] text-[16px] font-medium'>Last Name</h1>
                        <div className='bg-white px-[24px] py-[16px] rounded-[8px]  border-[1px] border-[#F2F2F2]'>
                            <input type="text" placeholder='Enter here...' className='outline-none bg-transparent w-full' />
                        </div>
                    </div>

                </div>

                <div className='flex flex-col md:flex-row  gap-[32px]'>

                    <div className='w-full flex flex-col gap-[12px]'>
                    <h1 className='font-inter text-[#031C32] text-[16px] font-medium'>Adress</h1>
                        <div className='bg-white px-[24px] py-[16px] rounded-[8px] border-[1px] border-[#F2F2F2]'>
                            <input type="text" placeholder='Enter here...' className='outline-none bg-transparent w-full' />
                        </div>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row gap-[32px]'>

                    <div className='w-full flex flex-col gap-[12px]'>
                        <h1 className='font-inter text-[#031C32] text-[16px] font-medium'>City/ Town</h1>
                        <div className='bg-white px-[24px] py-[16px] rounded-[8px] border-[1px] border-[#F2F2F2]'>
                            <input type="text" placeholder='Enter here...' className='outline-none bg-transparent w-full' />
                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-[12px]'>
                        <h1 className='font-inter text-[#031C32] text-[16px] font-medium'>Zip Code</h1>
                        <div className='bg-white px-[24px] py-[16px] rounded-[8px]  border-[1px] border-[#F2F2F2]'>
                            <input type="text" placeholder='Enter here...' className='outline-none bg-transparent w-full' />
                        </div>
                    </div>

                </div>
                <div className='flex flex-col md:flex-row gap-[32px]'>

                    <div className='w-full flex flex-col gap-[12px]'>
                        <h1 className='font-inter text-[#031C32] text-[16px] font-medium'>Phone Number</h1>
                        <div className='bg-white px-[24px] py-[16px] rounded-[8px] border-[1px] border-[#F2F2F2]'>
                            <input type="number" placeholder='+1 889-9012...' className='outline-none bg-transparent w-full' />
                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-[12px]'>
                        <h1 className='font-inter text-[#031C32] text-[16px] font-medium'>Email</h1>
                        <div className='bg-white px-[24px] py-[16px] rounded-[8px]  border-[1px] border-[#F2F2F2]'>
                            <input type="text" placeholder='Enter here...' className='outline-none bg-transparent w-full' />
                        </div>
                    </div>

                </div>
                <Button />
            </div>



        </div>
    )
}

export default DeliveryInformation