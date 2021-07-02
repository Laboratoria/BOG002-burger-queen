import React, { useEffect, useState, Fragment } from "react";
import { Button } from "@material-ui/core";
import Styles from "../App.Styles";

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
  };

  return (
    <Fragment>
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
                  {item1} ${menu[item][item1]["precio"]}
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
    </Fragment>
  );
};

export default Menu;
