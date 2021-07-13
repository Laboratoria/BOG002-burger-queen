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
    marginBottom: "25px"
    
  },
  rootC: {   
    maxWidth: 250,
    flexGrow: 1,
    padding: theme.spacing(2), 
    display: "flex",
    flexDirection: "column",
      
   
  },  
  rootPA:{
    backgroundColor: '#C62020',
    color:"#FFFFFF"
  },
  rootPT:{
    backgroundColor: '#FFFFFF',   
  },
  visible:{
    display: "block"
  },
  novisible:{
    display: "none"
  }
  
  
  
}));

export default Styles;
