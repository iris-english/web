import React from "react";
import "../../App.css";
import Footer from "../Footer";
import "./Contact.css";

function Contact() {
  return (
    <div>
      <h1 className="headers">ABOUT US</h1>
      <p className="text">
        I am a Spanish student who created this project after talking to my
        English teacher about the level of regular students. Since I am quite
        good at programming, I decided to create this web to help students
        around the world with the fundamentals of the English language, which
        are grammar, vocabulary, reading and listening, writing is not part of
        the list because I believe that is the easiest part and it would be
        complicated to implement writings into the web.
      </p>
      <p className="text">
        This is part of my bachelor's degree final project, so I hope it helps
        you.
      </p>
      <h1 className="headers">CONTACT</h1>
      <p className="text">
        You can contact me via Instagram, email and that is all.{" "}
      </p>
      <p className="text">
        You can also check out the source code of the web if you would like.
      </p>
      <p className="text">
        <b>Instagram:</b> @pau_pereiira
      </p>
      <p className="text">
        <b>Email: </b>pau.pereira@insvilafant.cat
      </p>
      <a className="source" href="https://github.com/iris-english">
        Source Code
      </a>
    </div>
  );
}

export default Contact;
