import React, { useState, useEffect } from 'react'
import sofa from '../../Assets/sofa.png'




const CartItem = ({ data }) => {

    const [counter, setCounter] = useState(data.quantity || 1)

    console.log(data);

    const slidePrice = (price) => {
        const extractedNumber = price.replace(/[^0-9,]/g, ''); // Remove all non-digit and non-comma characters
        return extractedNumber;
    };

    const handleDelete = () => {
        const localStorageData = JSON.parse(localStorage.getItem('cartData')) || [];
        const updatedData = localStorageData.filter(item => item.id !== data.id);
        localStorage.setItem('cartData', JSON.stringify(updatedData));
        window.location.reload();
    };

    const handleIncreaseQuantity = () => {
        const localStorageData = JSON.parse(localStorage.getItem('cartData')) || [];
        const updatedData = localStorageData.map((item) => {
            if (item.id === data.id) {
                item.quantity = (item.quantity || 0) + 1;
            }
            return item;
        });
        localStorage.setItem('cartData', JSON.stringify(updatedData));
        setCounter((prevCounter) => prevCounter + 1);
    };


    const handleDecreaseQuantity = () => {
        const localStorageData = JSON.parse(localStorage.getItem('cartData')) || [];
        const updatedData = localStorageData.map((item) => {
          if (item.id === data.id) {
            if ((item.quantity || 0) > 1) {
              item.quantity = (item.quantity || 0) - 1;
            }
          }
          return item;
        });
      
        if (counter > 1) {
          localStorage.setItem('cartData', JSON.stringify(updatedData));
          setCounter((prevCounter) => prevCounter - 1);
        } 

      };
      

    const Button = () => {
        return (
            <button className='flex flex-row w-[128px] h-[48px] gap-4 justify-between items-center bg-[#F2F2F2] px-[18px] py=[12px] rounded-[24px]'>
                <div onClick={handleDecreaseQuantity}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <mask id="mask0_201_588" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                            <rect width="24" height="24" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_201_588)">
                            <path d="M5 13V11H19V13H5Z" fill="#757575" />
                        </g>
                    </svg>
                </div>
                <div className='font-bold'>
                    {counter}
                </div>
                <div onClick={handleIncreaseQuantity}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <mask id="mask0_201_592" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                            <rect width="24" height="24" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_201_592)">
                            <path d="M11 13H5V11H11V5H13V11H19V13H13V19H11V13Z" fill="#031C32" />
                        </g>
                    </svg>
                </div>
            </button>
        )
    }

    return (
        <div className='flex flex-row justify-between pl-[18px] py-[24px] col-span-3'>
            <div className='left flex flex-row items-start justify-start gap-4'>
                <input className='accent-[#1659E6] w-6 h-6 rounded-lg' type="checkbox"></input>
                <img className='w-[108px] rounded-[8px]' src={data.image} alt="" />
                <div className='flex flex-col'>
                    <h1 className='font-inter text-[#031C32] text-lg font-medium'>{data.title}</h1>
                    <h1 className='font-satoshi text-[22px] font-bold'><span className='text-[#1659E6]'>$</span> {slidePrice(data.price)}</h1>
                    <p className='font-inter text-sm text-[#757575] font-normal'>Package weight: 25.01 kg</p>
                    <p className='font-inter text-sm text-[#757575] font-normal'>Total package weight: 25.01 kg</p>
                </div>
            </div>
            <div className='right flex flex-row gap-2 h-fit items-center'>
                <svg className='cursor-pointer' onClick={handleDelete} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <mask id="mask0_206_653" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                        <rect width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_206_653)">
                        <path d="M7 21C6.45 21 5.97917 20.8042 5.5875 20.4125C5.19583 20.0208 5 19.55 5 19V6C4.71667 6 4.47917 5.90417 4.2875 5.7125C4.09583 5.52083 4 5.28333 4 5C4 4.71667 4.09583 4.47917 4.2875 4.2875C4.47917 4.09583 4.71667 4 5 4H9C9 3.71667 9.09583 3.47917 9.2875 3.2875C9.47917 3.09583 9.71667 3 10 3H14C14.2833 3 14.5208 3.09583 14.7125 3.2875C14.9042 3.47917 15 3.71667 15 4H19C19.2833 4 19.5208 4.09583 19.7125 4.2875C19.9042 4.47917 20 4.71667 20 5C20 5.28333 19.9042 5.52083 19.7125 5.7125C19.5208 5.90417 19.2833 6 19 6V19C19 19.55 18.8042 20.0208 18.4125 20.4125C18.0208 20.8042 17.55 21 17 21H7ZM17 6H7V19H17V6ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z" fill="#757575" />
                    </g>
                </svg>
                <Button />
            </div>
        </div>

    )
}

export default CartItem