import React from 'react'
import io from 'socket.io-client'
const endpoint="http://localhost:5000"
const socket = io(endpoint, { transports: ["websocket"] });
const page = () => {
 socket.on("connection",()=>{
  console.log("connect");
 })
  return (
    <div>page</div>
  )
}

export default page