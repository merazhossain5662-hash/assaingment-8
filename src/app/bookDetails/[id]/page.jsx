import data from "../../../../public/data.json"
import React from 'react';
import Image from 'next/image';
import { FaRegHeart } from 'react-icons/fa';
import 'animate.css';
import { authClient } from '@/lib/auth-client';
import { headers } from 'next/headers';
import { auth } from '@/lib/auth';
import BRBtn from "@/components/BRBtn";
import WishlistBtn from "@/components/WishlistBtn";


const detailsPage = async({params}) => {
    const {id}=await params;
    const book = data.find(d=> d.id == id)
  console.log(book);
  

    return (
     <div className='animate__animated animate__zoomIn py-3'>
           <div className='w-10/12 py-8 items-center   grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 mx-auto'>
           <section>
            <div className="hover-3d ">
  {/* content */}
  <figure className="max-w-100 lg:ml-100 border shadow-2xl rounded-2xl">
  <Image src={book?.image_url} alt={book.title} width={300} height={300}></Image>
  </figure>
  {/* 8 empty divs needed for the 3D effect */}
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
           </section>
           <section className='space-y-4'>
           <span className='space-y-3 py-2'>
             <h1 className='text-5xl font-semibold'>{book.title}</h1>
            <h1 className='text-2xl'>{book.author}</h1>
           </span>
            <p>⭐⭐⭐⭐⭐({book.rate})</p>
            <p className='flex items-center gap-6 '><span className='font-medium'>Available Quantity:</span>{book.available_quantity}pcs</p>
            <p className='flex items-center gap-6 '><span className='font-medium'>Cetagory:</span>{book.category}</p>
            <h1 className='text-3xl font-semibold '>About the book</h1>
            <p>{book.description}</p>
           </section>
        </div>
        <BRBtn></BRBtn>
        <WishlistBtn></WishlistBtn>
     </div>
    );
};

export default detailsPage;