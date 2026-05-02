import Link from 'next/link';
import React from 'react';
import { FaGoogle } from 'react-icons/fa';

const loginPage = () => {
    return (
        <div className=' bg-[#f4f9fd]'>
           
  <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card glass  backdrop-blur-3xl border-blur-md border-2 rounded-2xl lg:w-lg md:w-md w-sm shrink-0 shadow-2xl">
      <div className="card-body ">
        <fieldset className="fieldset relative">
          <label className="label text-xl text-black font-medium">Email</label>
          <input type="email" className="input w-full rounded-2xl bg-base-200" placeholder="Email" />
          <label className="label text-xl text-black font-medium">Password</label>
          <input type="password" className="input w-full rounded-2xl bg-base-200" placeholder="Password" />
<p className=' font-light text-sm'>Don’t Have An Account ? <Link href={"/register"} className=' text-[#1c7474] font-medium hover:underline'> Register </Link></p>  
        <button className="btn  bg-[#0a627c] text-white rounded-2xl text-lg font-semibold py-2 my-4">Login</button>
         <p className='absolute mt-64 text-sm lg:ml-57 md:ml-48 ml-40'>OR</p>
      <div className='border-t border-gray-300'>
        <button className="btn  text-[#0a627c] btn-outline items-center gap-2 w-full rounded-2xl text-lg py-4 font-semibold mt-4"><FaGoogle /> Login with Google</button>
      </div>
        </fieldset>
      </div>
    </div>
  </div>
</div>
            </div>
       
    );
};

export default loginPage;