import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

/*CANVIAR FOTOS I TOT*/

function Cards() {
  return (
    <div className="cards">
      <h1>Are you ready to learn?</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/grammar.png"
              text="Level up your grammar game!"
              path="/grammar"
            />
            <CardItem
              src="images/vocabulary.png"
              text="Learn some new vocabulary!"
              path="/vocabulary"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/listening.png"
              text="Listen to some conversations!"
              path="/listening"
            />
            <CardItem
              src="images/reading.png"
              text="What about some reading?"
              path="/reading"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
