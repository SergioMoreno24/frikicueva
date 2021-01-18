import React, { useState, useEffect } from "react";
import ItemDetail from './ItemDetail.js';
import Cargando from './Cargando.js';
import { useParams } from "react-router-dom";
import { getFireStore } from '../firebase/firebase';

let ItemDetailContainer = () => {
    let [ item, setItem ] = useState();
    const { id } = useParams();
    //console.log(id);
    useEffect(() => {
        const db = getFireStore();
        const comicCollection = db.collection('comics');
        //Aquí obtengo el comic por su id
        const comic = comicCollection.doc(id);

        comic
        .get()
        .then((doc) => {
            setItem({id : id, ...doc.data()});
        })

    }, [id])

    return(
        <section className="container mt-3">
            { 
            item ?
                <ItemDetail item={ item } />
            :
            <Cargando />
            }
        </section>
    )
}

export default ItemDetailContainer;