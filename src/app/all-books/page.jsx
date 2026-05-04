"use client"
import React, { useState } from 'react';
import data from  "../../../public/data.json"
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import Link from 'next/link';
import 'animate.css';

const allBooksPage = () => {
    const [cetagoryType, setCetagoryType]=useState("all");
    const [searchedTitle, setSearchedTitle ]=useState()
     const handleSearch=(e)=>{
      e.preventDefault();
      const searched =e.target.search.value;
     setSearchedTitle(searched);
    }
    const cetagoryBtns =[];
      {
                data.map((item)=>{
                 if(cetagoryBtns.includes(item.category)){
                  return
                 }else{
                    cetagoryBtns.push(item.category)
                 }
                })
            }
            
    return (
      
      <div className="drawer  ">
        <div className='animate__animated animate__slideInDown lg:w-10/12 lg:mx-auto'>
          <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
          
           <div className='flex items-center justify-between my-2'>
            <h1 className=' text-xl font-bold'>{cetagoryType.toUpperCase()} BOOKS</h1>
            <span>
               <form onSubmit={handleSearch}>

                 <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" name='search' required placeholder="Search Book Titles" />
</label>
               </form>
            </span>
           </div>
            <div className="drawer-content w-full p-4">
                <label htmlFor="my-drawer-1" className="btn  drawer-button backdrop-blur-2xl shadow-[#6ea6cc] px-7 hover:shadow-md hover:text-[#05767a]">Filter Books</label>
          

            <div className=' grid lg:grid-cols-4 my-7 md:grid-cols-2 grid-cols-1 gap-5'>
                        {
                           data.map((book)=>{
                           if(searchedTitle){
                              if(book.title.toLocaleLowerCase().includes(searchedTitle.toLocaleLowerCase())){
                              return <div className='animate__animated animate__backInUp' key={book.id}>
           
                                   <div className=" card transition-transform duration-300 ease-in-out hover:scale-95 bg-base-100 w-full rounded-2xl shadow-lg hover:shadow-2xl">
             <figure className="px-3 relative w-full aspect-square bg-base-300 pt-7">
               <Image src={book?.image_url} width={250} height={250} alt={book.title}  className='object-cover h-full'></Image>
             </figure>
             <div className="card-body items-center  text-center">
               <h2 className="card-title text-xl font-bold">{book.title}</h2>
               <p className='text-gray-500'>{book.author}</p>
               <span className='flex items-center gap-0.5'><FaStar className='text-yellow-500'></FaStar><p>{book.rate}</p></span>
               <div className="card-actions">
                <Link href={`/bookDetails/${book.id}`}><button className="btn bg-[#177794] w-50 rounded-2xl text-white">View details</button></Link>
               </div>
             </div>
           </div>
                                </div>
                            }else{
                              return null
                            }
                           }
                            else if(cetagoryType.toLocaleLowerCase() === book.category.toLocaleLowerCase() || cetagoryType === "all"){
                                return <div className='animate__animated animate__fadeIn' key={book.id}>
           
                                   <div className="card transition-transform duration-300 ease-in-out hover:scale-95 bg-base-100 w-full rounded-2xl shadow-lg hover:shadow-2xl">
             <figure className="px-3 relative w-full aspect-square bg-base-300 pt-7">
               <Image src={book?.image_url} width={250} height={250} alt={book.title}  className='object-cover h-full'></Image>
             </figure>
             <div className="card-body items-center  text-center">
               <h2 className="card-title text-xl font-bold">{book.title}</h2>
               <p className='text-gray-500'>{book.author}</p>
               <span className='flex items-center gap-0.5'><FaStar className='text-yellow-500'></FaStar><p>{book.rate}</p></span>
               <div className="card-actions">
                 <Link href={`/bookDetails/${book.id}`}><button className="btn bg-[#177794] w-50 rounded-2xl text-white">View details</button></Link>
               </div>
             </div>
           </div>
                                </div>}
                           })
                       }
                                  </div>
                                  </div>
                                   <div className="drawer-side z-40">
                                    <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>
                                    <ul className="menu min-h-full w-64 p-4 bg-base-200 flex  gap-3 flex-col">
                                      <h1 className='text-lg font-bold '>Select Cetagory</h1>
                                      <li onClick={()=> {setCetagoryType("all"); document.getElementById("my-drawer-1").checked = false}} className='bg-transparent backdrop-blur-2xl shadow-[#6ea6cc] px-7 hover:shadow-md btn items-center btn-outline text-[#177794]'>ALL</li>
                                        {
cetagoryBtns.map((c, index)=>{
  return <li onClick={()=> {setCetagoryType(c); document.getElementById("my-drawer-1").checked = false}} className='bg-transparent backdrop-blur-2xl shadow-[#6ea6cc] px-7 hover:shadow-md btn items-center btn-outline text-[#177794]' key={index}>{c}</li>
            })
          }
                                    </ul>

                                   </div>
      
        </div>
        </div>
        
    );
};

export default allBooksPage;