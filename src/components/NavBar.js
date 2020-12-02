import './NavBar.css';

let NavBar = () => {
    return(
        <nav className="navbar">
            <ul className="menu">
                <li className="elementoMenu"><p className="logo">Frikicueva</p></li>
                <li className="elementoMenu"><p className="textoMenu">Opción 1</p></li>
                <li className="elementoMenu"><p className="textoMenu">Opción 2</p></li>
                <li className="elementoMenu"><p className="textoMenu">Opción 3</p></li>
                <li className="elementoMenu"><p className="textoMenu">Opción 4</p></li>
                <li className="elementoMenu"><p className="textoMenu">Opción 5</p></li>
            </ul>
        </nav>
    )
}

export default NavBar;