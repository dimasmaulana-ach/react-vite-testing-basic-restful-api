import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { environment } from "../env";

const Register = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    check_token();
  }, []);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      if (password !== confirm) {
        setMessage("Password do not match");
      }

      const result = await axios.post(
        `${environment.v1.apiUrl}/users`,
        {
          name: name,
          username: username,
          email: email,
          password: password,
          role_id: 2,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(result);
      navigate("/");
    } catch (error: any) {
      console.log(error);
      setMessage(error?.response?.data?.errors[0]);
      setTimeout(() => setMessage(""), 3000);
    }
  };

  const check_token = async () => {
    try {
      await axios.get(environment.v1.apiUrl + "/session/get_token");
      navigate("/dashboard");
    } catch (error: any) {
      if (error?.response) {
        console.log(error.response);
      }
    }
  };

  return (
    <>
      <div className="h-screen flex m-auto justify-center self-center">
        <div className="w-full m-auto self-center max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <h1 className="font-bold text-[2rem]">Register Vite React</h1>
          <h3 className="text-red-700 text-[14px]">
            {message}
            <span className="opacity-0">~</span>
          </h3>

          <form action="" id="sign_up_form" onSubmit={onSubmit}>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your name
              </label>
              <input
                type="name"
                onChange={(e) => setName(e.target.value)}
                id="name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Name"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your username
              </label>
              <input
                type="username"
                onChange={(e) => setUsername(e.target.value)}
                id="username"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Username"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                placeholder="Password"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Confirm password
              </label>
              <input
                type="password"
                onChange={(e) => setConfirm(e.target.value)}
                id="password"
                placeholder="Confirm Password"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
              />
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Register
            </button>
          </form>
          <h1 className="mt-2">
            do you have account{" "}
            <Link className="font-bold" to={"/login"}>
              Login ?
            </Link>
          </h1>
        </div>

        {/* <form action="" id="sign_up_form" onSubmit={onSubmit}>
          <div className="form-control">
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              id="signup-email"
              placeholder="Email"
            />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              id="signup-password"
              placeholder="Password"
            />
            <button type="submit" id="Sign Up">
              Submit
            </button>
          </div>
        </form> */}
      </div>
    </>
  );
};

export default Register;
