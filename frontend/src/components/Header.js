import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/userActions";

const Header = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  let navigate = useNavigate();

  const LogoutHandler = async () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <header className="flex items-center justify-between shadow-xl bg-white px-4 py-4">
      <Link
        to="/"
        className={`${isMenuOpen ? "hidden" : "block"} text-2xl md:pl-8`}
      >
        Problem Solvers
      </Link>

      {/* Hamburger menu */}

      <div
        className={`${
          isMenuOpen
            ? "block py-8 space-y-8 flex flex-col justify-center"
            : "hidden"
        } lg:flex lg:items-center lg:space-x-8`}
      >
        <div
          className={`${
            isMenuOpen ? "space-y-8" : "hidden"
          } lg:flex lg:items-center lg:space-x-8`}
        >
          <a
            href="/practice"
            className={`${
              isMenuOpen ? "pl-[15%]" : ""
            } block lg:inline-block text-gray-900 hover:text-teal-700 hover:font-semibold`}
          >
            Practice
          </a>

          <a
            href="/compete"
            className={`${
              isMenuOpen ? "pl-[15%]" : ""
            } block lg:inline-block text-gray-900 hover:text-teal-700 hover:font-semibold`}
          >
            Compete
          </a>

          <a
            href="/discuss"
            className={`${
              isMenuOpen ? "pl-[15%]" : ""
            } block lg:inline-block text-gray-900 hover:text-teal-700 hover:font-semibold`}
          >
            Discuss
          </a>

          <a
            href="/faq"
            className={`${
              isMenuOpen ? "pl-[17%]" : ""
            } block lg:inline-block text-gray-900 hover:text-teal-700 hover:font-semibold`}
          >
            FAQ
          </a>
        </div>
        <span className="text-gray-400 hidden md:inline-block">|</span>
        <div
          className={`${
            isMenuOpen ? "my-0" : "hidden"
          } lg:flex lg:items-center lg:space-x-8 lg:ml-auto lg:pr-8`}
        >
          {userInfo ? (
            <div className="flex items-center space-x-8">
              <span className={`${
                isMenuOpen ? "hidden" : ""
              }text-gray-900 font-semibold uppercase `}>
                {userInfo.name.split(" ")[0]}
              </span>
              <span
                onClick={LogoutHandler}
                className={`${
                  isMenuOpen ? "ml-0" : ""
                }text-gray-900 hover:text-white inline-block px-4 py-2 rounded-full border border-gray-300 hover:bg-teal-700 hover:border-transparent hover:text-white transition duration-300`}
              >
                Logout
              </span>
            </div>
          ) : (
            <Link
              to="/login"
              className={`${
                isMenuOpen ? "ml-0" : ""
              } text-gray-900 hover:text-white inline-block px-4 py-2 rounded-full border border-gray-300 hover:bg-teal-700 hover:border-transparent hover:text-white transition duration-300`}
            >
              Login
            </Link>
          )}
        </div>
      </div>
      <button
        className="lg:hidden text-gray-900 focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          className="h-6 w-6 fill-current mr-[10%]"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isMenuOpen ? (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.293 17.707L12 9.414l-8.293 8.293a1 1 0 0 1-1.414-1.414L10.586 8 3.293.707A1 1 0 0 1 4.707-.707l8.293 8.293 8.293-8.293a1 1 0 1 1 1.414 1.414L13.414 8l7.293 7.293a1 1 0 0 1 0 1.414z"
            />
          ) : (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
            />
          )}
        </svg>
      </button>
    </header>
  );
};

export default Header;
