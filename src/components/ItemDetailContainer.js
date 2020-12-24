import React, { useState, useEffect } from "react";
import ItemDetail from './ItemDetail.js';

const getItems = () => {
    return new Promise((resolve, reject) => {
        resolve('Bla');
    })
    
}

let ItemDetailContainer = () => {
    let [item, setItem] = useState();

    useEffect(() => {
        setTimeout(() => {
            getItems()
            .then((resultado) => {
                return(
                    setItem(resultado)
                )       
            })
            .catch((err) => {
                console.log(err)
            })
        }, 2000)
    }, [])

    return(
        item ?
        <ItemDetail item={{id : 1, title : "Título de prueba", price : "$250", pictureUrl : "https://picsum.photos/100"}}/>
        :
        ''
    )
}

export default ItemDetailContainer;