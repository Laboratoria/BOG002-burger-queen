import { Link } from "react-router-dom";
import { Fragment } from "react";
import Styles from "../App.Styles";
import { Button, Grid } from "@material-ui/core";
import Header from "../layout/Header";

const Home = () => {
  const classes = Styles();
  return (
    <Fragment>
      <Header />
      <Grid Container className={classes.root}>
        <Link to="/mesero">
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Mesero
          </Button>
        </Link>

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
    </Fragment>
  );
};

export default Home;
