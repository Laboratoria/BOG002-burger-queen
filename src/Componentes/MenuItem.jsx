import React, { useState } from "react";
import { Button } from "@material-ui/core";
import Styles from "../App.Styles";
import { CardContent, Card, List, ListItem } from "@material-ui/core";

export const MenuItem = ({ menuItem, titulo, setPedido, pedido }) => {
  const classes = Styles();
  const [show, setShow] = useState(false);
  const agregarPedido = (precio, producto) => {  
    let agregar = [...pedido];
    agregar.push({ producto, precio, cantidad: 1});
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
          {Object.keys(menuItem).map((item1, index1) => (
            <CardContent key={item1}>
              {item1}
              <List>
                {Object.keys(menuItem[item1]).map((item2, index2) => (
                  <ListItem key={item1}>${menuItem[item1][item2]}</ListItem>
                ))}
              </List>
              <button
                onClick={() => {
                  agregarPedido(menuItem[item1]["precio"], item1);
                }}
              >
                Agregar
              </button>
            </CardContent>
          ))}
        </Card>
      )}
    </div>
  );
};
