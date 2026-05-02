import React from 'react';
import data from "../../../../public/data.json"
import Image from 'next/image';
import { FaRegHeart } from 'react-icons/fa';

const detailsPage = async({params}) => {
    const {id}=await params;
    const book = data.find(d=> d.id == id)
  console.log(book);
  
    return (
     <div className='py-3'>
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
        <button className='btn flex mx-auto text-2xl px-10 py-7 bg-[#026b8b] text-white rounded-2xl transition-transform duration-300 ease-in-out hover:scale-110'>Borrow This Book</button>
        <button className='bg-transparent backdrop-blur-2xl shadow-[#1f7ebd] hover:shadow-lg btn items-center btn-outline text-[#177794] rounded-2xl flex mx-auto text-2xl px-9 py-7 my-4'><FaRegHeart /> Add To Whislist</button>
     </div>
    );
};

export default detailsPage;