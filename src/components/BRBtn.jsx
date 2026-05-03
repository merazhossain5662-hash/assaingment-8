"use client"
import { authClient } from '@/lib/auth-client';
import React from 'react';

const BRBtn = () => {
    const { data: session } = authClient.useSession();
    const user =session?.user;
    const hanndleBorrowBtn = async()=>{
        if(user){
      alert("love you")
        }else{
          alert("fuck you")
        }
      }
    return (
        <div>
            <button onClick={hanndleBorrowBtn} className='btn flex mx-auto text-2xl px-10 py-7 bg-[#026b8b] text-white rounded-2xl transition-transform duration-300 ease-in-out hover:scale-110'>Borrow This Book</button>
        </div>
    );
};
export default BRBtn;
