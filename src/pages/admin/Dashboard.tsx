import React, { useEffect, useState } from "react";
import NavbarAdmin from "../../components/navbarAdmin";
import Sidebar from "../../components/sidebar";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useCookies } from "react-cookie";
import { environment } from "../../env";
import { Link, useNavigate } from "react-router-dom";
// import { axiosInstance } from "../../utils/axiosInstance";
import Layouts from "../../components/layouts";
// import { axiosInstance, refreshedToken } from "../../utils/axiosInstance";

const Dashboard = () => {
  const [token, setToken] = useState("");
  const [users, setUsers] = useState([]);

  const get_user = async (access_token:any) => {
    try {
      const user = await axios.get(environment.v1.apiUrl + "/users", {
        headers: {
          Authorization: `Bearer ${access_token ?? token}`,
        },
      });
      setUsers(user?.data?.data);
    } catch (error: any) {
      if (error?.response) {
        console.log(error.response);
      }
      console.log(error);
    }
  };

  const deleteUser = async (uname: any) => {
    const result = await axios.delete(
      `${environment.v1.apiUrl}/users/${uname}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(result);
    get_user(null);
  };

  return (
    <Layouts set_token={setToken} func={get_user}>
      <NavbarAdmin />
      <Sidebar side={"Dashboard"} />

      <div className="p-4 sm:ml-64">
        <div className="p-4 rounded-lg dark:border-gray-700 mt-14">
          <h1 className="font-bold text-[50px]">Users</h1>
          <div className="">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      No
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Username
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Role
                    </th>
                    <th scope="col" className="px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((item: any, i) => (
                    <tr
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      key={i}
                    >
                      <td className="px-6 py-4">{i + 1}</td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {item.name}
                      </th>
                      <td className="px-6 py-4">{item.username}</td>
                      <td className="px-6 py-4">{item.email}</td>
                      <td className="px-6 py-4">{item.role.name}</td>
                      <td className="px-6 py-4 text-right">
                        <Link
                          to={`/dashboard/users/${item.username}`}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Details
                        </Link>
                        <a
                          href="#"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-3"
                        >
                          Edit
                        </a>
                        <button
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          onClick={() => deleteUser(item.username)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  );
};

export default Dashboard;
