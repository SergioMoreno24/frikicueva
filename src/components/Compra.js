import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { getFireStore } from '../firebase/firebase';
import Cargando from './Cargando';

import '../css/Compra.css';

const Compra = () => {
    const { id } = useParams()
    const db = getFireStore();
    const [datosPedido, setDatosPedido] = useState();

    useEffect(() => {
        const orden = db.collection('ordenes').doc(id);
        orden.get()
        .then((datosOrden) => {
            const items = datosOrden.data();
            setDatosPedido({ fecha : items.fecha, total : items.total, comics : items.items });
        })
    }, [])

    return (
        datosPedido ?
        <section className="container text-center my-3 py-3">
            <div id="gracias" className="py-2 w-50 w100-mobile mx-auto">
                <h5 className="fontweight-500">Gracias, tu pedido ha sido recibido.</h5>
            </div>
            <div id="detalles-pedido" className="mt-3 py-3 w-100 w100-mobile mx-auto">
                <article>
                    <p className="fontweight-500 fontsize-11 text-blue">Número</p>
                    <p>{ id }</p>
                </article>
                <article>
                    <p className="fontweight-500 fontsize-11 text-blue">Productos</p>
                    { datosPedido.comics.map((comic, indice) => 
                        <p key={ indice + 1 }>{ comic.titulo }</p>
                    )}
                </article>
                <article>
                    <p className="fontweight-500 fontsize-11 text-blue">Fecha</p>
                    <p>{ datosPedido.fecha }</p>
                </article>
                <article>
                    <p className="fontweight-500 fontsize-11 text-blue">Total</p>
                    <p>${ datosPedido.total }</p>
                </article>
            </div>
            <div className="container text-center">
                <Link to="/"><button className="btn-spideycueva mt-5">Continuar comprando</button></Link>
            </div>
        </section>
        :
        <Cargando />
    )
}

export default Compra;