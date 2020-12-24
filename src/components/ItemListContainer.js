import React, {useState, useEffect} from 'react';
import ItemList from './ItemList.js';

let ItemListContainer = () => {
    const [items, setItems] = useState(false);
    //Tiempo de dos segundos.
    useEffect(()=>{
        setTimeout(() => {
            //Promise
            const crearObjetos = new Promise((resolve, reject) => {
                let numObj = 10;
                let arreglo = [];
                for(let i = 1; i <= numObj; i++){
                    arreglo.push({id : i, title : "Titulo " + i, price : "$" + i, pictureUrl : "url" + i});
                }
                
                arreglo.length > 1 ?
                resolve(arreglo)
                :
                reject('Algo salió mal');
            });

            //console.log(crearObjetos);
            crearObjetos.then( result => {
                setItems(result);
            })
            .catch(err => {
                //console.log(err);
                document.getElementById('cargando').textContent = err;
            })
            
        }, 2000);
    }, []);

    return(
        items ?
        <div className="container py-2 mx-auto text-center">
            <ItemList items={ items } />
        </div>
        :
        <div className="alert alert-primary mt-2 text-center w-50 mx-auto">
            <span id="cargando">Cargando...</span>
        </div>
    )
}

export default ItemListContainer;