import Image from 'next/image';
import React from 'react';
import girl from "../../public/assets/Gemini_Generated_Image_jrwvrzjrwvrzjrwv.png"
import { GiBookshelf } from 'react-icons/gi';
import { AiOutlineSafetyCertificate } from 'react-icons/ai';
import { MdOutlineBookmarks } from 'react-icons/md';
import { FaArrowRight } from 'react-icons/fa';
import MarqueeContainer from './Marquee';
import BNBtn from './BNBtn';

const Hero = () => {
    return (
        <div>
        <div className='w-10/12  grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 mx-auto'>
            <section className='py-5 pl-10 space-y-12 bg-[#f5f8fa]'>
            <h1 className='text-8xl font-semibold text-[#0a627c]'>Find Your Next Read</h1>
            <p className='text-xl text-[#1c7474]'>Explore thousands of books from various geners and <br /> borrow your favorites instantly.</p>
            <BNBtn></BNBtn>
            <div className='flex items-center gap-4 '>
                <div className='text-center  space-y-2.5 px-2 '>
                    <span className='text-3xl flex justify-center text-[#30bebe]'><GiBookshelf /></span>
                   <p className='font-semibold text-[#20758f]'>Thousands Of Books</p>
                    <p className='font-md text-[#20758f]'>Explore a vast collection</p>
                </div>
                <div className='text-center border-l border-r  space-y-2.5 px-2 border-gray-300'>
                    <span className='text-3xl flex justify-center text-[#30bebe]'><AiOutlineSafetyCertificate /></span>
                   <p className='font-semibold text-[#20758f]'>Secure & Safe</p>
                    <p className='font-md text-[#20758f]'>Your data is protected</p>
                </div>
                <div className='text-center   space-y-2.5 px-2 '>
                    <span className='text-3xl flex justify-center text-[#30bebe]'><MdOutlineBookmarks /></span>
                    <p className='font-semibold text-[#20758f]'>Easy Boreowing</p>
                    <p className='font-md text-[#20758f]'>Borrow in just a few clicks</p>
                </div>
            </div>
            </section>
            <section>
           <Image className='w-full' src={girl} width={550} height={550} alt='banner image' />
            </section>
        </div>
        <MarqueeContainer></MarqueeContainer>
        </div>
    );
};

export default Hero;