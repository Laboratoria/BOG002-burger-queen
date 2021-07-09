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
    marginBottom: "12px",
  },
  button: {
    backgroundColor: "#C62020",
    marginTop: "12px",
  },
  rootC: {
    maxWidth: 275,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  rootG: {
    flexGrow: 4,
    
  },
  rootPA:{
    backgroundColor: '#C62020',
    color:"#FFFFFF"
  },
  rootPT:{
    backgroundColor: '#FFFFFF',
   
  }
  
  
  
}));

export default Styles;
