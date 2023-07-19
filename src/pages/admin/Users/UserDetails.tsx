import React, { useState } from "react";
import Layouts from "../../../components/layouts";
import axios from "axios";
import { environment } from "../../../env";
import { useParams } from "react-router-dom";
import NavbarAdmin from "../../../components/navbarAdmin";
import Sidebar from "../../../components/sidebar";

const UserDetails = () => {
  const { username } = useParams();
  const [token, setToken] = useState();
  const [data, setData] = useState("");

  const get_user = async (access_token: any) => {
    try {
      const response: any = await axios.get(
        `${environment.v1.apiUrl}/users/${username}`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
      setData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Layouts set_token={setToken} func={get_user}>
        <NavbarAdmin />
        <Sidebar side={"Users"} />
        <div className="p-4 sm:ml-64">
          <div className="p-4 rounded-lg dark:border-gray-700 mt-14">
            <h1 className="font-bold text-[50px]">Details</h1>

            <a
              href="#"
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src={`http://localhost:3000/${data?.avatar_url}`}
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <table>
                  <tbody>
                    <tr>
                      <td>name </td>
                      <td>:{data?.name}</td>
                    </tr>
                    <tr>
                      <td>username</td>
                      <td>:{data?.username}</td>
                    </tr>
                    <tr>
                      <td>email </td>
                      <td>:{data?.email}</td>
                    </tr>
                    <tr>
                      <td>role </td>
                      <td>:{data?.role?.name}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </a>
          </div>
        </div>
      </Layouts>
    </>
  );
};

export default UserDetails;
