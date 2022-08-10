import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../Components/Common/Loading";

const Redirect = () => {
  const { username, uid, email, role, accessToken, refreshToken } = useParams();

  const ref = localStorage.setItem("refreshToken", refreshToken);

  useEffect(() => {
    localStorage.clear();
    if (username || uid || email || role || accessToken || refreshToken) {
      localStorage.setItem("username", username);
      localStorage.setItem("uid", uid);
      localStorage.setItem("email", email);
      localStorage.setItem("role", role);
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
    } else {
      localStorage.clear();
      window.location = "/login";
    }
  }, [username, uid, email, role, accessToken, refreshToken]);

  useEffect(() => {
    window.location = "/courses";
  }, [refreshToken]);

  return (
    <div>
      <Loading />
    </div>
  );
};

export default Redirect;
