import { useState } from "react";
import reactLogo from "./../assets/react.svg";
import viteLogo from "/vite.svg";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";

function Vite() {
  return (
    <>
      <Navbar />
      <div className="row justify-center text-center my-auto">
        <div>
          <h1 className="font-bold text-4xl mt-48 mb-5 text-[3rem]">Welcome</h1>
        </div>
        <h1 className="font-bold text-[5rem]">Restful Api Testing</h1>
        <h1 className="font-bold text-[1rem] mb-4">This Page Created Using : </h1>
        <div className="">
          <div className="flex row justify-center">
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="w-20" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="w-20" alt="React logo" />
            </a>
          </div>
          <h1 className="font-bold text-[2rem] mb-3">Vite + React</h1>
        </div>
        <Link
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          to={"/login"}
        >
          Direct to Login
        </Link>
      </div>

      <div className="mt-[20rem] md:container mx-auto">
        <h1 className="font-bold text-[30px]">Note . # in writing</h1>
      </div>

    </>
  );
}

export default Vite;
