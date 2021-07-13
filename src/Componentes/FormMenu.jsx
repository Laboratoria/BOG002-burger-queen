/* eslint-disable no-unused-vars */
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Styles from "../App.Styles";
import { Button } from "@material-ui/core";
import { useFirestore } from "reactfire";
import firebase from "firebase/firestore";
import React, { useState, Fragment } from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}
function priceRow(cantidad, unidad) {
  return cantidad * unidad;
}

function subtotal(producto) {
  return producto
    .map((item) => priceRow(item.cantidad, item.precio))
    .reduce((suma, i) => suma + i, 0);
}
const TAX_RATE = 0.08;

const FormMenu = ({ pedido, setPedido }) => {
  const classes = Styles();
  const db = useFirestore();
  const initialValues = { cliente: "", mesa: "" };
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("Pedidos")
      .doc()
      .set({
        ...values,
        productos: pedido,
      });
    setValues(initialValues);
  };

  function incre(producto) {
    console.log(producto);
    producto.cantidad = producto.cantidad + 1;
  }

  function decre(producto) {
    console.log(producto);
    producto.cantidad = producto.cantidad - 1;
  }
  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <TableContainer component={Paper}>
          <TextField
            value={values.cliente}
            name="cliente"
            id="outlined-basic"
            label="Cliente"
            variant="outlined"
            onChange={handleChange}
          ></TextField>
          <TextField
            value={values.mesa}
            name="mesa"
            id="outlined-basic"
            label="Mesa"
            variant="outlined"
            onChange={handleChange}
          ></TextField>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={3}>
                  Detalles
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Pedido</TableCell>
                <TableCell align="right">Precio</TableCell>
                <TableCell align="center">Unidad</TableCell>
                <TableCell align="right">Suma</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pedido.map((producto, index) => (
                <TableRow key={index}>
                  <TableCell align="left">{producto.producto}</TableCell>
                  <TableCell align="right">{producto.precio}</TableCell>
                  <TableCell align="center">
                    <Button size="small" onClick={() => decre(producto)}>
                      -
                    </Button>
                    {producto.cantidad}
                    <Button size="small" onClick={() => incre(producto)}>
                      +
                    </Button>
                  </TableCell>
                  <TableCell align="right">
                    {ccyFormat(priceRow(producto.cantidad, producto.precio))}
                  </TableCell>
                  <TableCell>
                    <Button size="small">
                      <DeleteIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell rowSpan={3} />
                <TableCell colSpan={2}>Subtotal</TableCell>
                <TableCell align="right">
                  {ccyFormat(subtotal(pedido))}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>ImpConsumo</TableCell>
                <TableCell align="right">{`${(TAX_RATE * 100).toFixed(
                  0
                )} %`}</TableCell>
                <TableCell align="right">
                  {ccyFormat(subtotal(pedido) * TAX_RATE)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={2}>Total</TableCell>
                <TableCell align="right">
                  {ccyFormat(subtotal(pedido) * (1 + TAX_RATE))}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="right" colSpan={2}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                  >
                    Cancelar
                  </Button>
                </TableCell>
                <TableCell align="right" colSpan={2}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.button}
                  >
                    Enviar
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </form>
    </Fragment>
  );
};

export default FormMenu;
