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
      <div className="home h-screen flex flex-col justify-center items-center">
        {!user.UserName ? (
          <div>
            <div className="flex flex-col justify-center items-center">
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
