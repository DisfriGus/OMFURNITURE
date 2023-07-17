import React from 'react'

const LoginDialog = ({ handleCloseLogin }) => {


    const handleLogin = () => {
        localStorage.setItem('isLogin', 'true');
    }


    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-60"></div>
            <div className="relative sm:max-w-lg w-full p-10 bg-white rounded-xl py-16 font-inter">
                <button
                    className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700 focus:outline-none"
                    onClick={handleCloseLogin}
                >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                <div className='flex flex-col gap-3'>
                    <h1 className='font-bold text-[#031C32] text-4xl'>Welcome</h1>
                    <p className='font-normal text-slate-500'>Welcome, Please enter your details</p>
                </div>
                <form className="mt-8 space-y-3" action="#" onSubmit={handleLogin}>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-semibold text-[#031C32]'>Email</h1>
                        <div className='w-full border-[2px] border-slate-200 px-4 py-3 rounded-lg'>
                            <input className='outline-none' type="text" placeholder='Enter your email' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-semibold text-[#031C32]' >Password</h1>
                        <div className='w-full border-[2px] border-slate-200 px-4 py-3 rounded-lg'>
                            <input className='outline-none' type="text" placeholder='Password' />
                        </div>
                    </div>
                    <p className="text-sm text-black font-bold">
                        <span>Forgot password</span>
                    </p>
                    <div>
                        <button
                            type="submit"
                            className="my-5 w-full flex justify-center bg-[#031C32] text-gray-100 p-4 rounded-lg tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-[#07325a] cursor-pointer transition ease-in duration-300"
                        >
                            Login
                        </button>
                        <button
                            type="submit"
                            className="my-5 w-full flex justify-center items-center gap-3 bg-white border-2 border-slate-200 text-[#031C32]] p-4 rounded-lg tracking-wide font-semibold  cursor-pointer"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 128 128" fill="none">
                                <path d="M44.5899 4.20998C31.8008 8.64667 20.7714 17.0676 13.1219 28.236C5.47233 39.4044 1.60586 52.7314 2.09037 66.2596C2.57488 79.7879 7.38483 92.8042 15.8137 103.397C24.2426 113.989 35.8461 121.6 48.9199 125.11C59.5192 127.845 70.624 127.965 81.2799 125.46C90.9331 123.292 99.8578 118.654 107.18 112C114.801 104.863 120.332 95.7848 123.18 85.74C126.274 74.8165 126.825 63.3294 124.79 52.16H65.2699V76.85H99.7399C99.051 80.7879 97.5748 84.5463 95.3994 87.9003C93.2241 91.2543 90.3945 94.135 87.0799 96.37C82.8713 99.1553 78.1262 101.029 73.1499 101.87C68.1594 102.798 63.0405 102.798 58.0499 101.87C52.9915 100.825 48.2063 98.7376 43.9999 95.74C37.2414 90.9559 32.1667 84.1592 29.4999 76.32C26.7888 68.3338 26.7888 59.6762 29.4999 51.69C31.3982 46.0921 34.5363 40.9953 38.6799 36.78C43.4219 31.8675 49.4253 28.3559 56.0315 26.6307C62.6377 24.9055 69.5915 25.0333 76.1299 27C81.2379 28.5672 85.9089 31.3068 89.7699 35C93.6566 31.1333 97.5366 27.2566 101.41 23.37C103.41 21.28 105.59 19.29 107.56 17.15C101.665 11.6652 94.7465 7.39702 87.1999 4.58998C73.457 -0.40012 58.4197 -0.534225 44.5899 4.20998Z" fill="white" />
                                <path d="M44.59 4.20996C58.4186 -0.537472 73.4559 -0.406898 87.2 4.57996C94.7479 7.40607 101.664 11.6948 107.55 17.2C105.55 19.34 103.44 21.34 101.4 23.42C97.52 27.2933 93.6433 31.1533 89.77 35C85.9089 31.3067 81.238 28.5672 76.13 27C69.5938 25.0264 62.6402 24.8912 56.0322 26.6094C49.4242 28.3275 43.4171 31.8326 38.67 36.74C34.5263 40.9553 31.3883 46.0521 29.49 51.65L8.76001 35.6C16.1801 20.8856 29.0275 9.6302 44.59 4.20996Z" fill="#E33629" />
                                <path d="M3.25999 51.5C4.37339 45.9777 6.22325 40.6299 8.75999 35.6L29.49 51.69C26.7789 59.6762 26.7789 68.3338 29.49 76.32C22.5833 81.6533 15.6733 87.0133 8.75999 92.4C2.4115 79.7631 0.475318 65.365 3.25999 51.5Z" fill="#F8BD00" />
                                <path d="M65.2701 52.15H124.79C126.825 63.3194 126.274 74.8065 123.18 85.73C120.332 95.7748 114.801 104.853 107.18 111.99C100.49 106.77 93.7701 101.59 87.0801 96.37C90.3968 94.1328 93.2278 91.249 95.4032 87.8913C97.5786 84.5337 99.0537 80.7715 99.7401 76.83H65.2701C65.2601 68.61 65.2701 60.38 65.2701 52.15Z" fill="#587DBD" />
                                <path d="M8.75 92.3999C15.6633 87.0666 22.5733 81.7066 29.48 76.3199C32.1521 84.1619 37.234 90.9589 44 95.7399C48.2195 98.7236 53.015 100.794 58.08 101.82C63.0705 102.748 68.1895 102.748 73.18 101.82C78.1563 100.979 82.9014 99.1053 87.11 96.3199C93.8 101.54 100.52 106.72 107.21 111.94C99.8889 118.597 90.9642 123.239 81.31 125.41C70.6541 127.915 59.5492 127.795 48.95 125.06C40.567 122.822 32.7368 118.876 25.95 113.47C18.7673 107.766 12.9003 100.579 8.75 92.3999Z" fill="#319F43" />
                            </svg>
                            Sign in with Google
                        </button>
                    </div>
                </form>
                {/* <div className='text-center'>
                    <h1 className='font-light'>Don't have an account? <span className='text-[#031C32] font-semibold'> Sign up for free</span></h1>
                </div> */}
            </div>
        </div>
    )
}

export default LoginDialog