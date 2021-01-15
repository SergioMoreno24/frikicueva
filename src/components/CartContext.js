import React, { useState, createContext } from 'react'

export const contextoCarrito = createContext();
const { Provider } = contextoCarrito;

const CartContext = ({ children }) => {
    const [elementosCarrito, setElementosCarrito] = useState([]);

    const estaEnCarrito = (id) => {
        const resultado = elementosCarrito.find( item => item.comic.id === id );
        return id === undefined ? undefined : resultado !== undefined;
    }

    const getNumElementos = () => {
        //console.log(elementosCarrito.length);
        return elementosCarrito.length;
    }

    const agregarElemento = (item, cantidad) => {
        if(!estaEnCarrito(item.id)){
            setElementosCarrito(elementosCarrito => [...elementosCarrito, {comic : item, cantidad : cantidad}])
        }
        else{
            alert('Ya tienes este comic en tu carrito');
        }
    }

    const eliminarElemento = (id) => {
        const elemento = elementosCarrito.find( item => item.comic.id === id );
        let nuevoCarrito = elementosCarrito.filter( (articulo) => {
            return articulo !== elemento;
        })
        setElementosCarrito(nuevoCarrito);
    }

    const getTotalPrecios = () => {
        let total = 0;
        elementosCarrito.forEach(element => {
            total += element.comic.prices[0].price * element.cantidad;
        });
        return Math.floor(total * 100) / 100;
    }

    return (
        <Provider value={ { elementosCarrito : elementosCarrito, estaEnCarrito : estaEnCarrito, agregarElemento : agregarElemento, eliminarElemento : eliminarElemento, getTotalPrecios : getTotalPrecios, getNumElementos : getNumElementos } }>
            { children }
        </Provider>
    )
}

export default CartContext;