import React from 'react'
import '../hojas-de-estilos/Boton.css'
import '../hojas-de-estilos/pantalla.css'
const Boton = (props) => {
    const esOperador = valor => {
        return isNaN(valor) && (valor !==".")&& (valor !=='=');
    }
  return (
    <div
        className={`boton-contenedor ${esOperador(props.children) ? 'operador':''}`.trimEnd()}
        onClick={()=>props.manejarClick(props.children)}>
        {props.children}
        
    </div>
  )
}

export default Boton