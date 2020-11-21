import React from "react";
import "../../App.css";
import "./Grammar.css";

function Grammar() {
  return (
    <div>
      <h1 class="grammar-header">Grammar</h1>
      <section className="questions-container">
        <div>
          <p>
            <b>
              1. The first letter of the first word in a sentence should be a...
            </b>
          </p>
          <p>A) large letter</p> <p> B) a capital letter</p>
        </div>
        <div>
          <p>
            <b>2. The order of a basic positive sentence is...</b>
          </p>
          <p>A) Subject-Verb-Object</p> <p> B) Verb-Object-Subject</p>
        </div>
        <div>
          <p>
            <b>3. Every sentence must have a subject and...</b>
          </p>
          <p>A) a verb</p> <p>B) an object</p>
        </div>
        <div>
          <p>
            <b>4. A plural subject needs a...</b>
          </p>
          <p>A) singular verb</p> <p>B) plural verb</p>
        </div>
        <div>
          <p>
            <b>5. When two singular subjects are connected by 'or'...</b>
          </p>
          <p>A) use a singular verb</p> <p>B) use a plural verb</p>
        </div>
        <div>
          <p>
            <b>6. Adjectives usually come...</b>
          </p>
          <p>A) before a noun</p> <p>B) after a noun</p>
        </div>
        <div>
          <p>
            <b>6. Adjectives usually come...</b>
          </p>
          <p>A) before a noun</p> <p>B) after a noun</p>
        </div>
        <div>
          <p>
            <b>
              7. If an opinion-adjective and a fact-adjective are used before a
              noun, which comes first?
            </b>
          </p>
          <p>A) a fact-adjective</p> <p>B) an opinion-adjective</p>
        </div>
        <div>
          <p>
            <b>
              8. In British English, a collective noun is usually treated as
            </b>
          </p>
          <p>A) singular</p> <p>B) plural</p>
        </div>
        <div>
          <p>
            <b>9. The terms "its" and "it's" have...</b>
          </p>
          <p>A) the same meaning</p> <p>B) different meanings</p>
        </div>
        <div>
          <p>
            <b>10. Which is correct?</b>
          </p>
          <p>A) You're looking good</p> <p>B) Your looking good</p>
        </div>
      </section>
      <h1>Correct Answers</h1>
      <div class="answers">
        <p>1. a capital letter</p>
        <p>2. Subject-Verb-Object</p>
        <p>3. a verb</p>
        <p>4. a plural verb</p>
        <p>5. a singular verb</p>
        <p>6. before a noun</p>
        <p>7. an opinion-adjective</p>
        <p>8. plural</p>
        <p>9. different meanings</p>
        <p>10. You're looking good</p>
      </div>
    </div>
  );
}

export default Grammar;
