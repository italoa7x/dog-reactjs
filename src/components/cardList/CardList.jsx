import React from "react";

import Cards from "../card/Cards";

import "./styles.css";

const CardList = (props) => {
  return (
    <div className="list-cards">
      {
        console.log(props.dogs)
      }
    </div>
  );
};
export default CardList;
