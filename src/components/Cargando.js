import React from 'react'
import './css/Cargando.css';
import logospidey from './img/logospidey.png';

const Cargando = () => {
    return (
        <div className="contenedorCargando">
            <img src={logospidey} alt="Cargando..." className="logoCargando"/>
        </div>
    )
}

export default Cargando;
