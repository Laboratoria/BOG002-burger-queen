import { Link } from "react-router-dom";
import Styles from "../App.Styles";
import { Button, Grid } from "@material-ui/core";
import Header from "../layout/Header";

const Home = () => {
  const classes = Styles();
  return (
    <div>
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
    </div>
  );
};

export default Home;
