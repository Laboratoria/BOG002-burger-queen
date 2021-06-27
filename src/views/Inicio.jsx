import { Grid, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Styles from "../App.Styles"

export const Inicio = () => {
   const classes = Styles();
  return (

    <Grid className={classes.root} >
      <Grid className={classes.div} >
        <Link to="/mesero">
          <Button variant="contained" color="primary" className={classes.button}>
            Mesero
          </Button>
        </Link>
      </Grid>
      <Grid className={classes.div} >
        <Link to="/cocina">
          <Button variant="contained" color="primary" className={classes.button}>
            Cocina
          </Button>
        </Link>
      </Grid> 
      </Grid>     
  );
    
};
 