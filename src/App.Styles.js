import { makeStyles } from "@material-ui/core/styles";
import Fondo from "../src/Img/Fondo.jpg";

const Styles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#E5E5E5",
    backgroundImage: `url(${Fondo})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  Primary: {
    backgroundColor: "#C62020",
    marginBottom: "12px",
  },
  button: {
    backgroundColor: "#C62020",
    marginBottom: "25px",
    color: "#ffff",
  },
  buttonID: {    
    border: "1px solid #C62020",
    width: "20px",
    height:"30px"
    
  },
  buttonE: {
    color: "#C62020",
  },
  text: {
    fontWeight: 700
  },
  img: {
    width: "100px",
    height: "100px"
  },
  
  rootC: {
    maxWidth: 250,
    flexGrow: 1,
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
  },
  rootPA: {
    backgroundColor: "#C62020",
    color: "#FFFFFF",
  },
  rootPT: {
    backgroundColor: "#FFFFFF",
  },

  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    alignItems: "center",
  },  
}));

export default Styles;
