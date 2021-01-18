import React, {useState, useEffect} from 'react';
import ItemList from './ItemList.js';
import { getFireStore } from '../firebase/firebase';
import { useParams } from "react-router-dom";
import Cargando from './Cargando.js';
import './css/ItemList.css';

const ItemListContainer = () => {
    const [items, setItems] = useState();
    const { categoria } = useParams()

    useEffect(()=>{
        const categoriaNumber = parseInt(categoria);
        const db = getFireStore();
        const comicCollection = db.collection('comics');

        categoriaNumber ?
            comicCollection
            .where('categoria', '==', categoriaNumber)
            .get()
            .then((querySnapshot) => {
                let comicsOk = [];
                querySnapshot.forEach((doc) => {
                    comicsOk.push({ id : doc.id, ...doc.data() });
                })
                //console.log(comicsOk);
                setItems(comicsOk);
            })
            .catch((err) => {
                console.log(err);
            })
        :
        comicCollection
            .get()
            .then((querySnapshot) => {
                let comicsOk = [];
                querySnapshot.forEach((doc) => {
                    comicsOk.push({ id : doc.id, ...doc.data() });
                })
                //console.log(comicsOk);
                setItems(comicsOk);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [categoria]);

    return(
        items ?
        <section className="container my-4 mx-auto text-center">
            <ItemList items={ items } />
        </section>
        :
        <Cargando />
    )
}

export default ItemListContainer;