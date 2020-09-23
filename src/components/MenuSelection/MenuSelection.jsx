import React, { useState } from "react";

import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";
import { withStyles } from "@material-ui/core/styles";

import listDogs from "../../utils/listDogs";
import searchDog from "../../service/searchDog";


import "./styles.css";

const MenuSelection = () => {
  const [dog, setDog] = useState("");


  function handleDogSelect(event) {
    event.preventDefault();
    setDog(event.target.value);
    if(event.target.value !== ""){
      searchDog(event.target.value)
    }
  }

  const BootstrapInput = withStyles((theme) => ({
    root: {
      "label + &": {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: "relative",
      backgroundColor: theme.palette.background.paper,
      border: "1px solid #ced4da",
      fontSize: 16,
      padding: "10px 26px 10px 12px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      "&:focus": {
        borderRadius: 4,
        borderColor: "#80bdff",
        boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
      },
    },
  }))(InputBase);

  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));

  const classes = useStyles();

  return (
    <div className="select-dog">
      <Typography variant="subtitle1">Selecione uma raça</Typography>
      <FormControl className={classes.margin}>
        <NativeSelect
          variant="outlined"
          value={dog}
          onChange={(e) => handleDogSelect(e)}
          input={<BootstrapInput />}
        >
          {
          listDogs.map((d) => (
              <option value={d} key={d}>
                  {d}
              </option>
          ))
          }
          
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default MenuSelection;
