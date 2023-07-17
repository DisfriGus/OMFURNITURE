import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { MdMenu, MdClose, MdSearch, MdCenterFocusWeak, MdOutlineExpandLess, MdOutlineExpandMore } from 'react-icons/md';
import ShopingCart from '../Assets/shoppingCart.svg'
import ShopingCart1 from '../Assets/shoppingCart1.svg'
import Person from '../Assets/Person.svg'
import { useNavigate } from 'react-router-dom'
import LoginDialog from './Auth/LoginDialog';

const Navbar = ({ logo, style, user, signup, inputStyle }) => {

  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [showUploadDialog, setShowUploadDialog] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const handleSubmit = () => {
    navigate('/Products')
  }

  const handleLogout = () => {
    setIsLogin(false);
    localStorage.removeItem('isLogin');
  };

  useEffect(() => {
    const storedLoginStatus = localStorage.getItem('isLogin');
    if (storedLoginStatus === 'true') {
      setIsLogin(true);
    }
  }, []);

  const handleLogin = () => {
    setShowLoginForm(true)
  };

  const handleShowUpload = () => {
    setShowUploadDialog(true);
  };

  const handleCloseUpload = () => {
    setShowUploadDialog(false);
  };


  const handleCloseLogin = () =>{
    setShowLoginForm(false);
  }

  return (
    <div className={`font-inter flex items-center  lg:px-[80px] 2xl:px-[240px] w-full py-3 xl:py-[26px] max-lg:fixed max-lg:w-full z-30 bg-white lg:bg-transparent ${style} ${isLogin ? 'py-0 max-lg:justify-between' : 'justify-between'}`}>
      <NavLink to="/" className={`px-2 ${isLogin ? '' : ''}`}>
        <img className='w-[157px] h-[29px] ' src={logo} alt="" />
      </NavLink>
      <div className={`flex pl-7 gap-[20px] text-[16px] ${user} font-normal max-lg:flex-col max-lg:hidden ${isLogin ? 'hidden' : ''}`} >
        <NavLink to='/Products' className={`flex items-center`}>Category<MdOutlineExpandMore className='text-[24px]'/></NavLink>
        <NavLink to="/Products">Products</NavLink>
        <NavLink to="/Rooms">Rooms</NavLink>
        <NavLink to="/Dormitory">Dormitory</NavLink>
      </div>
      {isLogin ? (
        <div className={`flex justify-between w-full gap-3 font-normal max-lg:hidden ${user} items-center py-[6px] `}>
          <div className='flex'>
            <NavLink to="/" className={`px-2 ${isLogin ? 'hidden' : ''}`}>
              <img className='w-[157px] h-[29px] ' src={logo} alt="" />
            </NavLink>
            <div className={`flex pl-7 gap-[20px] text-[16px] ${user} font-normal max-lg:flex-col max-lg:hidden`} >
              <NavLink to='/Products' className={`flex items-center`}>Category<MdOutlineExpandMore className='text-[24px]'/></NavLink>
              <NavLink to="/Products">Products</NavLink>
              <NavLink to="/Rooms">Rooms</NavLink>
              <NavLink to="/Dormitory">Dormitory</NavLink>
            </div>
          </div>
          <div className='flex gap-9 items-center'>
            <div className={`flex text-[#757575] xl:w-[435px] py-4 px-6 gap-4 items-center bg-[#F6F6F6] rounded-[32px] ${inputStyle}`}>
              <MdSearch className='text-[24px]' />
              <input type="text" className={`outline-none w-[120px] xl:w-[400px] bg-[#F6F6F6] `} />
              <button onClick={handleShowUpload}>
                <MdCenterFocusWeak className='text-[24px]' />
              </button>
            </div>
            <div className={`flex gap-4 items-center`}>
              <NavLink to='/cart' >
                <img className='' src={ShopingCart} alt="" />
              </NavLink>
              <NavLink className={`bg-[#F2F2F2] p-2 rounded-full`}>
                <img onClick={handleLogout} src={Person} alt="" />
              </NavLink>
            </div>
          </div>
        </div>
      ) : (
        <div className={`flex gap-6 font-inter text-semibold max-lg:hidden ${user} items-center `}>
          <button onClick={handleLogin}>Login</button>
          <NavLink className={`py-2 px-6 bg-[#1659E6] rounded-md text-white ${signup}`}>Sign Up</NavLink>
        </div>
      )}
      <div className={`lg:hidden text-black text-[18px] font-medium flex flex-col gap-10 pt-2  absolute top-[68px] duration-200 bg-white h-[2000px] z-20 items-center w-[100%] ${open ? 'translate-x-full' : 'translate-x-0'}`}>
        <NavLink to='/Category'>Category</NavLink>
        <NavLink to="/Products">Products</NavLink>
        <NavLink to="/Rooms">Rooms</NavLink>
        <NavLink to="/Dormitory">Dormitory</NavLink>
        {isLogin ? (
          <div className='flex flex-col gap-4'>
            <span>Welcome, User</span>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div className='flex gap-4'>
            <button onClick={handleLogin}>Login</button>
            <NavLink className={`py-2 px-6 bg-[#1659E6] rounded-md text-white ${signup}`}>Sign Up</NavLink>
          </div>
        )}
      </div>
      <div className='lg:hidden text-[30px]'>
        <button onClick={() => {
          setOpen(!open);
        }}>{open ? <MdMenu /> : <MdClose />}</button>
      </div>
      {showLoginForm && <LoginDialog handleCloseLogin={handleCloseLogin} />}
      {showUploadDialog && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-60"></div>
          <div className="relative sm:max-w-lg w-full p-10 bg-white rounded-xl">
            <button
              className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={() => setShowUploadDialog(false)}
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
            <form className="mt-8 space-y-3" action="#" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 space-y-2">
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                    <div className="h-full w-full text-center flex flex-col items-center justify-center">
                      <div className="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
                        <img
                          className="has-mask h-36 object-center"
                          src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg"
                          alt="freepik image"
                        />
                      </div>
                      <p className="pointer-none text-gray-500">
                        <span className="text-sm">Drag and drop</span> files here <br /> or{' '}
                        <a href="" id="" className="text-blue-600 hover:underline">
                          select a file
                        </a>{' '}
                        from your computer
                      </p>
                    </div>
                    <input type="file" className="hidden" />
                  </label>
                </div>
              </div>
              <p className="text-sm text-gray-300">
                <span>File type: doc, pdf, types of images</span>
              </p>
              <div>
                <button
                  type="submit"
                  className="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4 rounded-full tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
                >
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default Navbar;
