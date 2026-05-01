import Image from 'next/image';
import React from 'react';
import img from "../../public/assets/Gemini_Generated_Image_a38ulxa38ulxa38u.png"
import { GrRadialSelected } from 'react-icons/gr';

const Featurs = () => {
    return (
        <div className='w-10/12 shadow-xl  rounded-2xl shadow-[#acd9f7] bg-[#ffff] grid lg:grid-cols-2 grid-cols-1 mx-auto'>
            
        <section>
            <Image src={img} alt='img' className='w-6xl object-fill h-130' width={200} height={200}></Image>
        </section>
         <section className='py-10 rounded-xl  space-y-12 bg-[#ffff]'>
                <h1 className='text-4xl font-semibold text-center'>What Features You'll Get?</h1>
                <p className='pl-5 text-lg text-gray-500 font-medium'>Explore a smarter way to read and borrow books online. BorrowBox gives you access to a wide collection of books with a fast, secure, and user-friendly experience.</p>
                <ul className='px-7 space-y-3'>
                    <li className='flex items-center gap-2'><GrRadialSelected  className='text-green-600' />Access thousands of books across multiple categories</li>
                    <li className='flex items-center gap-2'><GrRadialSelected  className='text-green-600'/>Borrow books instantly with just a few clicks</li>
                    <li className='flex items-center gap-2'><GrRadialSelected  className='text-green-600'/>Secure authentication and protected user data</li>
                    <li className='flex items-center gap-2'><GrRadialSelected  className='text-green-600'/>Save your favorite books for later reading</li>
                </ul>
             </section>
        </div>
    );
};

export default Featurs;