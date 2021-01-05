import React from "react";
import ItemCount from './ItemCount';

let ItemDetail = ({ item }) => {
    //La API no tiene un valor de stock o inicial, lo estoy hardcodeando simulando que viene de una BD.
    item['stock'] = 6;
    const inicial = 1

    let urlImg = item.thumbnail.path + '.' +  item.thumbnail.extension.replace('http', 'https');
    let descripcion = item.description;
    if(descripcion === '' || descripcion === null)
        descripcion = 'No hay descripción disponible';

    return(
        <div className="row text-md-left">
            <div className="col-md-6 text-center">
                <img className="img-fluid height-50" alt={ 'Imagen ' + item.name } src={ urlImg }/>
            </div>
            <div className="col-md-6 py-5">
                <h5 className="card-title">{ item.title }</h5>
                <p className="lead">
                    { descripcion }
                </p>
                <p className="lead">
                    ${ item.prices[0].price }
                </p>
                <ItemCount stock={item.stock} initial={inicial}/>
            </div>
        </div>
    )
}

export default ItemDetail;