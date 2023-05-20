import React, { useEffect } from "react";
import Footer from "../components/footer";

const FAQ = () => {
  useEffect(() => {
    document.title = "FAQ | Problem Solvers";
  }, []);

  return (
    <div>
      <section id="faq">
        <div className=" faq-body gap-x-8 h-[auto] flex flex-col items-center justify-center px-4 md:px-0 md:gap-x-16 w-full pb-12">
          <img
            src="./FAQ-PNG-Free-Download.png"
            id="faq-image"
            className="min-w-200px"
            alt=""
          />

          <div className="container">
            <details className="faq-card">
              <summary>
                What is this website about?
                <span className="faq-open-icon ">+</span>
              </summary>
              <span className="faq-card-spoiler">
                Our website is a platform where users can practice their problem
                solving skills by solving mind-twisting puzzles. We have a
                practice section where users can solve problems and a discussion
                forum where they can share their thoughts and ideas with other
                users. Users can also contribute their own problems for others
                to solve.
              </span>
            </details>

            <details className="faq-card">
              <summary>
                Is this website free to use?
                <span className="faq-open-icon">+</span>
              </summary>
              <span className="faq-card-spoiler">
                Yes, this platform is completely free to use.
              </span>
            </details>
            <details className="faq-card">
              <summary>
                Do I need to create an account to use this website?
                <span className="faq-open-icon">+</span>
              </summary>
              <span className="faq-card-spoiler">
                No, you can use our website without creating an account.
                However, creating an account will allow you to save your
                progress, submit answers, and contribute your own problems.
              </span>
            </details>
            <details className="faq-card">
              <summary>
                How do I solve the puzzles?
                <span className="faq-open-icon">+</span>
              </summary>
              <span className="faq-card-spoiler">
                Our puzzles are designed to be challenging and require creative
                problem solving skills. To solve a puzzle, carefully read the
                problem statement and try to come up with a solution using
                logic, reasoning, and critical thinking.
              </span>
            </details>
            <details className="faq-card">
              <summary>
                Can I contribute my own problems to the website?{" "}
                <span className="faq-open-icon">+</span>
              </summary>
              <span className="faq-card-spoiler">
                Yes, we encourage users to contribute their own problems to our
                website. Simply create an account and submit your problem
                through the "Contribute" button on practice page.
              </span>
            </details>
            <details className="faq-card">
              <summary>
                Is there a leaderboard where I can compete with other users?{" "}
                <span className="faq-open-icon">+</span>
              </summary>
              <span className="faq-card-spoiler">
                We are currently working on adding a "Compete" section where
                users can compete with one another, increase there ratings and
                earn rewards for solving puzzles. Stay tuned for updates!
              </span>
            </details>
            <details className="faq-card">
              <summary>
                How can I report a bug or suggest an improvement?{" "}
                <span className="faq-open-icon">+</span>
              </summary>
              <span className="faq-card-spoiler">
                We welcome all feedback and suggestions. You can report a bug or
                suggest an improvement by contacting us through the "Contact"
                section in the footer. We will do our best to address your
                concerns and improve the website.
              </span>
            </details>
            {/* <details className="faq-card">
            <summary>
              What is the cohort program run by Seedsnitch, and do you take any
              cohort fees?<span className="faq-open-icon">+</span>
            </summary>
            <span className="faq-card-spoiler"
              >The cohort program is offered 2-3 times per year and is
              completely free for participants. All the selected applications
              are part of the cohort. We believe that providing free Communitys
              and support is the best way to help founders succeed</span
            >
          </details> */}

            <h2 className="faq-heading">Still have questions?</h2>
            <p className="faq-aftertext">
              If you cannot find an answer to your question in our FAQ, you can
              always
              <br />
              contact us. We will answer shortly!
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FAQ;
