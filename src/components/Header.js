import React from 'react';

import Logo from '../assets/img/logo.png'
import Nav from './Nav'
import AccountBtns from './AccountBtns'

import { CgMenuRight } from "react-icons/cg";
import { Link } from 'react-router-dom';

const Header = ({setNavMobile}) => {
  return <div className='py-[0px] mb-5 lg:pt-[20px] sm:pt-[25px]'>
    <div className="container mx-auto  flex items-center justify-between ">
      <Link to='#'>
        <img src={Logo} alt="" className='h-15 w-24' />
      </Link>
      
      <div className='hidden lg:flex gap-x-[55px]'>
        <Nav/>
        <AccountBtns/>
      </div>
      <div>

      </div>
      <div onClick={()=>setNavMobile(true)} className='lg:hidden cursor-pointer'>
        <CgMenuRight className='text-2xl'/>
      </div>
    </div>
  </div>;
};

export default Header;
