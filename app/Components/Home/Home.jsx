import React from "react";
import Navbar from "../Navbar/Navbar";
import Chat from "../Chatbox/Chat";
import { useSelector } from "react-redux";
import Link from "next/link";
const Home = () => {
  const user = useSelector((state) => state.User.User);
  return (
    <div>
      <Navbar />
      <div className="home flex flex-row justify-center items-center h-screen sm:flex sm:flex-col sm:items-center sm:justify-center  lg:flex lg:flex-col lg:justify-center lg:items-center xl:flex xl:flex-col xl:justify-center xl:items-center 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center  md:flex md:flex-col md:justify-center md:items-center">
        {!user.UserName ? (
          <div>
            <div className=" h-screen flex flex-col justify-center items-center">
              <h1 className=" text-2xl">
                Please Login First or Create Account
              </h1>
              <Link
                href="/Login"
                className="bg-blue-700 text-white px-5 py-2 mt-3 rounded-lg"
              >
                Login
              </Link>
              <p>or</p>
              <Link
                href="/Signup"
                className="bg-blue-700 text-white px-5 py-2 mt-3 rounded-lg"
              >
                Signup
              </Link>
            </div>
          </div>
        ) : (
          <Chat />
        )}
      </div>
    </div>
  );
};

export default Home;
