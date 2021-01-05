import React, {useState, useEffect} from 'react';
import ItemList from './ItemList.js';

let ItemListContainer = () => {
    const [items, setItems] = useState(false);
    useEffect(()=>{
        fetch('https://gateway.marvel.com/v1/public/comics?titleStartsWith=spider-man&orderBy=title&limit=100&ts=261124&apikey=724de9bfb8d8c5f625ef680a41b011d8&hash=ed662371fd0bda1892b6f8935cdd7108')
        .then((resultado) => {
            if(resultado.status === 200){
                return resultado.json()
            }
        })
        .then((resultado) => {
            setItems(resultado.data.results)
        })
        .catch((error) => {
            console.log(error)
        })
    }, []);

    return(
        items ?
        <div className="container-fluid py-2 mx-auto text-center">
            <ItemList items={ items } />
        </div>
        :
        <div className="alert alert-primary mt-2 text-center w-50 mx-auto">
            <span id="cargando">Cargando...</span>
        </div>
    )
}

export default ItemListContainer;