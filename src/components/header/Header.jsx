import React from "react";
import Typography from "@material-ui/core/Typography";
import pet from "../../assets/pet.png";

import MenuSelection from "../MenuSelection/MenuSelection";

import "./styles.css";

const Header = () => {
  return (
    <div className="header">
      <Typography variant="h2">Amigo cão  <img src = {pet} alt="Amigo cão"></img> </Typography>
        <Typography variant="subtitle1" >
          Um mundo repleto de dogs. Procure o seu favorito!
        </Typography>
        <div className="menu-selection">
          <MenuSelection />
        </div>
    </div>
  );
};
export default Header;
