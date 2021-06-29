import TextField from '@material-ui/core/TextField';


const  Input = (props)=>{
    const {name, variant, label, value, onChange, error =null, ...other} = props;

    return(
        <TextField
        variant={variant || "outlined"} 
        label={label}
        name={name}
        Value={value}
        onChange={onChange}
        {...other}
        {...(error && { error: true, helperText:Error})}
        />


    )

}

export default Input