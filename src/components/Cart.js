import React, { /* useEffect, */ useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { contextoCarrito } from './CartContext';
import { getFireStore } from '../firebase/firebase';
import TotalCarrito from './TotalCarrito';
/* import Compra from './Compra'; */
import '../css/Cart.css';

function Cart() { 
    const db = getFireStore();
    const history = useHistory();
    const contextCarrito = useContext(contextoCarrito);
    const { elementosCarrito, eliminarElemento, getTotalPrecios, vaciarCarrito } = contextCarrito;

    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    /* const [bandera, setBandera] = useState(false); */
    
    const onNombreChange = (e) => {
        setNombre(e.target.value);
    }

    const onCorreoChange = (e) => {
        setCorreo(e.target.value);
    }

    const onTelefonoChange = (e) => {
        setTelefono(e.target.value);
    }

    const itemsParaCompra = () => {
        const nuevosComics = [];
        elementosCarrito.forEach((comic) => {
            nuevosComics.push({ id : comic.comic.id, titulo : comic.comic.titulo,precio : comic.comic.precio, cantidad : comic.cantidad })
        });
        return nuevosComics;
    }

    const getDatosOrden = () => {
        const fecha = new Date();
        return {
            comprador : 
            {
                nombre : nombre,
                correo : correo,
                telefono: telefono
            },
            items : itemsParaCompra(),
            
            fecha : fecha.toLocaleDateString() + ' ' + fecha.toLocaleTimeString(),
            total : getTotalPrecios(),
        }
    }

    const confirmarCompra = () => {
        if(nombre === '' || telefono === '' || correo === ''){
            alert('Por favor, llena los datos');
        }
        else{
            const ordenes = db.collection('ordenes');
            const datosOrden = getDatosOrden();

            ordenes.add(datosOrden)
            .then(({ id }) => {
                const orden = db.collection('ordenes').doc(id);
                orden.get()
                .then((datosOrden) => {
                    const items = datosOrden.data().items;
                    items.forEach(element => {
                        //Busco el stock de la colección de cómics.
                        db.collection('comics').doc(element.id)
                        .get()
                        .then((doc) => {
                            return doc.data().stock;
                        })
                        //Actualizo el stock
                        .then((stock) => {
                            return db.collection('comics').doc(element.id)
                            .update({ stock : stock - element.cantidad })
                        })
                        .then((a) => {
                            vaciarCarrito();
                        })
                    });
                })
                //Redirijo a la página de compra exitosa
                history.push("/compra/" + id);
            })
            .catch((err) => {
                console.log(err);
            })
        }
    }

    const articulos = elementosCarrito.map((articulo, indice) =>
        <article key={ indice + 1 } className="contenedor-articulo border-radius-05 bg-white py-3 mb-2">
            <img className="img-carrito" alt={ 'img' + articulo.comic.titulo } src={ articulo.comic.imagen }/>
            <span className="articulo">{ articulo.comic.titulo }</span>
            <span className="articulo text-center">{ articulo.cantidad }</span>
            <span className="fontweight-500 articulo text-center">${ articulo.comic.precio }</span>
            <span className="material-icons articulo text-center text-red cursor-pointer fontsize-2" title="Eliminar artículo" onClick={ () => eliminarElemento(articulo.comic.id) }>delete_forever</span>
        </article>
    )

    return (
        articulos.length === 0 ?
            <section className="container mt-3 text-center">
                <p className="lead">No hay nada en el carrito</p>
                <Link to="/"><button className="btn-spideycueva">Catálogo</button></Link>
            </section>
        :
            <section id="contenedor-carrito" className="container mt-3 w100-mobile">
                <div className="row">
                    <div className="col-lg-7">
                        { articulos }
                    </div>
                    <div className="col-lg-5">
                        <TotalCarrito onNombreChange={ onNombreChange } onCorreoChange={ onCorreoChange } onTelefonoChange={ onTelefonoChange } confirmarCompra={ confirmarCompra }/>
                    </div>
                </div>
               
                
            </section>
    )
}

export default Cart;
