import { Fragment, useState } from "react";
import { Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Typography } from "@material-ui/core";
import { CardActions } from "@material-ui/core";
import Styles from "../App.Styles";
import { CardActionArea } from "@material-ui/core";

const Pedidos = ({ pedido }) => {
  const classes = Styles();
  const [estado, setEstado]= useState(false)
  const { cliente, mesa, productos} = pedido;  
  return (
    <Fragment>
      <Card className={`${classes.rootC} ${estado ? classes.rootPA:classes.rootPT}`}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom color="textSecondary">
              {cliente}
            </Typography>
            <Typography gutterBottom color="textSecondary">
              {mesa}
            </Typography>
            <Typography variant="body2" component="p">
              {productos.map(producto=>(
                <ul>
                <li>{producto.producto}</li>
                <li>{producto.cantidad}</li>
                </ul>
                
                
              ))}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={()=> setEstado(false)}>
            Terminado
          </Button>
          <Button onClick={()=> setEstado(true)} size="small" color="primary">
            Aceptar
          </Button>
        </CardActions>
      </Card>
    </Fragment>
  );
};

export default Pedidos;
