import React from 'react';

let ItemListContainer = (props) => {
    return(
        <div className="container-fluid py-2">
            <span>
                { props.greeting }
            </span>
        </div>
    )
}

export default ItemListContainer;