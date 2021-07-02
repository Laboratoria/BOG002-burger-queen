import Menu from "../Componentes/Menu";
import React, {useState} from "react"
import Header from "../layout/Header";
import { Button, Grid } from "@material-ui/core";
import Styles from "../App.Styles";
import { Pedidos } from "../Componentes/Pedidos";

export default function Mesero() {
  const classes = Styles();
  const [pedido, setPedido] =  useState([])
 console.log(pedido);
  return (
    <div>
      <Header />
      <Grid container>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          className={classes.button}
        >
          Menu
        </Button>
        <Grid item xs ={6}>
          <Menu pedido={pedido}
          setPedido={setPedido} />
        </Grid>
        <Grid item xs={6}>
        <Pedidos />
        </Grid>
      </Grid>
    </div>
  );
}
