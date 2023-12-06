"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import { RiChatSmile3Line } from "react-icons/ri";
const Navbar = () => {
   const [user, setuser] = useState("salaman ilyas")
   const [link,setLink]=useState("/")
   const pathname=usePathname()
   console.log(pathname==="/" ? "hello world":"not");
   const logouthandler=()=>{
   if(user){
    setLink("/Login")
    setuser(null)


   }
   }
  return (
    <div className='bg-blue-400 text-white'>
        <h1 className='flex flex-row justify-center items-center text-3xl py-4'> <RiChatSmile3Line/> <span> me Chat app</span> </h1>
        <div className='flex flex-row justify-center items-center pb-2 cursor-pointer hover:underline'>
            <p className='mx-5'>{user}</p>
            <Link href={link}   onClick={logouthandler}>Log out</Link>
        </div>
    </div>
  )
}

export default Navbar