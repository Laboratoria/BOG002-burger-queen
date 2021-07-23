import { useState, useEffect, Fragment } from "react";
import "firebase/firestore";
import firebase from "firebase";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
} from "@material-ui/core";

const firestore = firebase.firestore();

export const EstadoPedidos = () => {
  const [pedidos, setPedidos] = useState([]);
  useEffect(() => {
    firestore.collection("Pedidos").onSnapshot((snap) => {
      const documents = [];
      snap.forEach((doc) => {
        documents.push({ id: doc.id, ...doc.data() });
      });
      setPedidos(documents);
    });
  }, [pedidos]);

  return (
    <Fragment>
      <Card>
        <CardActions>
          {pedidos.map((pedido) => (
            <CardActionArea item key={pedido.id}>
              <CardContent>
                <Typography>{pedido.cliente}</Typography>
                <Typography>{pedido.mesa}</Typography>
              </CardContent>
            </CardActionArea>
          ))}
        </CardActions>
      </Card>
    </Fragment>
  );
};
