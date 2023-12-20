"use client";
import Link from "next/link";
import React from "react";
import { RiChatSmile3Line } from "react-icons/ri";
import "./Style.css";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../Store/User";
const Navbar = () => {
  const LoginUser = useSelector((state) => state.User.User);
  const dispatch = useDispatch();
  return (
    <div className="navbar text-white">
      <div className="flex flex-row justify-between items-center px-10 py-5 ">
        <h1 className="logo flex flex-row justify-center items-center text-lg  md:text-3xl lg:text-3xl 2xl:text-3xl xl:text-3xl sm:text-3xl ">
          {" "}
          <RiChatSmile3Line /> <span>Chat me </span>{" "}
        </h1>
        <div >
          {LoginUser.UserName ? (
            <div className=" nav flex flex-row justify-center items-center text-xs  md:text-base lg:text-base 2xl:text-base xl:text-base sm:text-base ">
              <Link href={"/"} className="mx-3 hover:underline">
                Home
              </Link>
            
              <Link
                href={""}
                onClick={() => {
                  dispatch(getUser({}));
                }}
                className="mx-3 hover:underline"
              >
                Log out
              </Link>
            </div>
          ) : (
            <div className="nav flex flex-row justify-center items-center text-xs  md:text-base lg:text-base 2xl:text-base xl:text-base sm:text-base">
              <Link href={"/"} className="mx-3 hover:underline">
                Home
              </Link>

              <Link href={"/Login"} className="mx-3 hover:underline">
                Log in
              </Link>
              <Link href={"/Signup"} className="mx-3 hover:underline">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
