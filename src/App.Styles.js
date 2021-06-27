import { makeStyles } from "@material-ui/core/styles";




const Styles = makeStyles({
  root: {
    backgroundColor: "#E5E5E5",
    backgroundImage: `url()`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
  },
  Primary:{
     backgroundColor: "#C62020"
  },
    
  div: {    
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
      width: "300px",
      backgroundColor: "#C62020",
    marginTop: "12px"
  },
  rootM: {
    backgroundColor: "#E5E5E5",
    height: "100vh",      
  },
});

export default Styles


