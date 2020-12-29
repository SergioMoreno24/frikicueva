import React from "react";

let ItemDetail = ({item}) => {
    console.table(item)
    let urlImg = item.thumbnail.path + '.' +  item.thumbnail.extension.replace('http', 'https');
    let descripcion = item.description;
    if(descripcion == '')
        descripcion = 'No hay descripción disponible';

    return(
        <div className="row">
            <div className="col-md-6">
                <img className="img-fluid" alt={ 'Imagen ' + item.name } src={ urlImg }/>
            </div>
            <div className="col-md-6 py-5">
                <h5 className="card-title">{ item.name }</h5>
                <p className="lead">
                    { descripcion }
                </p>
            </div>
        </div>
    )
}

export default ItemDetail;