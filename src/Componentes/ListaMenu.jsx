import React, { useState, useEffect } from "react";

const ListaMenu = () => {
  const [desayuno, setDesayuno] = useState([]);
  

  useEffect(() => {
    data();
  }, []);
  const data =() => {
    fetch('./menu.json').then(response => {
    console.log(response);
    return response.json();
  }).then(data => {
    // Work with JSON data here
    console.log(data);
  }).catch(err => {
    // Do something for an error here
    
  });
}
  
  return (
    <div>
      <h1>Menu</h1>
      <ul>
        {desayuno.map(item =>(
          <li  key="item.id">{item.name}</li>
        ))}
      </ul>
      
    </div>
  );
};

export default ListaMenu;
