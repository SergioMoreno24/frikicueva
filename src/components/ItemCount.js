import React from 'react';

let ItemCount = ({ stock, initial }) => {
    const [numInicial, cambiarNum] = React.useState(initial);
    let numeroSeleccionado = parseInt(numInicial);

    const aumentarNum = () => {
        numeroSeleccionado += 1;
        if(numeroSeleccionado <= stock){
            cambiarNum(numeroSeleccionado);
        }
        else{
            alert('No puedes agregar más elementos');
        }
    }

    const disminuirNum = () => {
        numeroSeleccionado -= 1;
        if(numeroSeleccionado >= 0){
            cambiarNum(numeroSeleccionado);
        }
        else{
            alert('Ya está en cero');
        }
    }

    return(
    <article className="w-25 py-3 px-3 text-center border">
        <span className="lead">Descripción del producto</span>
        <div className="input-group my-2">
            <div className="input-group-prepend">
                <span className="input-group-text bg-dark text-light px-4 cursor-pointer" onClick={ disminuirNum }>-</span>
            </div>
            <input type="text" className="form-control bg-light text-center" readOnly value={ numInicial }/>
            <div className="input-group-append">
                <span className="input-group-text bg-dark text-light px-4 cursor-pointer" onClick={ aumentarNum }>+</span>
            </div>
        </div>
        <button className="btn btn-outline-primary">Agregar al carrito</button>
    </article>
    )
}

export default ItemCount;