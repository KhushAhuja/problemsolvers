import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0f6d6d] text-white py-4 px-6 md:py-6 md:px-8 lg:px-16 xl:px-20">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-screen-lg mx-auto">
        <div className="mb-4 md:mb-4">
          <a
            
            href="https://instagram.com/"
            id="instagram"
            className="text-white mr-4 md:mr-8 hover:text-pink-300 transition duration-500"
          >
            <i className="fab fa-instagram fa-lg"></i>
          </a>
          <a
            href="https://mail.google.com/mail/u/0/#inbox"
            id="gmail"
            className="text-white mr-4 md:mr-8 hover:text-red-400 transition duration-500"
          >
            <i className="fas fa-envelope fa-lg"></i>
          </a>
          <a
            href="https://linkedin.com/"
            id="linkedin"
            className="text-white mr-4 md:mr-8 hover:text-blue-500 transition duration-500"
          >
            <i className="fab fa-linkedin fa-lg"></i>
          </a>
          <a
            href="https://twitter.com/"
            id="twitter"
            className="text-white mr-4 hover:text-blue-300 transition duration-500"
          >
            <i className="fab fa-twitter fa-lg"></i>
          </a>
        </div>

        <div className="row mb-4 md:mb-4">
          <ul className="flex flex-wrap justify-center md:justify-start">
            <li className="mr-4 md:mr-8">
              <a
                className="text-white hover:text-blue-300 transition duration-500"
                href="/faq"
              >
                About us
              </a>
            </li>
            <li className="mr-4 md:mr-8">
              <a
                className="text-white hover:text-blue-300 transition duration-500"
                href="mailto:your-email@example.com?subject=Support%20Required"
              >
                Contact us
              </a>
            </li>
            <li className="mr-4">
              <a
                className="text-white hover:text-blue-300 transition duration-500"
                href="/faq"
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>

        <div className="row">
          <p className="text-center md:text-left">
            Problem Solvers © 2023 All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
