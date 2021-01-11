import React, { useState, createContext } from 'react'

export const contextoCarrito = createContext();
const { Provider } = contextoCarrito;

const CartContext = ({ children }) => {
    const [elementosCarrito, setElementosCarrito] = useState([]);
    
    const isInCart = (id) => {
        const resultado = elementosCarrito.find( item => item.comic.id === id );
        return id === undefined ? undefined : resultado !== undefined;
    }

    const setTotalElementos = () => {
        let total = 0;
        for(let c = 0; c < elementosCarrito.length; c++){
            total += elementosCarrito[c].cantidad;
        }
        //console.log(elementosCarrito);
        //console.log(total);
        return total;
    }

    return (
        <Provider value={ { elementosCarrito : elementosCarrito, setElementosCarrito : setElementosCarrito, isInCart : isInCart, setTotalElementos : setTotalElementos } }>
            { children }
        </Provider>
    )
}

export default CartContext;