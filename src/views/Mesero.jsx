
import React from 'react';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Header from '../layout/Header';
import Styles from "../App.Styles"


export default function Mesero() {
  const classes = Styles();
  return (
    <Grid className={classes.rootM} >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={6}>
        <Button variant="contained" color="primary"className={classes.button}>Menú</Button>        
        </Grid>
        <Grid item xs={6}>
        <Button variant="contained" color="primary"className={classes.button}>Pedidos</Button>    
        </Grid>
        <Grid item xs={3}>
        <Button variant="contained" color="primary"className={classes.button}>Desayunos</Button>
        </Grid>
        <Grid item xs={3}>
        <Button variant="contained" color="primary"className={classes.button}>Almuerzo/otros</Button>
        </Grid>
        <Grid item xs={3}>
        <Button variant="contained" color="primary"className={classes.button}>Pedidos en preparacion</Button>
        </Grid>
        <Grid item xs={3}>
        <Button variant="contained" color="primary"className={classes.button}>Pedidos Listos</Button>
        </Grid>
      </Grid>
      </Grid>
   
  );
}



