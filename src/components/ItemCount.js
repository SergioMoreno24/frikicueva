import React, { useState } from 'react';


let ItemCount = ({ stock, initial }) => {
    const [numInicial, cambiarNum] = useState(initial);

    return(
    <article className="w100-mobile py-3 px-3 text-center border w-50">
        <div className="input-group my-2">
            <div className="input-group-prepend">
                <button className="input-group-text btn btn-dark cursor-pointer" onClick={ () => numInicial > 1 ? cambiarNum(numInicial - 1) : alert('No puede ser cero') }>-</button>
            </div>
            <input type="text" className="form-control bg-light text-center" readOnly value={ numInicial }/>
            <div className="input-group-append">
                <button className="input-group-text btn btn-dark cursor-pointer" onClick={ () => numInicial < stock ? cambiarNum(numInicial + 1) : alert('No puedes agregar más elementos') }>+</button>
            </div>
        </div>
        <button className="btn btn-outline-primary" onClick={ () => alert('Agregar al carrito') }>Agregar al carrito</button>
    </article>
    )
}

export default ItemCount;