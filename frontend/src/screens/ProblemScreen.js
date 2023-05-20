import PracticeTable from "../components/Table/Table";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function PracticeScreen() {
  // const userLogin = useSelector((state) => state.userLogin);
  // const { userInfo } = userLogin;

  // let navigate = useNavigate();

  // useEffect(() => {
  //   if (!userInfo) {
  //     navigate("/login");
  //   }
  // }, [navigate, userInfo]);

  return (
    <div className="practice-screen">
      <PracticeTable />
      <a
        href="https://forms.gle/ALny9opxdUEpbcUt7"
        target="_blank"
        rel="noopener noreferrer"
        className="contribute-button text-white bg-teal-700 text-gray-800 rounded-full px-4 py-2 fixed bottom-4 right-4 sm:bottom-8 sm:right-8 hover:bg-teal-800 hover:shadow-lg transition-all duration-300"
      >
        Contribute
      </a>
    </div>
    
  );
}

export default PracticeScreen;