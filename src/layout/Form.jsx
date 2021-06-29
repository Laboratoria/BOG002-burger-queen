import Styles from "../App.Styles";

export default function Form(props){
    const classes = Styles();
    const {children, ...other} = props;
    return(
        <form className={classes.form} no Validate autoComplete="of" {...other}>
           {props.children}
        </form>
    )
}




