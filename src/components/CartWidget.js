import React from 'react';

let CartWidget = () => {
    return(
        <>
            <span className="material-icons fs-2 text-light" onClick={ () => alert('Carrito') }>
                shopping_cart
            </span>
            <span id="abc"></span>
        </>
    )
}

export default CartWidget;