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

const FormMenu = ({ pedido }) => {
  const classes = Styles();
  return (
    <div>
      <form>
        <TableContainer component={Paper}>
          <TextField id="outlined-basic" label="Cliente" variant="outlined" />
          <TextField id="outlined-basic" label="Mesa" variant="outlined" />
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={3}>
                  Detalles
                </TableCell>
                <TableCell align="right">Precio</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Pedido</TableCell>
                <TableCell align="right">Precio</TableCell>
                <TableCell align="right">Unidad</TableCell>
                <TableCell align="right">Suma</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pedido.map((producto) => (
                <TableRow key={producto}>
                  <TableCell>{producto.producto}</TableCell>
                  <TableCell align="right">{producto.precio}</TableCell>
                  <TableCell align="right">{producto.cantidad}</TableCell>
                  <TableCell align="right">
                    {ccyFormat(priceRow(producto.cantidad, producto.precio))}
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
                    Enviar
                  </Button>
                </TableCell>
                <TableCell align="right" colSpan={2}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                  >
                    Cancelar
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </form>
    </div>
  );
};

export default FormMenu;
