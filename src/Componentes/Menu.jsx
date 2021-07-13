import React, { useEffect, useState, Fragment } from "react";
import FormMenu from "../Componentes/FormMenu";
import { Grid, List } from "@material-ui/core";
import { MenuItem } from "./MenuItem";

const Menu = ({ pedido, setPedido }) => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("./menu.json")
      .then((response) => response.json())
      .then((data) => setMenu(data));
  }, []);

  return (
    <Fragment>
      <Grid container spacing={1}>
        <Grid item xs={12} md={4} lg={6}>
          <List>
            {Object.keys(menu).map((item, index) => (
              <MenuItem
                pedido={pedido}
                setPedido={setPedido}
                key={`menuItem-${index}`}
                menuItem={menu[item]}
                titulo={item}
              />
            ))}
          </List>
        </Grid>
        <Grid item xs={12} md={8} lg={6}>
          <FormMenu pedido={pedido} setPedido={setPedido} />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Menu;
