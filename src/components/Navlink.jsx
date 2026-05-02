import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navlink = ({href, children}) => {
     const pathName =usePathname();     
     const isActive= href === pathName;
    return (
        <div className='animate__animated animate__zoomIn'>
            <Link className={`${isActive ? "text-[#0d4b5e] border-b-2 backdrop-blur-lg rounded-b-sm px-1 border-[#186a83] bg-[#e2f4f8]" : "" } hover:font-bold hover:text-[#0d4b5e] py-0.5`} href={href} >{children}</Link>
        </div>
    );
};

export default Navlink;