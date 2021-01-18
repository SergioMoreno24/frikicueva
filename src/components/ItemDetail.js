import React from "react";
import ItemCount from './ItemCount';

let ItemDetail = ({ item }) => {
    //console.log(item);
    const inicial = 1

    let urlImg = item.imagen;
    let precio = item.precio;

    return(
        <div className="row text-md-left">
            <div className="col-md-6 text-center">
                <img className="img-fluid height-50" alt={ 'Imagen ' + item.titulo } src={ urlImg }/>
            </div>
            <div className="col-md-6 py-5">
                <h5 className="card-title">{ item.titulo }</h5>
                <p className="lead">
                    { item.descripcion }
                </p>
                <p className="lead fontweight-500">
                    ${ precio }
                </p>
                <ItemCount stock={ item.stock } initial={ inicial } item={ item }/>
            </div>
        </div>
    )
}

export default ItemDetail;