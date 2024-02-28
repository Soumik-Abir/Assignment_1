import React from "react";
import machine from "../../assets/3.png";
import "./Machine.css"; // Import your CSS file for styling

const Machine = () => {
  return (
    <div className="machine-container">
      <p>
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
        RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
        POWER FOR THE NATION.
      </p>
      <div className="machine-image-container">
        <img src={machine} className="machine-image" alt="Machine" />
      </div>
      <p>
        Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
        Solar Systems - Motors
      </p>
      <div className="red-line"></div>
    </div>
  );
};

export default Machine;
