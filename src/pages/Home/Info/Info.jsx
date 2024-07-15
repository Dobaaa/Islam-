import React from "react";
import "./Info.css";
import MainImg from "../../../assets/main.png";
import SecodImg from "../../../assets/Ellipse 78.png";
import ThirdImg from "../../../assets/Ellipse 76.png";
import FourthImg from "../../../assets/Ellipse 77.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const Info = () => {
  return (
    <div className="Info-parent flex flex-col items-center justify-center  ">
      <h2>What students of knowledge have to say</h2>
      <div className="Info-container p-28 bg-[var(--white)] flex justify-center items-center gap-5">
        <div className="info-design ">
          <div className="img-parent">
            <img src={MainImg} alt="" />
            <img src={SecodImg} alt="" />
            <img src={ThirdImg} alt="" />
            <img src={FourthImg} alt="" />
          </div>
        </div>
        <div className="info-txt">
          <h2>Ahmed Jamal Hussien</h2>
          <Link>elhwtdoba@gmail.com</Link>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
          <div className="info-socail">
            <FontAwesomeIcon
              icon={faTwitter}
              className="text-2xl cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-2xl cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faYoutube}
              className="text-2xl cursor-pointer"
            />
          </div>
        </div>
        <div className="slide-info"></div>
      </div>
    </div>
  );
};

export default Info;
