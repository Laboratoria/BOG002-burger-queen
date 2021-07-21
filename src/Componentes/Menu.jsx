import React, { useEffect, useState, Fragment } from "react";
import FormMenu from "../Componentes/FormMenu";
import { Grid, List, Button } from "@material-ui/core";
import { MenuItem } from "./MenuItem";
import Styles from "../App.Styles";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Cocina from "../views/Cocina"


const Menu = ({ pedido, setPedido }) => {
  const [open, setOpen] = React.useState(false);
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("./menu.json")
      .then((response) => response.json())      
      .then((data) => setMenu(data));
  }, []);
  const classes = Styles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Fragment>
      <Button
      onClick={handleOpen}
        fullWidth
        variant="contained"
        color="primary"
        className={classes.button}
      >
        Estado Pedidos
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Cocina/>
          </div>
        </Fade>
      </Modal>


      <h1 align="center">
        Menu
      </h1>
      <Grid container spacing={1}>
        <Grid item xs={12} md={4} lg={6}>
          <h3>
            {Object.keys(menu).map((item, index) => (
              <MenuItem
                pedido={pedido}
                setPedido={setPedido}
                key={`menuItem-${index}`}
                menuItem={menu[item]}
                titulo={item}
              />
            ))}
          </h3>
        </Grid>
        <Grid item xs={12} md={8} lg={6}>
          <FormMenu pedido={pedido} setPedido={setPedido} />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Menu;
