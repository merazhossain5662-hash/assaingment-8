"use client"
import React from 'react';
import { useForm } from 'react-hook-form';

const registerPage = () => {
 const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

const handleRegisterSubmit = (data)=>{
 console.log(data);
 
}

    return (
        <div className=' bg-[#f4f9fd] py-14'>
           <form onSubmit={handleSubmit(handleRegisterSubmit)}>
             <fieldset className="animate__animated animate__fadeInDownBig fieldset mx-auto space-y-3 galss shadow-2xl backdrop-blur-3xl rounded-3xl rounded-box lg:w-lg md:w-md w-sm py-6 px-4">
  <legend className="fieldset-legend text-4xl text-center font-bold">Register</legend>

  <label className="label text-lg text-black font-medium">Name</label>
  <input type="text" name='name' {...register("name",  { required: true })}  className="input w-full rounded-2xl bg-base-200" placeholder="Enter your name" />
  {errors.name && <span className="text-red-700 text-md">This field is required.</span>}

  <label className="label text-lg text-black font-medium">Photo-url(link)</label>
  <input type="url" name='photo' {...register("photo",  { required: true })} className="input w-full rounded-2xl bg-base-200" placeholder="Enter your profile Image" />
  {errors.photo && <span className="text-red-700 text-md">This field is required.</span>}
  
  <label className="label text-lg text-black font-medium">Email</label>
  <input type="email" name='email' {...register("email",  { required: true })} className="input w-full rounded-2xl bg-base-200" placeholder="Enter yor email address" />
  {errors.email && <span className="text-red-700 text-md">This field is required.</span>}

  <label className="label text-lg text-black font-medium">Password</label>
  <input type="password" name='password' {...register("password",  { required: true })} className="input w-full rounded-2xl bg-base-200" placeholder="Add your password" />
{errors.password && <span className="text-red-700 text-md">This field is required.</span>}

  <div>
<p className='flex items-center text-sm gap-1'><input  type="checkbox" {...register("checkbox",  { required: true })} name="checkbox"   />Accept <span className='font-extrabold'>Term & Conditions</span></p>
{errors.checkbox && <span className="text-red-700 text-md">Without Accept This You Can Not Registar.</span>}
 </div>

  <button type='submit' className="btn btn-neutral rounded-2xl text-xl mt-4">Login</button>
</fieldset>
           </form>
        </div>
    );
};

export default registerPage;