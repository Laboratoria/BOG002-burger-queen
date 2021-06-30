import React, { useEffect, useState } from "react";
import FormMenu from "./FormMenu";
import { Button, Grid } from "@material-ui/core";
import Styles from "../App.Styles";

const Menu = () => {
  const classes = Styles();
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("./menu.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMenu(data[0]);
      });
  }, []);

  return (
    <div>
        
        <Grid container >
         <Grid item xs={3}>
        <FormMenu />
        </Grid>
        {Object.keys(menu).map((item, index) => (
            <Grid item xs={2} >
            <Button
              variant="contained"
              color="primary"
              Size="medium"
              className={classes.button}
              key={item}
            >
              {item}
            </Button>
            <ul>
              {Object.keys(menu[item]).map((item1, index1) => (
                <li key={item1}>
                  {item1}
                  {[item1.precio]}
                </li>
              ))}
            </ul>
            </Grid>
        ))}
        </Grid>
    </div>
  );
};

export default Menu;
