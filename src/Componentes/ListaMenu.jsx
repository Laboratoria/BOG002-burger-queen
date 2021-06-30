
import React, { useEffect, useState } from "react";

const ListaMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    
      fetch("./menu.json")
      .then((response) => response.json())          
      .then((data) => {
        console.log(data);
        setMenu(data[0])
        
      });      
  },[])

  return (
    <div >
      <div>
        <div>
        <h1>Menu</h1>
      
      {Object.keys(menu).map((item, index)=>(
        <div>
        <h2 key={item}>{item}</h2> 
        <ul>
          {Object.keys(menu[item]).map((item1, index1)=>(
           <li key={item1}>{item1}{[item1.precio]}</li> 
           
          ))}
        </ul>
        </div>                       
                    
        ))}      
        
        </div>
      </div>
    
     
      </div>
      
    
  );
};

export default ListaMenu;


// import React, { useEffect, useState } from "react"

// function usePostres() {

// 	const [postres, setPostres] = useState([])

// 	useEffect(() => {
// 		fetch("./menu.json")
// 		.then(response => response.json())
// 		.then(datos => {
// 			setPostres(datos)
// 		})
// 	}, [])

// 	return postres
// }

// export default function ListaMenu() {

// 	const postres = usePostres()

// 	return (

// 		<div className="container mt-5" align="center">
      
// 	      <h4>Lista de Postres</h4>
	        
// 	      <div className="row">

// 	        <div className="col-md-12">

// 	          <table className="table table-bordered">
// 	            <thead className="thead-dark">
// 	              <tr>
// 	                <th scope="col">ID</th>
// 	                <th scope="col">Nombre</th>
// 	                <th scope="col">Stock</th>
// 	                <th scope="col">Precio</th>
// 	                <th scope="col">Imagen</th>
// 	              </tr>
// 	            </thead> 
// 	            <tbody>

// 	            {postres.map((item, index) => (

// 	              <tr key={zIndex}>
	                
	                
// 	                <td>{item}</td>
	                
// 	              </tr>

// 	            ))}

// 	            </tbody>

// 	          </table>

// 	        </div>

// 	      </div>

	      
        
//     	</div>

// 	)
//               }
