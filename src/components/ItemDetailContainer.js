import React, { useState, useEffect } from "react";
import ItemDetail from './ItemDetail.js';

const getItems = () => {
    return new Promise((resolve, reject) => {
        resolve(1);
    })
    
}

let ItemDetailContainer = () => {
    let [item, setItem] = useState();

    useEffect(() => {
        setTimeout(() => {
            getItems()
            .then((resultado) => {
                return(
                    //Item hardcodeado
                    setItem({id : 1, title : "Título de prueba", price : "$250", pictureUrl : "https://picsum.photos/id/1048/250/400"})
                )       
            })
            .catch((err) => {
                console.log(err)
            })
        }, 2000)
    }, [])

    return(
        <div className="container">
            {item ?
            <ItemDetail item={ item }/>
            :
            'Cargando detalles...'}
        </div>
    )
}

export default ItemDetailContainer;