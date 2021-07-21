import { Fragment, useState } from "react";
import { Button} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Typography } from "@material-ui/core";
import { CardActions } from "@material-ui/core";
import Styles from "../App.Styles";
import { CardActionArea } from "@material-ui/core";
import { Cronometro } from "./Cronometro";

const Pedidos = ({ pedido }) => {
  const classes = Styles();
  const [estado, setEstado] = useState(false);
  const { cliente, mesa, productos } = pedido;
  return (
    <Fragment>
      <Card
        elevetion={2}
        className={`${classes.rootC} ${
          estado ? classes.rootPT : classes.rootPA
        }`}
      >
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom color="textSecondary">
              {cliente}
            </Typography>
            <Typography gutterBottom color="textSecondary">
              {mesa}
            </Typography>
            <Typography variant="body2" component="p">
              {productos.map((producto) => (
                <ul>
                  <li>{producto.producto}</li>
                  <li>{producto.cantidad}</li>
                </ul>
              ))}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            variant="contained"
            size="small"
            color="primary"
            onClick={() => setEstado(false)}
            className={classes.button}
          >
            Terminado
          </Button>
          <Button
            variant="contained"
            size="small"
            color="primary"
            onClick={() => setEstado(true)}
            className={classes.button}
          >
            Aceptar
          </Button>
        </CardActions>
        <Cronometro />
      </Card>

      
    </Fragment>
  );
};

export default Pedidos;
