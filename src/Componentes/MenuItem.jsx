import React, { useState } from "react";
import { Button } from "@material-ui/core";
import Styles from "../App.Styles";
import { CardContent, Card, Grid } from "@material-ui/core";

export const MenuItem = ({ menuItem, titulo, setPedido, pedido }) => {
  const classes = Styles();
  const [show, setShow] = useState(false);

  const agregarPedido = (precio, producto) => {
    let agregar = [...pedido];
    agregar.push({ producto, precio, cantidad: 1 });
    setPedido(agregar);
  };

  return (
    <div>
      <Button
        fullWidth
        onClick={() => setShow(!show)}
        variant="contained"
        color="primary"
        className={classes.button}
      >
        {titulo}
      </Button>
      {show && (
        <Card>
          <Grid container spacing={1}>
            {Object.keys(menuItem).map((item1, index1) => (
              <Grid item key={index1} xs={6} md={6} lg={3}>
                <CardContent key={item1}>
                  {item1}
                  
                    {Object.keys(menuItem[item1]).map((item2, index2) => (
                      <h4 key={index2}>${menuItem[item1][item2]}</h4>
                    ))}
                 
                  <Button
                    className={classes.button}
                    onClick={() => {
                      agregarPedido(menuItem[item1]["precio"], item1);
                    }}
                  >
                    Agregar
                  </Button>
                </CardContent>
              </Grid>
            ))}
          </Grid>
        </Card>
      )}
    </div>
  );
};
