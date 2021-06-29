
import { Link } from "react-router-dom";
import Styles from "../App.Styles";
import { Button } from "@material-ui/core";



 const Inicio  = () => {
  const classes = Styles();
  return (
        <div className={classes.root}>
        <Link to="/mesero">
          <Button
            variant="contained"
            color="primary"
            Size="medium"
            className={classes.button}
          >
            Mesero
          </Button>
        </Link>
      
      
        <Link to="/cocina">
          <Button
            variant="contained"
            color="primary"
            Size="medium"
            className={classes.button}
          >
            Cocina
          </Button>
        </Link>
        </div>
      
  );
};

export default Inicio
