import React from 'react';
import data from "../../public/data.json"
import { FaArrowRight, FaStar } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const SelectedBooks = () => {
 const selectedBooksData=data.slice(0, 4)

    return (
        <div className='w-10/12 py-4 mx-auto my-6 bg-[#f5f8fa] space-y-4'>
            <h1 className='text-center text-2xl font-bold text-[#0a627c]'>Handpicked Just For You</h1>
            <p className='mb-2 text-center font-semibold text-gray-600'>Check out some of the most popular books borrowed by our users.</p>
           <div className='grid lg:grid-cols-4 my-7  md:grid-cols-2 sm:grid-cols-1 gap-5'>
             {
                selectedBooksData.map((book)=>{
                     return <div key={book.id}>

                        <div className="card transition-transform duration-300 ease-in-out hover:scale-3d bg-base-100 w-full rounded-2xl shadow-lg hover:shadow-2xl">
  <figure className="px-3 relative w-full aspect-square bg-base-200 pt-7">
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
                })
            }
           </div>

          <span className='flex justify-center'><Link href={"/all-books"}><button className='bg-transparent backdrop-blur-2xl shadow-[#1f7ebd] hover:shadow-2xl btn items-center btn-outline text-[#177794]'>View All Books <FaArrowRight />
</button></Link> </span>
        </div>
    );
};

export default SelectedBooks;