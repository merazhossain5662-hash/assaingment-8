"use client"
import React from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { toast, Zoom } from 'react-toastify';

const WishlistBtn = () => {
const handleWish = ()=>{
      toast(' Book Added To Wishlist Successfully!', {
position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Zoom,
});
}

    return (
        <div>
            <button onClick={handleWish} className='bg-transparent backdrop-blur-2xl shadow-[#1f7ebd] hover:shadow-lg btn items-center btn-outline text-[#177794] rounded-2xl flex mx-auto text-2xl px-9 py-7 my-4'><FaRegHeart /> Add To Wishlist</button>
        </div>
    );
};

export default WishlistBtn;