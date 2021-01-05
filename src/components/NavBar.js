import React from 'react';
import './NavBar.css';
import CartWidget from './CartWidget.js';
import { NavLink } from "react-router-dom";

const NavBar = () => {
    const titulos = ['Spider-Man'];
    const listaTitulos = titulos.map((titulo, indice) =>
        <li key={ indice + 1 } className="elementoMenuPrincipal py-2 px-3">
            <NavLink to={'/' + titulo }>{ titulo }</NavLink>
        </li>
    );
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Frikicueva</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    { listaTitulos }
                </ul>
                <button className="btn btn-dark d-flex">
                    <CartWidget/>
                </button>
                </div>
            </div>
        </nav>
    )
}

//Componentes de tipo clase.
/*class NavBar2 extends React.Component{
    render(){
        const titulos = ['Opción 1', 'Opción 2', 'Opción 3', 'Opción 4', 'Opción 5'];
        console.log(this)
        return(
            <nav className="navbar">
                <ul className="menu">
                    <li className="elementoMenu"><p className="logo">Frikicueva</p></li>
                    <li className="elementoMenu" onClick={ () => alert(titulos[0])}><p className="textoMenu">{ titulos[0] }</p></li>
                    <li className="elementoMenu" onClick={ () => alert(titulos[1])}><p className="textoMenu">{ titulos[1] }</p></li>
                    <li className="elementoMenu" onClick={ () => alert(titulos[2])}><p className="textoMenu">{ titulos[2] }</p></li>
                    <li className="elementoMenu" onClick={ () => alert(titulos[3])}><p className="textoMenu">{ titulos[3] }</p></li>
                    <li className="elementoMenu" onClick={ () => alert(titulos[4])}><p className="textoMenu">{ titulos[4] }</p></li>
                </ul>
            </nav> 
        )
    }
}*/

export default NavBar;