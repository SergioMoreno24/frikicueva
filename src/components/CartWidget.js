import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../css/NavBar.css';
import { contextoCarrito } from './CartContext';

let CartWidget = () => {
    const { getNumElementos } = useContext(contextoCarrito);
    
    return(
        <Link to={ "/carrito" }>
            <div className="elemento-menu-principal px-2 py-1">
                { getNumElementos() === 0 ? '' : <span className="text-light bg-danger rounded-circle px-1">{ getNumElementos() }</span>}
                <span className="material-icons fs-2 link-navbar">
                    shopping_cart
                </span>
            </div>
        </Link>
    )
}

export default CartWidget;