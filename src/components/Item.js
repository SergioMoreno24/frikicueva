import React from 'react';
import { Link } from 'react-router-dom';

let Item = ( {item} ) => {
    let urlImg = item.imagen;
    let precio = item.precio;
    
    return(
        item ?
        <article className="comic-en-lista">
            <Link to={`/item/${item.id}`} className="lead">
                <img alt={ 'Imagen ' + item.name } className="img-fluid" src={ urlImg }/>
            </Link>
            <p className="mt-2 mb-0 minheight-3">{ item.titulo }</p>
            <p className="fontweight-500">${ precio }</p>    
        </article>
        :
        <p>Cargando</p>
    )
}

export default Item