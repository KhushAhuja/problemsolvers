import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import Footer from "../components/footer";

const HomeScreen = () => {
  // make it deafult on searching the website
  let navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  return (
    <div>
      <section
        id="intro"
        className="hidden h-[480px] w-full overflow-hidden md:flex justify-between flex-row px-7 mb-28 text-left"
      >
        <div
          className="w-full space-y-8 flex flex-col justify-center items-start pt-20 text-center pl-32 "
          id="intro-text"
        >
          <div className="homeleft flex flex-col space-y-8">
            <div
              className="text-3xl pt-5 md:max-w-3xl text-accent md:text-6xl md:font-bold lg:font-black text-left"
              
            >
              <span className="my-[20px] relative ">
                <Typewriter
                  options={{
                    strings: [
                      "Empower your mind with problem-solving skills.",
                      "Master the art of problem-solving with us.",
                      "Be a problem-solver, not just a problem-identifier.",
                    ],
                    autoStart: true,
                    loop: true,
                    pauseFor: 2000,
                    delay: 150,
                  }}
                />
              </span>
            </div>
            <div className="max-w-xl text-medBlue font-semibold text-[20px] text-left">
              <p>
                Challenge yourself and elevate your problem-solving abilities
                with our innovative platform - the perfect place to push your
                limits and achieve greatness!
              </p>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <Link to="/faq">
                <button className="text-white bg-[#0C6980] rounded-md py-3 px-7 text-[18px] hover:bg-[#084352]">
                  Learn More
                </button>
              </Link>
            </div>
          </div>

          <div className="homelogo absolute -right-[-160px]">
            <img
              src="./pngwing.png"
              className="w-[330px] -right-[630px] "
              alt={"icon"}
            />
          </div>
        </div>
      </section>

      <section className=" gap-x-8 h-auto md:flex-row px-4 md:px-0 md:gap-x-16 bg-[#f8f8f8] w-full border border-b-slate-200">
        <div className="text-center md:w-1/2 w-full h-full mx-auto flex flex-col items-center justify-start md:py-12">
          <div className="w-full md:w-[800px] text-center p-4 md:p-2">
            <h2 className="md:font-extrabold font-extrabold text-4xl md:text-5xl pb-2 text-accent">
              A Guide <span className="text-[#242424]">for Users</span>
            </h2>
            <h2 className="font-light text-2xl md:font-normal text-[#242424]">
              A comprehensive overview of the benefits and opportunities
              available to the users of our platform.
            </h2>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full mx-auto h-auto items-center px-6 md:px-6 md:mb-0 md:pb-10 mb-6 mt-18 pt-4">
          <div className="parent-course-col index-row flex flex-row justify-content-center container ">
            <div className="course-col ml-[10%] my-12">
              <h3>Choose a puzzle</h3>
              <p>
                Browse through our collection of real-life based puzzles and
                choose one that interests you. Each puzzle is designed to
                challenge your problem-solving skills and help you think outside
                the box.
              </p>
            </div>
            <div className="course-col ml-8 my-12">
              <h3>Solve the puzzle</h3>
              <p>
                Once you've chosen a puzzle, put your problem-solving skills to
                the test and try to solve it on your own. Don't worry if you get
                stuck – you can always ask for help or discuss the puzzle with
                other users on our discussion forum.
              </p>
            </div>

            <div className="course-col ml-8 my-12">
              <h3>Compete with others</h3>
              <p>
                If you're feeling competitive, you can join our arenas and
                compete with other users to see who can solve the puzzle the
                fastest or with the fewest number of steps. This is a great way
                to challenge yourself and improve your problem-solving skills.
              </p>
            </div>
            <div className="course-col mr-[10%] ml-8 my-12">
              <h3>Contribute your own puzzles</h3>
              <p>
                Do you have a great puzzle that you think others would enjoy?
                You can contribute your own puzzles to our platform and share
                them with our community of problem-solvers. This is a great way
                to challenge others and see how they approach the problems
                you've created.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomeScreen;
<div className="absolute -right-[-160px]">
  <img src="./pngwing.png" className="w-[330px] -right-[630px] " alt={"icon"} />
</div>;
