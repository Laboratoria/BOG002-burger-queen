import Menu from "../Componentes/Menu";
import React, {useState} from "react"
import Header from "../layout/Header";
import { Button, Grid } from "@material-ui/core";
import Styles from "../App.Styles";



export default function Mesero() {
  const classes = Styles();
  const [pedido, setPedido] =  useState([])
 
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
        <Grid item xs ={12}>
          <Menu pedido={pedido}
          setPedido={setPedido} />
        </Grid>
        
      </Grid>
    </div>
  );
}
