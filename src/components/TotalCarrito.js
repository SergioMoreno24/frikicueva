import React, { useContext } from 'react'
import { contextoCarrito } from './CartContext';
import '../css/TotalCarrito.css';

function TotalCarrito(props) {
    const { getTotalPrecios } = useContext(contextoCarrito);
    const { onNombreChange, onCorreoChange, onTelefonoChange, confirmarCompra } = props;

    return (
        <div id="total-carrito" className="container py-3 border-radius-05 bg-white">
            <p className="mx-auto fontweight-500">Por favor, introduce tus datos</p>

            <div className="form-group bg-white shadow w-100 div-input-form-compra px-2 mb-2">
                <small className="text-left text-muted">Nombre</small>
                <input type="text" className="form-control border-0 bg-transparent w-100" placeholder="Nombre" onChange={ (e) => onNombreChange(e) }/>
            </div>
            <div className="form-group bg-white shadow w-100 div-input-form-compra px-2 mb-2">
                <small className="text-left text-muted">Correo electrónico</small>
                <input type="email" className="form-control border-0 bg-transparent w-100" placeholder="Correo electrónico" onChange={ (e) => onCorreoChange(e) }/>
            </div>
            <div className="form-group bg-white shadow w-100 div-input-form-compra px-2 mb-2">
                <small className="text-left text-muted">Teléfono</small>
                <input type="text" className="form-control border-0 bg-transparent w-100" placeholder="Teléfono" onChange={ (e) => onTelefonoChange(e) }/>
            </div>
            
            <article className="num-articulos mx-auto w-100 pt-3 mt-3">
                <span className="">Total:</span>
                <span className="fontweight-500">${ getTotalPrecios() }</span>
            </article>
            
            <button className="btn-spideycueva w-100" onClick={ () => confirmarCompra() }>Confirmar compra</button>

        </div>
    )
}

export default TotalCarrito;
