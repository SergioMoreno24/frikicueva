import React from 'react';
import Item from './Item.js';

let ItemList = ({ items }) => {
    //console.log(items);
    return (
        <div className="contenedor-items">
            { items.map((item, indice) => 
                <div key={ indice + 1 } className="item">
                    { <Item item={ item }/> }
                </div>
            )}
        </div>
    )
}

export default ItemList;
