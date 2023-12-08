"use client"
import React from 'react'
import Home from './Components/Home/Home'
import { useSelector } from 'react-redux'
const page = () => {
const user=useSelector((state)=>state.User.User)
console.log("USER:",user);
  return (
    <div>
      <Home/>
    </div>
  )
}

export default page