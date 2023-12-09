import React, { useEffect, useState } from 'react'
import { IoMdCall,IoIosVideocam  } from "react-icons/io";
import { IoSend } from "react-icons/io5";
import SocketIo, { Socket } from 'socket.io-client'
import "./Style.css"
import { useSelector } from 'react-redux';
const endpoint='http://localhost:5000';
let io;
const Chat = () => {
  const [message, setmessage] = useState("")
  const [messages, setmessages] = useState([])
    const User=useSelector((state)=>state.User.User)
    const send=()=>{
 io.emit("message",{message})
 setmessage("")
       }
    useEffect(() => {
       io=SocketIo(endpoint,{transports:["websocket"]})
      io.on("connect",()=>{
        console.log("Connected");
      })
      io.emit("joined",{User})
      io.emit("disconnected")
    return  ()=>{
 
      
      io.off()
    }
    }, [])
   
    
  return (
    <div>
                  
<div className='chat-box  bg-gray-50 relative'>
{/* top */}
<div className='top flex flex-row justify-between items-center  text-white px-5 py-4 '>
  <h1>{User.UserName}</h1>
  <div className='flex flex-row'>
   < IoMdCall className='mx-3' />
   <IoIosVideocam className='mx-3'/>
  </div>
</div>
{/* center */}
{/* bottom  */}
<div className='w-full absolute bottom-0 flex flex-row h-12 '>
  <input type="text" value={message} onChange={(e)=>{setmessage(e.target.value)}} placeholder=' Massage' className=' w-full outline-none border-none bg-gray-200 px-5' />
  <button onClick={send} className='w-20 btn flex flex-col justify-center items-center'><IoSend className='icon' /></button>
</div>
</div>
    </div>
  )
}

export default Chat