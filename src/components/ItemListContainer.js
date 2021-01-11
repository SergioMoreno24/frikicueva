import React, {useState, useEffect} from 'react';
import ItemList from './ItemList.js';
import { useParams } from "react-router-dom";
import Cargando from './Cargando.js';
import './css/ItemList.css';

const ItemListContainer = () => {
    const [items, setItems] = useState();
    const {categoria} = useParams()

    useEffect(()=>{
        let comicsOk = [];
        let url = `https://gateway.marvel.com/v1/public/comics?titleStartsWith=${categoria}&orderBy=title&limit=100&ts=261124&apikey=724de9bfb8d8c5f625ef680a41b011d8&hash=ed662371fd0bda1892b6f8935cdd7108`;
        fetch(url)
        .then((resultado) => {
            if(resultado.status === 200){
                return resultado.json()
            }
        })
        .then((resultado) => {
            let objeto = resultado.data.results;
            //Hice esto porque hay muchas sin imagen y no me gustaba cómo se veía.
            for(const key in objeto){
                if(objeto[key].thumbnail.path.split('/')[10] !== 'image_not_available'){
                    comicsOk.push(objeto[key])
                }
            }
            setItems(comicsOk)
        })
        .catch((error) => {
            console.log(error)
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