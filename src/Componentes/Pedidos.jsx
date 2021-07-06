


const initialFormValues = {
  description: "",
};

export const Pedidos = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const { description } = formValues;
  const handleChange =(e)=>{
    const changedFormValues ={...formValues, [e.target.name]: e.target.value}
setFormValues(changedFormValues)
  }
  const handleSubmit =(e) =>{
    e.preventDefault()
    console.log();
   

  }
    
  return (
    
    <div>
      <form ></form>

    </div>
        
         
  )    
           
      
};
