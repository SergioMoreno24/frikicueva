import React, { useState, useContext } from 'react';
import { contextoCarrito } from './CartContext';

let ItemCount = ({ stock, initial, item }) => {
    const [ cantidad, setCantidad ] = useState(initial);
    const contextCarrito = useContext(contextoCarrito);
    const { agregarElemento } = contextCarrito;

    const cambiarElementosCarrito = () => {
        agregarElemento(item, cantidad);
    }

    return(
    <article className="w100-mobile py-3 px-3 text-center border w-50">
        <div className="input-group my-2">
            <div className="input-group-prepend">
                <button className="input-group-text btn btn-dark cursor-pointer" onClick={ () => cantidad > 1 ? setCantidad(cantidad - 1) : alert('No puede ser cero') }>-</button>
            </div>
            <input type="text" className="form-control bg-light text-center" readOnly value={ cantidad }/>
            <div className="input-group-append">
                <button className="input-group-text btn btn-dark cursor-pointer" onClick={ () => cantidad < stock ? setCantidad(cantidad + 1) : alert('No puedes agregar más elementos') }>+</button>
            </div>
        </div>
        <button className="btn btn-outline-primary" onClick={ cambiarElementosCarrito }>Agregar al carrito</button>
    </article>
    )
}

export default ItemCount;