import React from 'react'

const PaymentSuccessDialog = ({ handleDialog }) => {


    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-60"></div>
            <div className="relative sm:w-[800px] h-fit w-full p-10 bg-white rounded-[16px] font-inter px-[140px] py-[42px]">
                <button
                    className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700 focus:outline-none"
                    onClick={handleDialog}
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


                <div className='flex flex-col items-center justify-center'>
                    <div className='flex flex-col gap-[18px] items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                            <rect opacity="0.15" width="56" height="56" rx="28" fill="#1659E6" />
                            <rect x="16" y="16" width="24" height="24" rx="12" fill="#1659E6" />
                            <mask id="mask0_528_557" maskUnits="userSpaceOnUse" x="19" y="19" width="18" height="18">
                                <rect x="19" y="19" width="18" height="18" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_528_557)">
                                <path d="M25.8475 30.2012L32.1973 23.3207C32.3946 23.1069 32.6457 23 32.9507 23C33.2556 23 33.5067 23.1069 33.704 23.3207C33.9013 23.5345 34 23.8066 34 24.137C34 24.4674 33.9013 24.7396 33.704 24.9534L26.6009 32.6501C26.3857 32.8834 26.1345 33 25.8475 33C25.5605 33 25.3094 32.8834 25.0942 32.6501L22.296 29.6181C22.0987 29.4043 22 29.1322 22 28.8017C22 28.4713 22.0987 28.1992 22.296 27.9854C22.4933 27.7716 22.7444 27.6647 23.0493 27.6647C23.3543 27.6647 23.6054 27.7716 23.8027 27.9854L25.8475 30.2012Z" fill="white" />
                            </g>
                        </svg>
                        <h1 className='text-[#031C32] font-satoshi font-bold text-[24px]'>Payment Success!</h1>
                    </div>
                    <div className='w-[520px] h-[2px] bg-[#F8F8F8] rounded-[7px] mt-[24px] text-center mb-[18px]'></div>
                    <div className='flex flex-row justify-between w-full mb-[18px] text-[#031C32] font-inter font-normal text-[16px]'>
                        <h1>Best Deal Sofa of the Year</h1>
                        <h1>x1</h1>
                    </div>
                    <div className='flex flex-row justify-between w-full mb-[18px] text-[#031C32] font-inter font-normal text-[16px]'>
                        <h1>Best Deal Sofa of the Year</h1>
                        <h1>x1</h1>
                    </div>
                    <div className='w-[520px] h-[2px] bg-[#F8F8F8] rounded-[7px] text-center mb-[18px]'></div>
                    <div className='flex flex-row justify-between items-center w-full mb-[18px]'>
                        <h1 className='text-[#8F8F8F] font-inter text-[16px] font-medium'>Payment Time</h1>
                        <h1 className='font-inter text-right text-[16px] font-medium text-[#031C32]'>18-07-2023, 16:44 PM</h1>
                    </div>
                    <div className='flex flex-row justify-between items-center w-full mb-[18px]'>
                        <h1 className='text-[#8F8F8F] font-inter text-[16px] font-medium'>Payment Method</h1>
                        <h1 className='font-inter text-right text-[16px] font-medium text-[#031C32]'>Bank Transfer</h1>
                    </div>
                    <div className='flex flex-row justify-between items-center w-full mb-[18px]'>
                        <h1 className='text-[#8F8F8F] font-inter text-[16px] font-medium'>Ref Number</h1>
                        <h1 className='font-inter text-right text-[16px] font-medium text-[#031C32]'>1644-1807-2023</h1>
                    </div>
                    <div className='w-[520px] h-[2px] bg-[#F8F8F8] rounded-[7px] text-center mb-[18px]'></div>
                    <div className='flex flex-row justify-between items-center w-full mb-[18px]'>
                        <h1 className='text-[#8F8F8F] font-inter text-[16px] font-medium'>Amount</h1>
                        <h1 className='font-inter text-right text-[16px] font-medium text-[#031C32]'>$640,00</h1>
                    </div>
                    <div className='flex flex-row justify-between items-center w-full mb-[18px]'>
                        <h1 className='text-[#8F8F8F] font-inter text-[16px] font-medium'>Fee (2.8%)</h1>
                        <h1 className='font-inter text-right text-[16px] font-medium text-[#031C32]'>$25,00</h1>
                    </div>
                    <div className='flex flex-row justify-between items-center w-full mb-[18px]'>
                        <h1 className='text-[#8F8F8F] font-inter text-[16px] font-medium'>Total</h1>
                        <h1 className='font-inter text-right text-[16px] font-medium text-[#031C32]'>$665,00</h1>
                    </div>
                    <a href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" download="transaction_receipt.pdf">
                        <div className='flex flex-row w-full items-center justify-center gap-[8px] cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <mask id="mask0_528_585" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                                    <rect width="20" height="20" fill="#D9D9D9" />
                                </mask>
                                <g mask="url(#mask0_528_585)">
                                    <path d="M9.99967 12.9791C9.88856 12.9791 9.7844 12.9617 9.68717 12.927C9.58995 12.8923 9.49967 12.8333 9.41634 12.7499L6.41634 9.74992C6.24967 9.58325 6.16981 9.38881 6.17676 9.16659C6.1837 8.94436 6.26356 8.74992 6.41634 8.58325C6.58301 8.41659 6.78092 8.32978 7.01009 8.32284C7.23926 8.31589 7.43717 8.39575 7.60384 8.56242L9.16634 10.1249V4.16659C9.16634 3.93047 9.2462 3.73256 9.40592 3.57284C9.56565 3.41311 9.76356 3.33325 9.99967 3.33325C10.2358 3.33325 10.4337 3.41311 10.5934 3.57284C10.7531 3.73256 10.833 3.93047 10.833 4.16659V10.1249L12.3955 8.56242C12.5622 8.39575 12.7601 8.31589 12.9893 8.32284C13.2184 8.32978 13.4163 8.41659 13.583 8.58325C13.7358 8.74992 13.8156 8.94436 13.8226 9.16659C13.8295 9.38881 13.7497 9.58325 13.583 9.74992L10.583 12.7499C10.4997 12.8333 10.4094 12.8923 10.3122 12.927C10.215 12.9617 10.1108 12.9791 9.99967 12.9791ZM4.99967 16.6666C4.54134 16.6666 4.14898 16.5034 3.82259 16.177C3.4962 15.8506 3.33301 15.4583 3.33301 14.9999V13.3333C3.33301 13.0971 3.41287 12.8992 3.57259 12.7395C3.73231 12.5798 3.93023 12.4999 4.16634 12.4999C4.40245 12.4999 4.60037 12.5798 4.76009 12.7395C4.91981 12.8992 4.99967 13.0971 4.99967 13.3333V14.9999H14.9997V13.3333C14.9997 13.0971 15.0795 12.8992 15.2393 12.7395C15.399 12.5798 15.5969 12.4999 15.833 12.4999C16.0691 12.4999 16.267 12.5798 16.4268 12.7395C16.5865 12.8992 16.6663 13.0971 16.6663 13.3333V14.9999C16.6663 15.4583 16.5031 15.8506 16.1768 16.177C15.8504 16.5034 15.458 16.6666 14.9997 16.6666H4.99967Z" fill="#031C32" />
                                </g>
                            </svg>
                            <h1 className='font-inter text-right text-[16px] font-medium text-[#031C32]'>Get Transaction Receipt</h1>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default PaymentSuccessDialog