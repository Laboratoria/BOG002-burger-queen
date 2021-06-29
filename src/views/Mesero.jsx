import React, { useState } from "react";
import { Button } from "@material-ui/core";
import Header from "../layout/Header";
import Styles from "../App.Styles";
import Menu from "../Componentes/Menu";

export default function Mesero() {
  const classes = Styles();
  const [condition, setCondition] = useState(false);
  return (
    <div containder className={classes.rootM}>
      <Header />

      <Button
        onClick={() => setCondition(!condition)}
        variant="contained"
        color="primary"
        fullWidth
        className={classes.button}
      >
        {" "}
        Menú
      </Button>
      {condition && <Menu />}
    </div>
  );
}
