import React, { useContext } from 'react'
import {contextoCarrito} from './CartContext';

function TotalCarrito() {
    const { getTotalPrecios } = useContext(contextoCarrito);

    return (
        <div id="total-carrito" className="container py-2 px-5 border-radius-05 bg-white">
            <span className="lead">Total: </span><span className="lead fontweight-500">${ getTotalPrecios() }</span>
        </div>
    )
}

export default TotalCarrito;
