import React from "react";
import {FaStarHalfAlt} from "react-icons/fa";
import {FaStar} from "react-icons/fa";

const Card = () => {
  return (
    <div className="card-container">
      <div className="item1">
        <img src="./images/bunny.jpg" alt="" />
        <div>
          <h1>Bunny bunny</h1>
          <p>Le petit lapin mignon</p>
        </div>
      </div>
      <div className="item2">
        <div>
          <h4>Rate this bunny</h4>
        </div>
        <div>

           <FaStar/>
           <FaStar/>
           <FaStar/>
           <FaStar/>
           <FaStarHalfAlt/>
        </div>
      </div>
    </div>
  );
};

export default Card;
