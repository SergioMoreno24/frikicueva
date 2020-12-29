import React from 'react';
import Item from './Item.js';

let ItemList = ({ items }) => {
    return (
        <table className="table table-responsive table-bordered">
            <thead></thead>
            <tbody>
                <tr>
                { items.map((item) => 
                    <td key={item.id}>
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
