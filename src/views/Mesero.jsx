import Menu from "../componentes/Menu"
import React, { useState, Fragment } from "react";
import Header from "../layout/Header";




export default function Mesero() {
  
  const [pedido, setPedido] = useState([]);
  

  return (
    <Fragment>
      <Header />
      <Menu pedido={pedido} setPedido={setPedido} />
     
    </Fragment>
  );
}
