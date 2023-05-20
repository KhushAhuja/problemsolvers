import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

const CompeteScreen = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  let navigate = useNavigate();

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
  }, [navigate, userInfo]);
  return (
    <div>
        <p class="text-3xl mt-40 text-center antialiased font-normal">
            Coming Soon!
        </p>
    </div>
  )
}

export default CompeteScreen