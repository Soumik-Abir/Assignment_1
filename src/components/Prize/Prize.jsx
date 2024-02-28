import React from "react";
import trofi from "../../assets/1.png";
import reward from "../../assets/2.png";
import "./Prize.css";

const Prize = () => {
  return (
    <div className="prize-container">
      <div className="trofi-container">
        <img src={trofi} className="trofi-image" alt="Trophy" />
      </div>
      <div className="text-container">
        <p>
          <strong>
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </strong>
        </p>
        <ul>
          <li>
            C.R.I.'s energy efficient products are well recognized by various
            Government Institutions, as trustworthy products for various
            projects across the globe to save energy.
          </li>
          <li>
            C.R.I. is the highest contributor in the country for the projects of
            EESL (Energy Efficiency Services Limited) to replace the old
            inefficient pumps with 5 Star rated energy efficient smart pumps
            with IoT enabled control panel.
          </li>
        </ul>
        <div>
          <img src={reward} className="reward-image" alt="Reward" />
        </div>
        <p>
          Government of India has awarded the "
          <strong>National Energy Conservation Award 2018</strong>". Mr. G.
          Selvaraj, Joint Managing Director of C.R.I. Group received the award
          from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar
          Singh, Honorable Minister of State.
        </p>
      </div>
    </div>
  );
};

export default Prize;
