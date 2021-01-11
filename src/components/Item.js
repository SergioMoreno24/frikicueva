import React from 'react';
import { Link } from 'react-router-dom';

let Item = ( {item} ) => {
    let urlImg = item.thumbnail.path + '.' +  item.thumbnail.extension.replace('http', 'https');
    let price = item.prices[0].price;

    return(
        item ?
        <article className="comic-en-lista px-3">
            <Link to={`/item/${item.id}`} className="lead">
                <img alt={ 'Imagen ' + item.name } className="img-fluid" src={ urlImg }/>
            </Link>
            <p className="mt-2 mb-0 lead minheight-3">{item.title}</p>
            <p className="lead fontweight-500">${ price }</p>    
        </article>
        :
        <p>Cargando</p>
    )
}

export default Item