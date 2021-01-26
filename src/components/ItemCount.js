import React, { useState, useContext } from 'react';
import { contextoCarrito } from './CartContext';
import '../css/ItemCount.css';

let ItemCount = ({ stock, initial, item }) => {
    const [ cantidad, setCantidad ] = useState(initial);
    const contextCarrito = useContext(contextoCarrito);
    const { agregarElemento } = contextCarrito;

    const agregarElementosAlCarrito = () => {
        agregarElemento(item, cantidad);
    }

    const liStock = []
    for (let q = 1; q <= stock; q++) {
        liStock.push(<option value={ q } key={ q }>{ q }</option>)
    }

    return(
    <article className="w100-mobile">
        <select className="select-cantidad mt-3" id="exampleFormControlSelect1" onChange={ (e) => setCantidad(parseInt(e.target.value)) }>
            { liStock }
        </select>
        <button className="btn-spideycueva" onClick={ agregarElementosAlCarrito }>Agregar al carrito</button>

    </article>
    )
}

export default ItemCount;