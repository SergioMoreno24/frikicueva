import React from 'react';
import Item from './Item.js';

let ItemList = ({ items }) => {
    return (
        <div className="contenedor-items">
            { items.map((item) => 
                <div key={item.id} className="item">
                    { <Item item={ item }/> }
                </div>
            )}
        </div>
    )
}

export default ItemList;
