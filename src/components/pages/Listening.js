import React from "react";
import "../../App.css";
import "./Listening.css";

function Listening() {
  return (
    <div>
      <h1 className="listening-header">Listening</h1>
      <a
        className="video"
        href="https://www.youtube.com/watch?v=4fwEG8XK1uU&feature=emb_logo"
      >
        VIDEO
      </a>
      <section className="questions-container">
        <div>
          <p>
            <b>1. Greta Thunberg is</b>
          </p>
          <p>A) a climate scientist</p> <p> B) a music video speaker</p>
          <p> C) an environmental activist</p>
        </div>
        <div>
          <p>
            <b>2. Greta believes that global warming is</b>
          </p>
          <p>A) a good thing</p> <p> B) a bad thing</p> <p>C) a grey area</p>
        </div>
        <div>
          <p>
            <b>
              3. She says that _______ have failed to bring the situation under
              control.
            </b>
          </p>
          <p>A) young people</p> <p>B) older generations</p>{" "}
          <p>C) environmentalists</p>
        </div>
        <div>
          <p>
            <b>4. Greta believes that we can _______ fix this problem.</b>
          </p>
          <p>A) still</p> <p>B) never</p> <p>C) easily</p>
        </div>
        <div>
          <p>
            <b>
              5. We probably don't stand a chance unless we keep global warming
              to _______ 1.5 degrees.
            </b>
          </p>
          <p>A) exactly</p> <p>B) no less than</p> <p>C) no more than</p>
        </div>
        <div>
          <p>
            <b>6. She says the main solution is to decrease our</b>
          </p>
          <p>A) chain reactions</p> <p>B) transformational actions</p>{" "}
          <p>C) greenhouse gas emissions</p>
        </div>
        <div>
          <p>
            <b>
              7. According to Greta, which of the following have failed to solve
              this problem?
            </b>
          </p>
          <p>A) all political movements</p> <p>B) all grassroots levels</p>{" "}
          <p>C) all Homo sapiens</p>
        </div>
        <div>
          <p>
            <b>8. She says we need _______ change.</b>
          </p>
          <p>A) systemic</p> <p>B) individual</p>{" "}
          <p>C) both systemic and individual</p>
          <div>
            <p>
              <b>
                9. She reminds us that big changes begin when _______ people
                start taking action.
              </b>
            </p>
            <p>A) ordinary</p> <p>B) powerful</p> <p>C) important</p>
          </div>
          <div>
            <p>
              <b>
                10. To save the world from a climate disaster, it's time for
                rebellion and
              </b>
            </p>
            <p>A) doing our best</p> <p>B) civil disobedience</p>{" "}
            <p>C) playing by the rules</p>
          </div>
        </div>
      </section>
      <h1>Correct Answers</h1>
      <div class="answers">
        <p>1. an environmental activist</p>
        <p>2. a bad thing</p>
        <p>3. older generations</p>
        <p>4. still</p>
        <p>5. no more than</p>
        <p>6. greenhouse gas emissions</p>
        <p>7. all political movements</p>
        <p>8. both systemic and individual</p>
        <p>9. ordinary</p>
        <p>10. civil disobedience</p>
      </div>
    </div>
  );
}

export default Listening;
