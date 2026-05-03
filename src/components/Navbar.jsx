"use client"
import React from 'react';
import logo from "../../public/assets/Screenshot 2026-04-29 201818.png"
import Link from 'next/link';
import Image from 'next/image';
import Navlink from './Navlink';


const Navbar = () => {
 
  
    return (
       <div className="navbar backdrop-blur-xl lg:px-30 bg-transparent sticky top-0 z-50 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
      <Navlink  href={"/"}>  <li>Home</li></Navlink>
     <Navlink href={"/all-books"}  ><li> All Books</li></Navlink>
       <Navlink href={"/my-profile"}>  <li>My Profile</li></Navlink>
      </ul>
    </div>
   <Link className='flex items-center' href={"/"}><Image src={logo} width={50} height={50} className='p-2  rounded-full' alt='logo'></Image><h1 className='text-xl text-[#09637E] font-semibold'>BorrowBox</h1></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="flex gap-4 px-1">
     <li><Navlink  href={"/"}>Home</Navlink></li>
    <li> <Navlink href={"/all-books"}>All Books</Navlink></li>
    <li> <Navlink href={"/my-profile"}>My Profile</Navlink></li>
    </ul>
  </div>
  <div className="navbar-end">
    <Image src={"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"} alt='user image' width={35} height={35} className='rounded-full p-1'></Image>
    <Link href={"/login"} className="btn h-9 transition-transform duration-300 ease-in-out hover:scale-110  bg-[#0a627c] text-white">LogOut</Link>
  </div>
</div>
    );
};

export default Navbar;