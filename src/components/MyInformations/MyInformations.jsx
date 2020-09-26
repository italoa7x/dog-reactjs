import React from "react";
import { GitHub, Instagram } from "@material-ui/icons";

import "./styles.css";

const MyInformations = (props) => {
  return (
    <div className="my-informatios">
      <span>
        <a>
          Feito por: <strong>{props.name}</strong>
        </a>
        <a href={props.github} target="_blank">
          <GitHub className="icon" fontSize="small" />
        </a>
        <a href={props.instagram} target="_blank">
          <Instagram className="icon" fontSize="small" />
        </a>
      </span>
    </div>
  );
};

export default MyInformations;
