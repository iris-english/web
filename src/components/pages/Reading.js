import React from "react";
import "./Reading.css";

function Reading() {
  return (
    <div>
      <h1 class="reading-header">Reading</h1>
      <p className="reading">
        Pollution is an environmental concern for people throughout the world.
        One university study suggests that pollutants in the water, air, and
        soil cause up to 40% of the premature deaths in the world's population.
        The majority of these deaths occur in developing countries.
      </p>
      <p className="reading">
        Water in many developing countries is contaminated with toxic chemicals,
        also known as toxins. The World Health Organization (WHO) estimates that
        1.1 billion people have little or no access to clean water. In many of
        these regions the water that is used for drinking, cooking, and washing
        is the same water that is used for dumping sewage and hazardous waste.
        Most developing countries cannot afford water treatment facilities.
        Approximately 80% of infectious diseases in the world are caused by
        contaminated water.
      </p>
      <p className="reading">
        Air pollution is a growing problem throughout the world. Indoor air
        pollution is one of the leading causes of lung cancer. Families in
        developing countries use open stoves for cooking and heating their
        homes. These homes do not have proper ventilation. The smoke, which is
        full of chemicals and carcinogens, gets trapped inside where families
        eat and sleep. Outdoor pollution also causes disease and illness,
        especially in industrial cities such as Beijing, China, where cancer is
        the leading cause of death. China relies heavily on coal, which is
        considered the dirtiest source of energy. According to the European
        Union, only 1% of urban dwellers in China breathe clean air on an
        average day. Neighbouring countries including Japan and Korea receive
        much of China's pollution in the form of acid rain. This pollution
        results mainly from the coal powered factories, which produce
        inexpensive goods for North American and European consumers. Outdoor air
        pollution is also a concern in many wealthy countries. Those who live
        and work in urban centres such as Los Angeles or Toronto experience many
        warm days beneath a layer of smog.
      </p>
      <p className="reading">
        Soil pollution is also a major concern, both in industrial and
        developing countries. Pollutants such as metals and pesticides seep into
        the earth's soil and contaminate the food supply. Soil pollution causes
        major health risks to entire ecosystems. This type of pollution reduces
        the amount of land suitable for agricultural production and contributes
        to global food shortages. Dumping of industrial and domestic waste
        products produces much of the world's soil pollution, though natural
        disasters can also add to the problem. In wealthy countries such as the
        US, protection agencies monitor the food supply. The public is generally
        warned before major disease outbreaks occur. Developing countries do not
        have this luxury. Farmers in poor nations grow food in contaminated soil
        both to earn a living and to avoid starvation.
      </p>
      <p className="reading">
        As more people move to urban centres, premature deaths caused by
        pollution are expected to increase worldwide. Today, the developed
        nations who achieved their wealth at the expense of the environment will
        be held accountable for protecting the earth's resources for future
        generations.
      </p>
      <section className="questions-container">
        <div>
          <p>
            <b>
              1. A university study suggests that up to 40% of the world's
              premature deaths are caused by
            </b>
          </p>
          <p>A) developing countries</p> <p> B) disease outbreaks</p>
          <p> C) pollutants</p>
        </div>
        <div>
          <p>
            <b>
              2. In many developing countries people use _______ contaminated by
              hazardous waste and sewage.
            </b>
          </p>
          <p>A) water</p> <p> B) air</p> <p>C) facilities</p>
        </div>
        <div>
          <p>
            <b>3. _______ regions are often contaminated with air pollution.</b>
          </p>
          <p>A) Chemical</p> <p>B) Carcinogenic</p> <p>C) Industrial</p>
        </div>
        <div>
          <p>
            <b>4. What do open windows and fans that extract smoke provide?</b>
          </p>
          <p>A) contamination</p> <p>B) ventilation</p>{" "}
          <p>C) indoor pollution</p>
        </div>
        <div>
          <p>
            <b>
              5. The article implies that most of China's air pollution is
              caused by
            </b>
          </p>
          <p>A) Japan and Korea</p> <p>B) burning coal</p> <p>C) acid rain</p>
        </div>
        <div>
          <p>
            <b>
              6. According to the article, where is cancer the leading cause of
              death?
            </b>
          </p>
          <p>A) Beijing</p> <p>B) Los Angeles</p> <p>C) the European Union</p>
        </div>
        <div>
          <p>
            <b>7. Which is NOT mentioned as a source of soil pollution?</b>
          </p>
          <p>A) hazardous wastes</p> <p>B) use of pesticides</p>{" "}
          <p>C) smoke from factories</p>
        </div>
        <div>
          <p>
            <b>8. Soil pollution is a major concern in _______ countries.</b>
          </p>
          <p>A) industrial</p> <p>B) developing</p>{" "}
          <p>C) industrial and developing</p>
          <div>
            <p>
              <b>
                9. Industrial metals and pesticides seep into the earth's soil
                and contaminate our
              </b>
            </p>
            <p>A) food supply</p> <p>B) food shortages</p>{" "}
            <p>C) disease outbreaks</p>
          </div>
          <div>
            <p>
              <b>
                10. Premature deaths caused by pollution are expected to
                increase as more people move to
              </b>
            </p>
            <p>A) developed nations</p> <p>B) urban centres</p>{" "}
            <p>C) country towns</p>
          </div>
        </div>
      </section>
      <h1>Correct Answers</h1>
      <div class="answers">
        <p>1. pollutants</p>
        <p>2. water</p>
        <p>3. Industrial</p>
        <p>4. ventilation</p>
        <p>5. burning coal</p>
        <p>6. Beijing</p>
        <p>7. smoke from factories</p>
        <p>8. industrial and developing</p>
        <p>9. food supply</p>
        <p>10. urban centres</p>
      </div>
    </div>
  );
}

export default Reading;
