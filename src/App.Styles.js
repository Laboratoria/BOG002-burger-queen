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
    flexDirection: "row",
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

  form: {
    "& .MuiFormControl-form": {
      with: "90%",
      margin: theme.spacing(1),
    },
    rootM: {
      backgroundColor: "#E5E5E5",

      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
    },
    input: {
      marginTop: "12px",
    },
    listroot: {
      marginTop: theme.spacing(1),
      maxHeigth: 450,
      overflow: "auto",
      "& li:hover": {
        cursor: "pointer",
        backgroundColor: "white",
      },
      "& li:hover .MuiButtonBase-listroot": {
        display: "block",
        color: "#000",
      },
      "& .MuiButtonBase-listroot": {
        display: "none",
      },
      "& .MuiButtonBase-listroot:hover": {
        backgroundColor: "tranparent",
      },
    },
  },
}));

export default Styles;
