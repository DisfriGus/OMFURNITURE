import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { MdMenu, MdClose } from 'react-icons/md';

const Navbar = ({ logo, style, user, signup }) => {
  const [open, setOpen] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  

  const handleLogout = () => {
    // Tambahkan logika logout di sini
    setIsLogin(false);
    localStorage.removeItem('isLogin'); // Hapus data login dari localStorage
  };

  useEffect(() => {
    // Cek apakah status login tersimpan di localStorage saat komponen di-mount
    const storedLoginStatus = localStorage.getItem('isLogin');
    if (storedLoginStatus === 'true') {
      setIsLogin(true);
    }
  }, []);

  const handleLogin = () => {
    // Tambahkan logika login di sini
    setIsLogin(true);
    localStorage.setItem('isLogin', 'true'); // Simpan status login ke localStorage
  };

  return (
    <div className={`font-inter flex items-center  lg:px-[80px] 2xl:px-[240px] w-full py-3 xl:py-[26px] max-lg:fixed max-lg:w-full z-30 bg-white lg:bg-transparent ${style} ${isLogin ? 'py-0 max-lg:justify-between':'justify-between'}`}>
      <NavLink to="/" className={`px-2 ${isLogin? '': ''}`}>
        <img className='w-[157px] h-[29px] ' src={logo} alt="" />
      </NavLink>
      <div className={`flex pl-7 gap-[20px] text-[16px] ${user} font-normal max-lg:flex-col max-lg:hidden ${isLogin ? 'hidden':'' }`} >
        <NavLink to='/Category'>Category</NavLink>
        <NavLink to="/Products">Products</NavLink>
        <NavLink to="/Rooms">Rooms</NavLink>
        <NavLink to="/Dormitory">Dormitory</NavLink>
      </div>
      {isLogin ? (
        // Tampilan saat sudah login
        <div className={`flex justify-between w-full gap-3 font-normal max-lg:hidden ${user} items-center py-[6px] `}>
          <div className='flex'>
            <NavLink to="/" className={`px-2 ${isLogin? 'hidden': ''}`}>
              <img className='w-[157px] h-[29px] ' src={logo} alt="" />
            </NavLink>
            <div className={`flex pl-7 gap-[20px] text-[16px] ${user} font-normal max-lg:flex-col max-lg:hidden`} >
              <NavLink to='/Category'>Category</NavLink>
              <NavLink to="/Products">Products</NavLink>
              <NavLink to="/Rooms">Rooms</NavLink>
              <NavLink to="/Dormitory">Dormitory</NavLink>
            </div>
          </div>
          <div>
            <input type="text" />
            <span>Welcome, User</span>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      ) : (
        // Tampilan saat belum login
        <div className={`flex gap-3 font-normal max-lg:hidden ${user} items-center`}>
          <button onClick={handleLogin}>Login</button>
          <NavLink className={`py-2 px-6 bg-[#1659E6] rounded-md ${signup}`}>Sign Up</NavLink>
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
        ):(
          <div className='flex gap-4'>
            <button onClick={handleLogin}>Login</button>
            <NavLink className={`py-2 px-6 bg-[#1659E6] rounded-md ${signup}`}>Sign Up</NavLink>
          </div>
        )}
      </div>
      <div className='lg:hidden text-[30px]'>
        <button onClick={() => {
          setOpen(!open);
        }}>{open ? <MdMenu /> : <MdClose />}</button>
      </div>
      
    </div>
  );
};

export default Navbar;
