import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../App.css";

const ProblemDescr = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  let navigate = useNavigate();

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
  }, [navigate, userInfo]);

  const [problem, setProblem] = useState("");
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [answered, setAnswered] = useState(false);
  const [correct, setCorrect] = useState(true);
  const [ip, setIp] = useState("");

  const ansCheckHandler = () => {
    setAnswered(true);
    if (problem.ans) {
      if (problem.ans !== ip) setCorrect(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/api/problems/get-problem/${id}`)
      .then((res) => setProblem(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="px-14 py-9">
      <h1 className="text-3xl font-semibold">{problem.name}</h1>
      <p className="mt-4 py-4">{problem.statment}</p>
      <input
        className="px-5 py-2 border-2 mt-8"
        onChange={(e) => setIp(e.target.value)}
      />
      {answered && (
        <div>
          <div
            className={`bar ${correct ? "bar--green" : "bar--red"} mt-8`}
            style={{
              animationName: correct
                ? "barAnimationGreen"
                : "barAnimationRed",
            }}
          ></div>
          {correct ? (
            <div className="text-lg mt-4 font-semibold">Correct Answer</div>
          ) : (
            <div className="text-lg mt-4 font-semibold">Wrong Answer</div>
          )}
        </div>
      )}
      {!answered && (
        <div>
          <div
            onClick={ansCheckHandler}
            className="block bg-green-500 hover:bg-green-700 transition-all duration-200 text-white font-bold py-2 px-4 rounded w-[87px] cursor-pointer mt-4"
          >
            Submit
          </div>
        </div>
      )}
    </div>
  );
};

export default ProblemDescr;
