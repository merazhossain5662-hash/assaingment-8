"use client"
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { toast, Zoom } from 'react-toastify';

const BRBtn = () => {
    const { data: session } = authClient.useSession();
    const user =session?.user;
    const hanndleBorrowBtn = async()=>{
     
        toast.success(' Book Borrowed Successfully!', {
position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Zoom,
});
      }
    return (
        <div>
            <button onClick={hanndleBorrowBtn} className='btn flex mx-auto text-2xl px-10 py-7 bg-[#026b8b] text-white rounded-2xl transition-transform duration-300 ease-in-out hover:scale-110'>Borrow This Book</button>
        </div>
    );
};
export default BRBtn;
