import React, { useState, useEffect } from "react";
import ItemDetail from './ItemDetail.js';
import { useParams } from "react-router-dom";

let ItemDetailContainer = () => {
    let [item, setItem] = useState();
    const params = useParams();

    useEffect(() => {
        let detallesPersonaje = fetch('https://gateway.marvel.com/v1/public/characters?id=' + params.id + '&ts=261124&apikey=724de9bfb8d8c5f625ef680a41b011d8&hash=ed662371fd0bda1892b6f8935cdd7108')

        detallesPersonaje.then((respuesta) => {
            if(respuesta.status === 200){
                return respuesta.json();
            }
        })
        .then((respuesta) => {
            setItem(respuesta.data.results)
        })
    }, [])

    return(
        <div className="container mt-3">
            { item ?
                <ItemDetail item={ item[0] } /*Esto me funcionó, porque la API viene con index 0, no sé si hay una mejor forma. *//>
            :
            'Cargando detalles...'}
        </div>
    )
}

export default ItemDetailContainer;