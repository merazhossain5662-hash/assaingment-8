"use client"
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import 'animate.css';


const BNBtn = () => {

const handleClick = () =>{
    document.getElementById("bn-btn").classList.add("animate__animated", "animate__hinge")
}
    return (
       <button onClick={handleClick} id='bn-btn' className=' btn items-center transition-transform duration-300 ease-in-out hover:scale-110  bg-[#0a627c] text-white'>Browse Now <FaArrowRight /></button>
    );
};

export default BNBtn;