import React, { useEffect, useState } from "react";
import NavbarAdmin from "../../components/navbarAdmin";
import Sidebar from "../../components/sidebar";
import axios from "axios";
import { environment } from "../../env";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
// import { axiosInstance } from "../../utils/axiosInstance";
import Layouts from "../../components/layouts";

const Role = () => {
  const [role, setRole] = useState([]);
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // get_token();
    // get_role();
  }, []);

//   const get_token = () => {
//     const local_token: any = localStorage.getItem("token");
//     setToken(local_token);
//   };

  const get_role = async (access_token : any) => {
    try {
    //   const local_token: any = localStorage.getItem("token");
      const user = await axios.get(environment.v1.apiUrl + "/roles", {
        headers: {
          Authorization: `Bearer ${access_token ?? token}`,
        },
      });
      setRole(user?.data?.data);
    } catch (error: any) {
      if (error?.response) {
        console.log(error.response);
      }
        navigate("/login");
    }
  };

  const deleteRole = async (id: any) => {
    const result = await axios.delete(
      `${environment.v1.apiUrl}/roles/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(result);
    get_role(null);
  };

  return (
    <Layouts set_token={setToken} func={get_role} >
      <NavbarAdmin />
      <Sidebar side={"Roles"} />
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
                      <span className="sr-only">Edit</span>
                    </th>
                    <th scope="col" className="px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                    <th scope="col" className="px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                    <th scope="col" className="px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {role.map((item: any, i) => (
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
                      <td className="px-6 py-4"></td>
                      <td className="px-6 py-4"></td>
                      <td className="px-6 py-4"></td>
                      <td className="px-6 py-4 text-right">
                        <a
                          href="#"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit
                        </a>
                        <button
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-3"
                          onClick={() => deleteRole(item.id)}
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

export default Role;
