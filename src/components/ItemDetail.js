import React from "react";

let ItemDetail = ({item}) => {
    return(
        item ?
        <div className="card w-50">
            <img className="card-img-top" src={ item.pictureUrl }/>
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.price}</p>
            </div>
        </div>
        :
        <p>Cargando</p>
    )
}

export default ItemDetail;