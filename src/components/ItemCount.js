import React from 'react';

let ItemCount = ({ stock, initial }) => {
    const [numInicial, cambiarNum] = React.useState(initial);
    let numeroSeleccionado = parseInt(numInicial);

    const aumentarNum = () => {
        if(numeroSeleccionado < stock){
            numeroSeleccionado += 1;
            cambiarNum(numeroSeleccionado);
        }
        else{
            alert('No puedes agregar más elementos');
        }
    }

    const disminuirNum = () => {
        if(numeroSeleccionado > 1){
            numeroSeleccionado -= 1;
            cambiarNum(numeroSeleccionado);
        }
        else{
            alert('No puede ser cero');
        }
    }

    return(
    <article className="w-25 py-3 px-3 text-center border">
        <span className="lead">Descripción del producto</span>
        <div className="input-group my-2">
            <div className="input-group-prepend">
                <button className="input-group-text btn btn-dark px-4 cursor-pointer" onClick={ disminuirNum }>-</button>
            </div>
            <input type="text" className="form-control bg-light text-center" readOnly value={ numInicial }/>
            <div className="input-group-append">
                <button className="input-group-text btn btn-dark px-4 cursor-pointer" onClick={ aumentarNum }>+</button>
            </div>
        </div>
        <button className="btn btn-outline-primary">Agregar al carrito</button>
    </article>
    )
}

export default ItemCount;