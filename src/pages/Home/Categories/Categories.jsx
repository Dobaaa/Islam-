import React from "react";
import "./Categories.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Card from "../../../components/Cards/Card";
const Categories = () => {
  return (
    <div className="Categories pt-20">
      <div className="cate-head flex justify-evenly pt-8">
        <h4 className="font-bold">Get the right aqeedah </h4>
        <div className="flex gap-5">
          <div className="relative group">
            <button className="hover:text-[var(--main)]">
              Tawheed <FontAwesomeIcon icon={faCaretDown} />
            </button>
            <div className="absolute hidden group-hover:block bg-gray-800 text-white py-2 mt-1 rounded shadow-lg">
              <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                Tawheed
              </a>
            </div>
          </div>
          <span className="text-[var(--blue)]">See all</span>
        </div>
      </div>
      <div className="Cate-Cards">
        <Card />
      </div>
    </div>
  );
};

export default Categories;