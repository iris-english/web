import React from "react";
import "../../App.css";
import "./Vocabulary.css";

function Vocabulary() {
  return (
    <div>
      <h1 class="vocabulary-header">Vocabulary</h1>
      <section className="questions-container">
        <div>
          <p>
            <b>1. A criminal is a person who has _______ the law.</b>
          </p>
          <p>A) committed</p> <p> B) offended</p>
          <p> C) broken</p>
        </div>
        <div>
          <p>
            <b>2. Criminals can also be called law breakers or _______.</b>
          </p>
          <p>A) lawyers</p> <p> B) offenders</p> <p>C) baddies</p>
        </div>
        <div>
          <p>
            <b>3. What can we call someone who steals?</b>
          </p>
          <p>A) a thief</p> <p>B) a theft</p> <p>C) a thieve</p>
        </div>
        <div>
          <p>
            <b>
              4. Tommy can bump into someone and take their wallet without their
              knowing. What is he?
            </b>
          </p>
          <p>A) a burglar</p> <p>B) a pickpocket</p> <p>C) a mugger</p>
        </div>
        <div>
          <p>
            <b>
              5. Betsy had no money to buy food for her kids, so she took it
              from a supermarket without paying. What was her crime?
            </b>
          </p>
          <p>A) kidnapping</p> <p>B) being poor</p> <p>C) shoplifting</p>
        </div>
        <div>
          <p>
            <b>6. What do we call someone who sells illegal drugs?</b>
          </p>
          <p>A) a drug dealer</p> <p>B) a drug user</p> <p>C) a drug taker</p>
        </div>
        <div>
          <p>
            <b>
              7. What kind of criminal is a businessman who imports goods
              without paying tax?
            </b>
          </p>
          <p>A) a forger</p> <p>B) a smuggler</p> <p>C) a deserter</p>
        </div>
        <div>
          <p>
            <b>
              8. In 2001, Saudi Arabian terrorists led an attack on the USA in
              which passenger airlines were _______ and crashed into buildings.
            </b>
          </p>
          <p>A) vandalized</p> <p>B) kidnapped</p> <p>C) hijacked</p>
          <div>
            <p>
              <b>
                9. Jack breaks into rich people's homes and steals money and
                jewellery. He's an expert at
              </b>
            </p>
            <p>A) burglary</p> <p>B) treachery</p> <p>C) bigamy</p>
          </div>
          <div>
            <p>
              <b>
                10. A professional killer who's paid to murder people for
                political reasons is called
              </b>
            </p>
            <p>A) a soldier</p> <p>B) a spy</p> <p>C) an assassin</p>
          </div>
        </div>
      </section>
      <h1>Correct Answers</h1>
      <div class="answers">
        <p>1. broken</p>
        <p>2. offenders</p>
        <p>3. a thief</p>
        <p>4. a pickpocket</p>
        <p>5. shoplifting</p>
        <p>6. a drug dealer</p>
        <p>7. a smuggler</p>
        <p>8. hijacked</p>
        <p>9. burglary</p>
        <p>10. an assassin</p>
      </div>
    </div>
  );
}
export default Vocabulary;
