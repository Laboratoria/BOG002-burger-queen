import { makeStyles } from "@material-ui/core/styles";
import Fondo from "./Img/Fondo.jpg"

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
  },
  button: {
    backgroundColor: "#C62020",
    marginTop: "12px",
  },
  
}));

export default Styles;
