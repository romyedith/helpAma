import React from 'react';

class Resultado extends React.Component {
  calcularPuntaje = () => {
    let puntajeTotal = 0;
    this.props.respuestas.forEach(respuesta => {
      puntajeTotal += respuesta.puntaje;
      console.log(respuesta.respuesta,respuesta.puntaje);
    });
    
    return puntajeTotal;
  }

  render() {
    const puntajeTotal = this.calcularPuntaje();
    return (
      <div>
        <h2>Tu puntaje total es: {puntajeTotal}</h2>
        {/* Aquí puedes mostrar más detalles sobre las respuestas si lo deseas */}
      </div>
    );
  }
}

export default Resultado;