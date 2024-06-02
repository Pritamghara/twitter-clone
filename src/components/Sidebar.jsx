
"use client"
import React from 'react'
import { FaSquareXTwitter } from "react-icons/fa6";
import  Link  from 'next/link';
import { HiHome,HiDotsHorizontal } from "react-icons/hi";



import { useSession } from 'next-auth/react';

import { signIn, signOut } from 'next-auth/react';
const Sidebar = () => {

  const {data:session}=useSession()

  return (
    <div className='flex flex-col p-3 justify-between h-screen'>
      <div className='flex flex-col gap-3'>


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
       {
        session && (
          <div className='text-gray-700 text-sm flex items-center cursor-pointer p-3 hover:bg-gray-100 rounded-full transition-all duration-200'>
            <img src={session.user.image} alt="user-img" className='h-10 w-10 rounded-full xl:mr-2' />
            <div className='hidden xl:inline'>
              <h4 className='font-bold'>{session.user.name}</h4>
              <p className='text-gray-500'>{session.user.username}</p>
            </div>
            <div>
              <HiDotsHorizontal className=' h-7 xl:ml-8 hidden xl:inline'/>
            </div>
          </div>
        )
       }
    </div>
  )
}

export default Sidebar