import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import Styles from "../App.Styles";
import FormMenu from "../Componentes/FormMenu";
import { Grid } from "@material-ui/core";

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

  const agregarPedido = (producto) => {
    let agregar = [...pedido];
    agregar.push(producto);
    setPedido(agregar);
    console.log(agregar);
  };

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <ul>
            {Object.keys(menu).map((item, index) => (
              <li key={item}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  {item}
                </Button>

                <ul>
                  {Object.keys(menu[item]).map((item1, index1) => (
                    <li key={item1}>
                      {item1}

                      <ul>
                        {Object.keys(menu[item][item1]).map((item2, index2) => (
                          <li key={item1}>
                            {menu[item][item1][item2]}
                            <button
                            
                              onClick={() => {
                                agregarPedido(item1);
                              }}
                            >
                              Agregar
                            </button>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Grid>
        <Grid item xs={6}>
          <FormMenu pedido={pedido} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Menu;
