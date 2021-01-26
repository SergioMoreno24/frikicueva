import React from 'react';
import '../css/NavBar.css';
import CartWidget from './CartWidget.js';
import { NavLink } from "react-router-dom";
import logoNavBar from '../img/logoNavBar.png';

const NavBar = () => {
    const titulos = ['Spider-Man', 'Spider-Gwen', 'Spider-Woman'];
    const listaTitulos = titulos.map((titulo, indice) =>
        <NavLink key={ indice + 1 } className="link-navbar" to={'/categoria/' + (indice + 1) }>
            <li className="elemento-menu-principal py-2 px-3">
                { titulo }
            </li>
        </NavLink>
    );
    
    return(
        <nav className="navbar navbar-expand-lg navbar-dark py-0 navbar-friki">
            <div className="container">
                <NavLink className="navbar-brand" to="/">
                    <img src={ logoNavBar } alt="Logo inicio"/>
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        { listaTitulos }
                    </ul>
                    <CartWidget />
                </div>
            </div>
        </nav>
    )
}

export default NavBar;