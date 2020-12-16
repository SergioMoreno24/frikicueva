import React from 'react';
import ItemCount from './ItemCount.js';

let ItemListContainer = (props) => {

    return(
        <div className="container-fluid py-2">
            <ItemCount stock={5} initial={1}/>
        </div>
    )
}

export default ItemListContainer;