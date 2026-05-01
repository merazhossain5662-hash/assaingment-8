import Image from 'next/image';
import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const Feedback = () => {
    return (
        <section className='w-10/12 mx-auto space-y-3 py-3 bg-[#f5f8fa]'>
           <h1 className='text-[#0a627c] text-center text-sm'>WHAT READERS SAY</h1>
           <h1 className='text-[#095369] text-center text-3xl font-semibold '>Loved By Our Readers</h1>
           <p className='text-[#0a627c] text-sm text-center'>Here's what our community has to say about BorrowBox</p>
          <div className='w-10/12 mx-auto'>
            <div className="carousel w-full h-70 py-8">
  <div id="slide1" className="carousel-item  relative w-full">
   <div className='bg-white lg:shadow-2xl shadow flex flex-col justify-around gap-3 mx-auto w-125 rounded-3xl px-6 py-4'>
    <span className='flex items-center gap-2 justify-around'>
      <FaQuoteLeft  className='text-2xl font-extrabold text-[#0a627c]'/>
      <p className='text-md'>BorrowBox made it so easy to find and borrow books. The process is smooth and the collection is amazing!</p>
    </span>
  <div className='flex items-center justify-between'>
      <span className='flex gap-3 items-center'>
      <Image src={"https://randomuser.me/api/portraits/women/44.jpg"} width={65} height={65} className='rounded-full' alt='Sarah Johnson'></Image>
     <span>
       <p className='text-lg font-semibold'>Sarah Johnson</p>
       <p className='text-sm text-gray-600'>Teacher</p>
     </span>
    </span>
    <p>⭐⭐⭐⭐⭐ (5.0)</p>
  </div>
   </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
   <div className='bg-white lg:shadow-2xl shadow  flex flex-col justify-around gap-3 mx-auto w-125 rounded-3xl px-6 py-4'>
    <span className='flex items-center gap-2 justify-around'>
      <FaQuoteLeft  className='text-xl font-extrabold text-[#0a627c]'/>
      <p className='text-md'>I love how fast and simple the platform is. I found some great tech books within minutes.</p>
    </span>
  <div className='flex items-center justify-between'>
      <span className='flex gap-3 items-center'>
      <Image src={"https://randomuser.me/api/portraits/men/32.jpg"} width={65} height={65} className='rounded-full' alt='Sarah Johnson'></Image>
     <span>
       <p className='text-lg font-semibold'>David Miller</p>
       <p className='text-sm text-gray-600'>CEO</p>
     </span>
    </span>
    <p>⭐⭐⭐⭐⭐ (4.8)</p>
  </div>
   </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <div className='bg-white lg:shadow-2xl shadow  flex flex-col justify-around gap-3 mx-auto w-125 rounded-3xl px-6 py-4'>
    <span className='flex items-center gap-2 justify-around'>
      <FaQuoteLeft  className='text-xl font-extrabold text-[#0a627c]'/>
      <p className='text-md'>The UI is clean and user-friendly. Borrowing books feels effortless now. Highly recommended!</p>
    </span>
  <div className='flex items-center justify-between'>
      <span className='flex gap-3 items-center'>
      <Image src={"https://randomuser.me/api/portraits/women/68.jpg"} width={65} height={65} className='rounded-full' alt='Sarah Johnson'></Image>
     <span>
       <p className='text-lg font-semibold'>Emily Davis</p>
       <p className='text-sm text-gray-600'>Student</p>
     </span>
    </span>
    <p>⭐⭐⭐⭐⭐ (4.9)</p>
  </div>
   </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <div className='bg-white lg:shadow-2xl shadow  flex flex-col justify-around gap-3 mx-auto w-125 rounded-3xl px-6 py-4'>
    <span className='flex items-center gap-2 justify-around'>
      <FaQuoteLeft  className='text-xl font-extrabold text-[#0a627c]'/>
      <p className='text-md'>A fantastic platform for book lovers. The categories and recommendations are really helpful.</p>
    </span>
  <div className='flex items-center justify-between'>
      <span className='flex gap-3 items-center'>
      <Image src={"https://randomuser.me/api/portraits/men/75.jpg"} width={65} height={65} className='rounded-full' alt='Sarah Johnson'></Image>
     <span>
       <p className='text-lg font-semibold'>Michael Brown</p>
       <p className='text-sm text-gray-600'> </p>
     </span>
    </span>
    <p>⭐⭐⭐⭐☆ (4.7)</p>
  </div>
   </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
        </section>
    );
};

export default Feedback;