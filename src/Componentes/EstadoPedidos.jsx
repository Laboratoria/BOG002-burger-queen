import { useState, useEffect, Fragment } from "react";
import "firebase/firestore";
import firebase from "firebase";
import { Grid, CardContent, Typography, Card } from "@material-ui/core";
import EstadoOrden from "./Estado";

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
      <Grid container spacing={1}>
        {pedidos.map((pedido) => (
          <Grid item key={pedido.id}>
            <Card>
              <CardContent>
                <Typography>{pedido.cliente}</Typography>
                <Typography>{pedido.mesa}</Typography>
              </CardContent>
              <EstadoOrden estado={pedido.estado}></EstadoOrden>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
};
