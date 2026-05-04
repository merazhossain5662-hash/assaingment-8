"use client"
import UpdetBtn from '@/components/updetBtn';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { IoLogOutOutline } from 'react-icons/io5';

const profilePage = () => {
 const router =useRouter();
const handleLogoutBtn = async ()=>{
   await authClient.signOut()
   router.push("/login")
}

     const { data: session } = authClient.useSession();
        const user =session?.user;
        console.log(user);
        
    return (
        <div className='bg-[#f4f9fd] py-9'>
           <div className="animate__animated animate__bounceInRight card space-y-4 relative glass rounded-2xl backdrop-blur-3xl shadow-2xl lg:w-md md:w-md w-sm mx-auto">
               <UpdetBtn ></UpdetBtn>
<div className="avatar mx-auto mt-5">
  <div className="ring-primary ring-offset-base-100 w-35 rounded-full ring-2 ring-offset-2">
      <Image src={user?.image} alt={user?.name} width={200} height={200}></Image>

  </div>
</div>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{user?.name}</h2>
    <p className='font-semibold'>{user?.email}</p>
    <p className='text-sm text-gray-500'>last Updeted : {user?.updatedAt.getDate()}/{user?.updatedAt.getMonth()}/{user?.updatedAt.getFullYear()} -- At {user?.updatedAt.getHours()} O'clock</p>
    <div className="card-actions">
  <button onClick={handleLogoutBtn} className='bg-transparent backdrop-blur-2xl shadow-red-100 hover:shadow-xl btn items-center btn-outline text-red-500'><IoLogOutOutline />Log Out
  </button>
    </div>
  </div>
</div>
        </div>
    );
};

export default profilePage;