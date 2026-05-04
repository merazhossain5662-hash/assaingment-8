"use client"
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { HiMiniPencilSquare } from 'react-icons/hi2';

const UpdetBtn = () => {
    
     const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

  const handleUpdetSubmit =async (datal)=>{
    const {photo, name}=datal
await authClient.updateUser({
    image: photo,
    name: name,
})
document.getElementById("my_modal_1").close();
}

    return (
        <div className='absolute mt-3 lg:ml-79 md:ml-75 ml-60'>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn text-xs items-center flex-row" onClick={()=>document.getElementById('my_modal_1').showModal()}><HiMiniPencilSquare /><span>Update </span><span>Profile</span></button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
  <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">Update Your Info</legend>

  

   <label className="label text-xl text-black font-medium">Name</label>
          <input type="name" name='text' {...register("name",  { required: true })} className="input w-full rounded-2xl bg-base-200" placeholder="Name" />

          <label className="label text-lg text-black font-medium">Photo-url(link)</label>
  <input type="url" name='photo' {...register("photo",  { required: true })} className="input w-full rounded-2xl bg-base-200" placeholder="Enter your profile Image" />
</fieldset>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
        <button onClick={handleSubmit(handleUpdetSubmit)} className="btn bg-accent ml-3">Save</button>
      </form>
    </div>
  </div>
</dialog>
        </div>
    );
};

export default UpdetBtn;