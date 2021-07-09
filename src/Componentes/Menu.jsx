import React, { useEffect, useState, Fragment } from "react";
import { Button } from "@material-ui/core";
import Styles from "../App.Styles";
import FormMenu from "../Componentes/FormMenu";
import { Grid, Card, CardContent, List, ListItem } from "@material-ui/core";

const Menu = ({ pedido, setPedido }) => {
  const [menu, setMenu] = useState([]);
  const classes = Styles();
  useEffect(() => {
    fetch("./menu.json")
      .then((response) => response.json())
      .then((data) => {
        setMenu(data[0]);
      });
  }, []);

  const agregarPedido = (precio, producto) => {
    let agregar = [...pedido];
    agregar.push({ producto, precio, cantidad: 0});
    setPedido(agregar);
  };
  const [show, setShow] = useState(false);
  
  return (
    <Fragment>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <List>
            {Object.keys(menu).map((item, index) => (
              <li key={item}>
                <Button
                  onClick={() => setShow(!show)}
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  {item}
                </Button>
                {show && (
                  <Card>
                    {Object.keys(menu[item]).map((item1, index1) => (
                      <CardContent key={item1}>
                        {item1}

                        <List>
                          {Object.keys(menu[item][item1]).map(
                            (item2, index2) => (
                              <ListItem key={item1}>
                                ${menu[item][item1][item2]}
                              </ListItem>
                            )
                          )}
                        </List>
                        <button
                          onClick={() => {
                            agregarPedido(menu[item][item1]["precio"], item1);
                          }}
                        >
                          Agregar
                        </button>
                      </CardContent>
                    ))}
                  </Card>
                )}
              </li>
            ))}
          </List>
        </Grid>
        <Grid item xs={9}>
         <FormMenu pedido={pedido} />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Menu;
