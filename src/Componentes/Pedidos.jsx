import { Fragment, useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Typography } from "@material-ui/core";
import { CardActions } from "@material-ui/core";
import Styles from "../App.Styles";
import { CardActionArea } from "@material-ui/core";
import { useFirestore } from "reactfire";

const Pedidos = ({ pedido, setPedidos }) => {
  const classes = Styles();
  const db = useFirestore();
  const { cliente, mesa, productos, estado, terminado } = pedido;

  function setEstado(estadoActual) {
    db.collection("Pedidos").doc(pedido.id).update({
      estado: estadoActual,
    });
  }

  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!timerOn) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <Fragment>
      {terminado && <div></div>}
      {!terminado && (
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
              onClick={() => {
                setEstado(false);
                setTimerOn(false);
              }}
              className={classes.button}
            >
              Terminado
            </Button>
            <Button
              variant="contained"
              size="small"
              color="primary"
              onClick={() => {
                setEstado(true);
                setTimerOn(true);
              }}
              className={classes.button}
            >
              Aceptar
            </Button>
            <div className="Timers">
              <div id="display">
                <span>
                  {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
                </span>
                <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
              </div>
            </div>
          </CardActions>
        </Card>
      )}
    </Fragment>
  );
};

export default Pedidos;
