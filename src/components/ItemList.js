import React from 'react';
import Item from './Item.js';

let ItemList = ({ items }) => {
    //Utilicé una tabla, no sé si es lo correcto.
    return (
        <table className="table table-responsive table-bordered">
            <thead></thead>
            <tbody>
                <tr>
                { items.map((item, indice) => 
                    <td key={indice + 1}>
                        { <Item item={ item }/> }
                    </td>
                )}
                </tr>
            </tbody>
            <tfoot></tfoot>
        </table>
    )
}

export default ItemList;
