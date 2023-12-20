import React, { useEffect, useState } from "react";
import { IoSend } from "react-icons/io5";
import SocketIo from "socket.io-client";
import "./Style.css";
import { useSelector } from "react-redux";
import ChatBox from "./ChatBox";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToBottom from "react-scroll-to-bottom";
const endpoint = "http://localhost:5000";
let Socket;

const Chat = () => {
  const [message, setmessage] = useState("");
  const [messages, setmessages] = useState([]);
  const [id, setid] = useState("");

  const User = useSelector((state) => state.User.User);

  useEffect(() => {
    Socket = SocketIo(endpoint, { transports: ["websocket"] });
    Socket.on("connect", () => {
      toast.success("Connected");
      setid(Socket.id);
    });
    Socket.emit("joined", { User });

    Socket.on("wellcome", (data) => {
      toast.success(`${data.user} : ${data.message}`);
    });
    Socket.on("userJoin", (data) => {
      toast.success(`${data.user} : ${data.message}`);
    });
    Socket.on("Leave", (data) => {
      toast.info(`${data.user} : ${data.message}`);
    });

    return () => {
      Socket.emit("disconnected");
      Socket.off();
    };
  }, []);
  const send = () => {
    Socket.emit("message", { id, message });
    setmessage("");
  };
  useEffect(() => {
    Socket.on("sendmessage", (data) => {
      setmessages((oldmassages) => [...oldmassages, data]);

      return () => {
        Socket.off();
      };
    });
  }, []);

  return (
    <div>
      <div className="chat-box  bg-gray-50 ">
        <ToastContainer />

        {/* top */}
        <div className="top flex flex-row justify-between items-center  text-white px-5 py-4 ">
          <h1>{User.UserName}</h1>
          <div></div>
        </div>
        {/* center */}
        {messages.length === 0 ? (
          <div className="chatbox  flex flex-row justify-center items-center text-4xl text-gray-400">
            <h1 className="text-center">
              hi <span>😊</span> WellCome <br /> to the chat
            </h1>
          </div>
        ) : (
          <ScrollToBottom className="chatbox box ">
            {messages.map((msg, userid) => {
              return (
                <ChatBox
                  key={msg.id}
                  user={msg.id === id ? "You" : msg.user}
                  massage={msg}
                  id={userid}
                  classs={msg.id === id ? "Right" : "Left"}
                />
              );
            })}
          </ScrollToBottom>
        )}

        {/* bottom  */}
        <div className="w-full  flex flex-row h-12  bottom ">
          <input
            type="text"
            value={message}
            onChange={(e) => {
              setmessage(e.target.value);
            }}
            placeholder=" Massage"
            className=" w-full outline-none border-none bg-gray-200 px-5"
          />
          <button
            onClick={send}
            className="w-20 btn flex flex-col justify-center items-center"
          >
            <IoSend className="icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
