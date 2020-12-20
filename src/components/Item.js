import React/*, { useState, useEffect }*/ from 'react';
//import ItemCount from './ItemCount.js';

let Item = ( {item} ) => {
    return(
        item ?
        <>
        <p>{item.title}</p>
        <p>{item.price}</p>
        </>
        :
        <p>Cargando</p>
    )
}

export default Item