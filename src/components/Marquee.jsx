import React from 'react';
import Marquee from "react-fast-marquee";
import data from "../../public/data.json"


const MarqueeContainer = () => {
    const books=data.slice(8, 20)
    return (
       <div className='flex justify-between w-10/12 items-center bg-[#0d4b5e] px-2 py-2 shadow-lg container mx-auto'>
             <button className="btn border-none font-extrabold bg-[#d9eef0] rounded-lg text-[#0d4b5e] ">New Arrivals</button>
            <Marquee pauseOnHover>
             {
                books.map((item)=>{
                   return <p className='mx-2 border-l border-white px-3 text-white' key={item.id}>{item.title}</p>
                })
             }
            </Marquee>
        </div>
    );
};

export default MarqueeContainer;