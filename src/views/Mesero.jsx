import Menu from "../Componentes/Menu";
import React, { useState, Fragment } from "react";
import Header from "../layout/Header";
import { Grid } from "@material-ui/core";


export default function Mesero() {
  
  const [pedido, setPedido] = useState([]);

  return (
    <Fragment>
      <Header />
      <Grid container>
        <Grid item xs={12}>
          <Menu pedido={pedido} setPedido={setPedido} />
        </Grid>
      </Grid>
    </Fragment>
  );
}
