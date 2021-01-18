import React, { /* useEffect, */ useContext } from 'react';
import {Link} from 'react-router-dom';
import { contextoCarrito } from './CartContext';
import TotalCarrito from './TotalCarrito';
import './css/Cart.css';

function Cart() {
    const contextCarrito = useContext(contextoCarrito);
    const { elementosCarrito, eliminarElemento } = contextCarrito;

    const articulos = elementosCarrito.map((articulo, indice) =>
        <article key={ indice + 1 } className="contenedor-articulo border-radius-05 bg-white py-3 px-3 my-3">
            <img className="img-carrito" alt={ 'img' + articulo.comic.titulo } src={ articulo.comic.imagen }/>
            <span className="lead articulo">{ articulo.comic.titulo }</span>
            <span className="lead articulo text-center">{ articulo.cantidad }</span>
            <span className="lead fontweight-500 articulo text-center">${ articulo.comic.precio }</span>
            <span className="material-icons articulo text-center text-danger cursor-pointer fontsize-2" title="Eliminar artículo" onClick={ () => eliminarElemento(articulo.comic.id) }>delete_forever</span>
        </article>
    )

    return (
        articulos.length === 0 ?
            <section className="container mt-3 text-center">
                <p className="lead">No hay nada en el carrito</p>
                <Link to="/categoria/1" className="btn btn-dark onequarter-width">Catálogo</Link>
            </section>
        :
            <section id="contenedor-carrito" className="container mt-3 w-50 w100-mobile">
                { articulos }
                <TotalCarrito />
            </section>
    )
}

export default Cart;
