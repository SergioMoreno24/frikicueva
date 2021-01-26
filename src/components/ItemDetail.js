import React from "react";
import ItemCount from './ItemCount';

let ItemDetail = ({ item }) => {
    //console.log(item);
    const inicial = 1

    let urlImg = item.imagen;
    let precio = item.precio;

    return(
        <div className="row text-md-left w100-mobile w-75 mx-auto">
            <div className="col-md-4 text-center py-5">
                <img className="img-fluid height-50" alt={ 'Imagen ' + item.titulo } src={ urlImg }/>
            </div>
            <div className="col-md-8 py-5">
                <h5 className="card-title mb-0">{ item.titulo }</h5>
                <p className="lead fontweight-500 text-red">
                    ${ precio }
                </p>
                <p className="lead text-justify">
                    { item.descripcion }
                </p>
                
                <ItemCount stock={ item.stock } initial={ inicial } item={ item }/>
            </div>
        </div>
    )
}

export default ItemDetail;