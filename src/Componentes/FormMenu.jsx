import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const FormMenu = ({ pedido }) => {
  return (
    <div>
      <form>
      <input type="text"  label="cliente"/>
      <input type="text" label="mesa" />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={3}>
                Detalles
              </TableCell>
              <TableCell align="right">Precio</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Desc</TableCell>
              <TableCell align="right">Cantidad</TableCell>
              <TableCell align="right">Unidad</TableCell>
              <TableCell align="right">Suma</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pedido.map((producto) => (
              <TableRow key={producto}>
                <TableCell>{producto}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </form>
    </div>
  );
};

export default FormMenu;
