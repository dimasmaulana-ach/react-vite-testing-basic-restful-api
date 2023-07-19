// import axios from "axios";
// import jwt_decode from "jwt-decode";
// import { environment } from "../env";

// export const axiosInstance = axios.create();

// axiosInstance.interceptors.request.use(
//   async (config) => {
//     const token:any = localStorage.getItem("token");
//     const decoded: any = jwt_decode(token);
//     const currentDate = new Date();
//     if (parseInt(decoded.exp) * 1000 < currentDate.getTime()) {
//       const response = await axios.get(
//         environment.v1.apiUrl + "/session/refresh_token"
//       );
//       config.headers.Authorization = `Bearer ${response.data.token}`;
//       // const decoded: any = jwt_decode(response.data.token);
//       // setExpire(decoded?.exp);
//       localStorage.setItem("token", response.data.token);
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );