/* eslint-disable no-unused-vars */
import Header from "../layout/Header";
import { Fragment } from "react";
import { useState, useEffect } from "react";
import Pedidos from "../Componentes/Pedidos";
import firebaseConfig from "../firebaseConfig";
import firebase from "firebase";
import "firebase/firestore";

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

      {pedidos.map((pedido) => (
        <Pedidos key={pedido.id} pedido={pedido} />
      ))}
    </Fragment>
  );
};

export default Cocina;
