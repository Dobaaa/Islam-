import React from "react";
import "./Info.css";
import MainImg from "../../../assets/Group 11355.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { useRef, useState } from "react";
import { Pagination } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Info = () => {
  return (
    <>
      <div className="Info-parent flex flex-col items-center justify-center  ">
        <h2 className="font-bold justify-start">
          What students of knowledge have to say
        </h2>
        <div className="Info-container p-28 bg-[var(--white)] flex flex-col lg:flex-row justify-center items-center gap-5">
          <div className="info-design ">
            <img src={MainImg} alt="" />
          </div>
          <div className="info-txt ">
            <Swiper
              direction={"vertical"}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <h2 className="font-bold text-2xl">Ahmed Jamal Hussien</h2>
                <Link className="font-bold text-xl">elhwtdoba@gmail.com</Link>
                <p className="font-medium mt-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
                <div className="info-socail flex gap-3 mt-3">
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
              </SwiperSlide>
              <SwiperSlide>
                <h2 className="font-bold text-2xl">Ahmed Jamal Hussien</h2>
                <Link className="font-bold text-xl">elhwtdoba@gmail.com</Link>
                <p className="font-medium mt-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
                <div className="info-socail flex gap-3 mt-3">
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
              </SwiperSlide>
              <SwiperSlide>
                <h2 className="font-bold text-2xl">Ahmed Jamal Hussien</h2>
                <Link className="font-bold text-xl">elhwtdoba@gmail.com</Link>
                <p className="font-medium mt-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
                <div className="info-socail flex gap-3 mt-3">
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
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <h2 className="font-bold text-2xl">Ahmed Jamal Hussien</h2>
                <Link className="font-bold text-xl">elhwtdoba@gmail.com</Link>
                <p className="font-medium mt-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
                <div className="info-socail flex gap-3 mt-3">
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
              </SwiperSlide>
            </Swiper>

            {/* */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
