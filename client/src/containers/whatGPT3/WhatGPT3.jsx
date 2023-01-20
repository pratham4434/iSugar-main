import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatGPT3.css";

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title="What is Diabetes and what measures should we take to safeguard ourselves? "
        text="Diabetes is a chronic metabolic disorder in which the body is unable to properly use and store glucose resulting in high blood sugar levels. It is caused by a lack of insulin production or the inability of the body to use insulin effectively, which leads to abnormal metabolism of carbohydrates and elevated levels of glucose in the blood."
      />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">
        Eating a healthy diet and regularly exercising can help control blood
        sugar levels.
      </h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature
        title="Diet Maintainence"
        text="A diet for diabetes should include whole foods such as fruits, vegetables, whole grains, lean protein, and healthy fats. Avoid processed foods and added sugars."
      />
      <Feature
        title="Exercises"
        text="Aerobic exercise (such as walking, cycling, swimming), strength training, and stretching are recommended for people with diabetes."
      />
      <Feature
        title="Feet Attention"
        text="Diabetes can cause damage to blood vessels and nerves in the feet, leading to a lack of sensation and increased risk of foot ulcers and amputations. Regular foot exams and proper foot care are essential for people with diabetes."
      />
    </div>
  </div>
);

export default WhatGPT3;
