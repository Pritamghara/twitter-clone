
"use client"
import React from 'react'
import { FaSquareXTwitter } from "react-icons/fa6";
import  Link  from 'next/link';
import { HiHome } from "react-icons/hi";

import { useSession } from 'next-auth/react';

import { signIn, signOut } from 'next-auth/react';
const Sidebar = () => {

  const {data:session}=useSession()
  return (
    <div className='flex flex-col gap-5 p-3 ml-5'>

        <Link href='/'>
            <FaSquareXTwitter className='w-20 h-20 cursor-pointer p-3 hover:bg-gray-100 rounded-full transition-200'/>

        </Link>
           <Link href='/' className='flex items-center p-3 hover:bg-gray-100 rounded-full transition-all duration-200 gap-2 w-fit'>

           <HiHome className='w-12 h-12' />
           <span className='font-bold hidden xl:inline'>Home</span>
           
           
           </Link> 
           {session?(<button onClick={()=>signOut()} className='bg-blue-400 text-white  rounded-full  hover:brightness-95 transition-all duration-200 w-60 h-9 shadow-md hidden xl:inline font:semibold'>
              Sign Out
           </button>

           ):(
            <button onClick={()=>signIn()} className='bg-blue-400 text-white  rounded-full  hover:brightness-95 transition-all duration-200 w-60 h-9 shadow-md hidden xl:inline font:semibold'>
              Sign In
           </button>

           )}
        
    </div>
  )
}

export default Sidebar