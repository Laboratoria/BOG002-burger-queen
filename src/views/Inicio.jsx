import { Link } from "react-router-dom";
import Styles from "../App.Styles";
import { Button, Grid } from "@material-ui/core";
import Header from "../layout/Header";

const Inicio = () => {
  const classes = Styles();
  return (
    <div>
      <Header />
      <Grid Container className={classes.root}>
        <Grid item xs={6}>
          <Link to="/mesero">
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Mesero
            </Button>
          </Link>
        </Grid>

        <Grid item xs={6}>
          <Link to="/cocina">
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Cocina
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default Inicio;
