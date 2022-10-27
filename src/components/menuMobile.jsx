import React from 'react';
import '../styles/components/menuMobile.css'
const MenuMobile = () => {
    return (
        <ul className='mobile-list trasparent' id='menuMobile'>
            <li className="mobile-list__item">
                <a href="#inicio" title="Inicio">Inicio</a>
            </li>
            <li className="mobile-list__item">
                <a href="#sobre-mi" title="sobre mi">Sobre mi</a>
            </li>
            <li className="mobile-list__item">
                <a href="#habilidades" title="sobre mi">Habilidades</a>
            </li>
            <li className="mobile-list__item">
                <a href="#portafolio" title="Portafolio">Portafolio</a>
            </li>
            <li className="mobile-list__item">
                <a href="#contacto" title="Contacto">Contacto</a>
            </li>
        </ul>
    );
}

export default MenuMobile;