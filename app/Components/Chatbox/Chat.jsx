import React, { useEffect } from 'react'
import { IoMdCall,IoIosVideocam  } from "react-icons/io";
import { IoSend } from "react-icons/io5";
import SocketIo from 'socket.io-client'
import "./Style.css"
import { useSelector } from 'react-redux';
const endpoint='http://localhost:5000'
const Chat = () => {
    const User=useSelector((state)=>state.User.User)
    const io=SocketIo(endpoint,{transports:["websocket"]})

    useEffect(() => {
      io.on("connect",()=>{
        console.log("Connected");
      })
      io.emit("joined",{User})
    
    
    }, [])
    
  return (
    <div>
                  
<div className='chat-box  bg-gray-50 relative'>
{/* top */}
<div className='top flex flex-row justify-between items-center  text-white px-5 py-4 '>
  <h1>name</h1>
  <div className='flex flex-row'>
   < IoMdCall className='mx-3' />
   <IoIosVideocam className='mx-3'/>
  </div>
</div>
{/* center */}
{/* bottom  */}
<div className='w-full absolute bottom-0 flex flex-row h-12 '>
  <input type="text" placeholder=' Massage' className=' w-full outline-none border-none bg-gray-200 px-5' />
  <button className='w-20 btn flex flex-col justify-center items-center'><IoSend className='icon' /></button>
</div>
</div>
    </div>
  )
}

export default Chat