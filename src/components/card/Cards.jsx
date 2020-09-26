import React from "react";

import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";

import "./styles.css";
const Cards = (props) => {
  return (
    <div className="card">
      <Card>
        <CardMedia component="img" image={props.img} />
      </Card>
    </div>
  );
};

export default Cards;
