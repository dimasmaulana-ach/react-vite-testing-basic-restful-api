import React, { ReactNode, useEffect, useState } from "react";
import { environment } from "../env";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface Props {
  children?: ReactNode;
  set_token?: any;
  func?: any;
  // any props that come into the component
}

const Layouts = ({ children, set_token, func }: Props) => {
  const navigate = useNavigate();
  const [expire, setExpire] = useState("");

  useEffect(() => {
    refresh_token();
    refreshed();
  }, []);

  const refresh_token = async () => {
    try {
      const res = await axios.get(environment.v1.apiUrl + "/session/get_token");
      set_token(res.data.token);
      func(res.data.token);
      // console.log("get refresh", res.data.token);
      const decoded: any = jwt_decode(res.data.token);
      setExpire(decoded?.exp);
    } catch (error: any) {
      if (error?.response) {
        console.log(error.response);
      }
      navigate("/login");
    }
  };

  const refreshed = async () => {
    try {
      const currentDate = new Date();
      if (parseInt(expire) * 1000 < currentDate.getTime()) {
        const response = await axios.get(
          environment.v1.apiUrl + "/session/refresh_token"
        );
        set_token(response.data.token);
        func(response.data.token);
      }
    } catch (error) {
      console.log(error);
      navigate("/login");
    }
  };

  return <>{children}</>;
};

export default Layouts;
