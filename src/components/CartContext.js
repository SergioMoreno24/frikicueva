import React, { useState, createContext } from 'react'

export const contextoCarrito = createContext();
const { Provider } = contextoCarrito;

const CartContext = ({ children }) => {
    const [elementosCarrito, setElementosCarrito] = useState([]);

    const estaEnCarrito = (id) => {
        const resultado = elementosCarrito.find( comic => comic.comic.id === id );
        return id === undefined ? undefined : resultado !== undefined;
    }

    const getNumElementos = () => {
        let totalElementos = 0;
        elementosCarrito.forEach(comic => {
            totalElementos += comic.cantidad;
        });
        return totalElementos;
    }

    const agregarElemento = (comic, cantidad) => {
        if(!estaEnCarrito(comic.id)){
            setElementosCarrito(elementosCarrito => [...elementosCarrito, {comic : comic, cantidad : cantidad}])
        }
        else{
            alert('Ya tienes este comic en tu carrito');
        }
    }

    const eliminarElemento = (id) => {
        const elemento = elementosCarrito.find( comic => comic.comic.id === id );
        let nuevoCarrito = elementosCarrito.filter( (articulo) => {
            return articulo !== elemento;
        })
        setElementosCarrito(nuevoCarrito);
    }

    const getTotalPrecios = () => {
        let total = 0;
        elementosCarrito.forEach(comic => {
            total += comic.comic.precio * comic.cantidad;
        });
        return Math.floor(total * 100) / 100;
    }

    const vaciarCarrito = () => {
        setElementosCarrito([]);
    }

    return (
        <Provider value={ { elementosCarrito : elementosCarrito, 
                            estaEnCarrito : estaEnCarrito, 
                            agregarElemento : agregarElemento, 
                            eliminarElemento : eliminarElemento, 
                            getTotalPrecios : getTotalPrecios, 
                            getNumElementos : getNumElementos,
                            vaciarCarrito : vaciarCarrito } 
                        }>
            { children }
        </Provider>
    )
}

export default CartContext;