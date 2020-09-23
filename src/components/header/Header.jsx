import React from "react";
import Typography from "@material-ui/core/Typography";
import logo from "../../assets/dog.svg";
import "./styles.css";

const Header = () => {
  return (
    <div className="header">
      <Typography variant="h2">Amigo cão  <img src = {logo} alt="Amigo cão"></img> </Typography>
        <Typography variant="subtitle1" >
          Um mundo repleto de dogs. Procure o seu favorito!
        </Typography>
    </div>
  );
};
export default Header;
