import React from "react";
import "../../App.css";
import Cards from "../Cards";
import Footer from "../Footer";
import "./Practice.css";

function Practice() {
  return (
    <div>
      <h1 className="practice-header">Test Your English!</h1>
      <a class="quiz" href="https://arden.ac.uk/what-type-learner-are-you">
        Take this test to discover what type of learner you are!
      </a>
      <p className="practice-text">
        Since you now know what learner you are, it's time for some practice!
      </p>
      <>
        <Cards />
        <Footer />
      </>
    </div>
  );
}

export default Practice;
