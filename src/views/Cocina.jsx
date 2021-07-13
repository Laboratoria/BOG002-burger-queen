/* eslint-disable no-unused-vars */
import Header from "../layout/Header";
import { Fragment } from "react";
import { useState, useEffect } from "react";
import Pedidos from "../Componentes/Pedidos";
import firebaseConfig from "../firebaseConfig";
import firebase from "firebase";
import "firebase/firestore";
import { Grid } from "@material-ui/core";

const firestore = firebase.firestore();

const Cocina = () => {
  const [pedidos, setPedidos] = useState([]);
  useEffect(() => {
    firestore.collection("Pedidos").onSnapshot((snap) => {
      const documents = [];
      snap.forEach((doc) => {
        documents.push({id: doc.id, ...doc.data() });
      });
      setPedidos(documents);
    });
  }, [pedidos]);

  return (
    <Fragment>
      <Header />
     <Grid container spacing={1}>
      {pedidos.map((pedido) => (
        <Grid item key={pedido.id} xs={6} md={4} lg={3}>
        <Pedidos pedido={pedido} />
        </Grid>
      ))}
      </Grid>
    </Fragment>
  );
};

export default Cocina;
