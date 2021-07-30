
function EstadoOrden (props) {
    const estado= props.estado;
    if (estado) {
      return (
          <div>
              <p>En preparación...</p>
          </div>
      );
    }
    return (
        <div>
            <p>Terminado!</p>
        </div>
    );
  }
  export default EstadoOrden;
