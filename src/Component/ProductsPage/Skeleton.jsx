import React from 'react'
import Layout from '../Layout'
import Navbar from '../Navbar'

const Skeleton = () => {
    return (
        <>
            <Navbar />
            <Layout>

                <div role="status" className="space-y-8 animate-pulse flex flex-col md:items-center">
                    <div className="w-full">
                        <div className='h-[364px] w-full rounded-lg dark:bg-gray-400 mb-4 '></div>
                    </div>
                    <div className="w-full">
                        <div className='h-[20px] w-[200px] rounded-md dark:bg-gray-400 mb-4 '></div>
                        <div className='h-[28px] w-[500px] rounded-md dark:bg-gray-400 mb-4 '></div>
                    </div>
                    <div className="w-full flex flex-row gap-5">
                        <div className='h-[240px] w-[215px] rounded-lg dark:bg-gray-400 mb-4 '></div>
                        <div className='h-[240px] w-[215px] rounded-lg dark:bg-gray-400 mb-4 '></div>
                        <div className='h-[240px] w-[215px] rounded-lg dark:bg-gray-400 mb-4 '></div>
                        <div className='h-[240px] w-[215px] rounded-lg dark:bg-gray-400 mb-4 '></div>
                        <div className='h-[240px] w-[215px] rounded-lg dark:bg-gray-400 mb-4 '></div>
                        <div className='h-[240px] w-[215px] rounded-lg dark:bg-gray-400 mb-4 '></div>
                    </div>
                    <div className="w-full">
                        <div className='h-[20px] w-[200px] rounded-sm dark:bg-gray-400 mb-4 '></div>
                        <div className='h-[30px] w-[500px] rounded-sm dark:bg-gray-400 mb-4 '></div>
                    </div>
                    <span className="sr-only">Loading...</span>
                </div>
            </Layout>
        </>

    )
}

export default Skeleton