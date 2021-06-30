import { makeStyles } from "@material-ui/core/styles";




const Styles = makeStyles(theme =>({
  root: {
    backgroundColor: "#E5E5E5",
    backgroundImage: `url()`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  Primary:{
     backgroundColor: "#C62020"
  }, 
    button: {      
      backgroundColor: "#C62020",
    marginTop: "12px"
  },    
 
  form: {
    '& .MuiFormControl-form':{
      with: "90%",
      margin: theme.spacing(1)     
    },
    flex:{
    display: "flex",
    flexDirection:"row",
    justifyContent: "space-evenly",
    alignItems: "center",   
    },
input:{
  marginTop: "12px"
}
  
      
    },
}))

export default Styles
  
 

