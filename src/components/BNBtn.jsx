"use client"
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import 'animate.css';
import { useRouter } from 'next/navigation';


const BNBtn = () => {
 const router =useRouter();

const handleClick = () =>{
    document.getElementById("bn-btn").classList.add("animate__animated", "animate__hinge")
setTimeout(() => {
router.push("/all-books")
}, 1700);
}
    return (
       <button onClick={handleClick} id='bn-btn' className=' btn items-center transition-transform duration-300 ease-in-out hover:scale-110  bg-[#0a627c] text-white'>Browse Now <FaArrowRight /></button>
    );
};

export default BNBtn;