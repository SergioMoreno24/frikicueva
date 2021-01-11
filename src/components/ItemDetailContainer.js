import React, { useState, useEffect } from "react";
import ItemDetail from './ItemDetail.js';
import Cargando from './Cargando.js';
import { useParams } from "react-router-dom";

let ItemDetailContainer = () => {
    let [ item, setItem ] = useState();
    const { id } = useParams();

    useEffect(() => {
        let url = 'https://gateway.marvel.com/v1/public/comics?id=' + id + '&ts=261124&apikey=724de9bfb8d8c5f625ef680a41b011d8&hash=ed662371fd0bda1892b6f8935cdd7108';
        let comics = fetch(url)
        
        comics.then((respuesta) => {
            if(respuesta.status === 200){
                return respuesta.json();
            }
        })
        .then((respuesta) => {
            setItem(respuesta.data.results)
        })

    }, [id])

    return(
        <section className="container mt-3">
            { 
            item ?
                <ItemDetail item={ item[0] } /*Esto me funcionó, porque la API viene con index 0, no sé si hay una mejor forma. *//>
            :
            <Cargando />
            }
        </section>
    )
}

export default ItemDetailContainer;