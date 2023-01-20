import React from "react";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Diabetes management made simple!</h1>
      <p>
        It's important to work closely with a healthcare provider to develop an
        individualized treatment plan. We'll help you organize the prescription
        history.
      </p>

      <div className="gpt3__header-content__input">
        <Link to="/signup">
        <div className="gpt3__header-content__input-div">
          <button className="gpt3__header-content__input-ask" type="button">
            Get Started
          </button>
          </div>
        </Link>
        <a className="see-anchor" href="#features">
          
          <div className="gpt3__header-content__input-text">
          <button className="gpt3__header-content__input-play" type="button">
            ▶
          </button>
            <p>See how it works!</p>
          </div>
        </a>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} alt="" />
        <p>1000+ happy users!</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} alt="" />
    </div>
  </div>
);

export default Header;
