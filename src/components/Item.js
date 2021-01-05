import React from 'react';
import { Link } from 'react-router-dom';

let Item = ( {item} ) => {
    let urlImg = item.thumbnail.path + '.' +  item.thumbnail.extension.replace('http', 'https');
    return(
        item ?
        <>
            <img alt={ 'Imagen ' + item.name } className="img-fluid" src={ urlImg }/>
            <p className="mt-2 mb-0 lead">{item.title}</p>
            <p className="my-1 lead">${ item.prices[0].price }</p>
            <Link to={`/item/${item.id}`} className="lead text-primary text-decoration-none">
                Ver más
            </Link>
        </>
        :
        <p>Cargando</p>
    )
}

export default Item