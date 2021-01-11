import React, { /*useContext*/ } from 'react';
import './css/NavBar.css';
//import { contextoCarrito } from './CartContext';

let CartWidget = () => {
    //const contextCarrito = useContext(contextoCarrito);
    //const { elementosCarrito } = contextCarrito;
    
    return(
        <div className="elemento-menu-principal px-2 py-1">
            {/*<span className="fs-6 text-light bg-danger rounded-circle px-1">{ Poner el total aquí }0</span>*/}
            <span className="material-icons fs-2 link-navbar" onClick={ () => alert('Carrito') }>
                shopping_cart
            </span>
        </div>
    )
}

export default CartWidget;