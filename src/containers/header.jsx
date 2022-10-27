import '../styles/containers/header.css';
import icon_menu from '../assets/icons/icon_menu.svg';

import React,{useState} from 'react';
import MenuMobile from '../components/menuMobile';
const Header = () => {
    const [AsideMenuMobile, SetAsideMenuMobile] = useState(false);

    document.addEventListener('click', function(event) {
        if(AsideMenuMobile){
            if(event.target.className !== 'header-main__menu-mobile' && event.target.id !== 'mobile'){
                SetAsideMenuMobile(false);
            };
        };
    });

    const HandleMenuMobile = () => {
        SetAsideMenuMobile(!AsideMenuMobile);
    }
    return (
        <header className="header-main"id='header'>
            <img src={icon_menu} alt="menu" className="header-main__menu-mobile" onClick={HandleMenuMobile}/>
            <nav className='header-main__nav'>
                <ul className='header-main__list'>
                    <li className="header-main__item-list">
                        <a href="#inicio" title="Inicio" className="header-main__link">Inicio</a>
                    </li>
                    <li className="header-main__item-list">
                        <a href="#sobre-mi" title="sobre mi" className="header-main__link">Sobre mi</a>
                    </li>
                    <li className="header-main__item-list">
                        <a href="#habilidades" title="sobre mi" className="header-main__link">Habilidades</a>
                    </li>
                    <li className="header-main__item-list">
                        <a href="#portafolio" title="Portafolio" className="header-main__link">Portafolio</a>
                    </li>
                    <li className="header-main__item-list">
                        <a href="#contacto" title="Contacto" className="header-main__link">Contacto</a>
                    </li>
                </ul>
            </nav>
            {(AsideMenuMobile) && <MenuMobile/>}
        </header>

    );
};

export {Header};