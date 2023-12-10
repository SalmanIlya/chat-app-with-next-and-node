import React from "react";

const ChatBox = ({ user, massage, classs }) => {
  if (classs === "Right") {
    return (
      <div className="flex flex-col  justify-end items-end">
        <div className=" float-right text-base text-black bg-blue-200 w-auto p-5 m-5 rounded-b-full rounded-tl-full ">
          <p className="">
            {user} : {massage.message}
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col  justify-end items-start">
        <div className="float-left text-base text-white bg-blue-500 w-auto p-5 m-5 rounded-b-3xl rounded-r-2xl">
          <p>
            {user} : {massage.message}
          </p>
        </div>
      </div>
    );
  }
};

export default ChatBox;
