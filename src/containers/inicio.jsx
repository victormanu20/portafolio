import React from 'react';
import linkedin from '../assets/socialMedia/linkedin.svg';
import github from '../assets/socialMedia/github.svg';
import gmail from '../assets/socialMedia/gmail.svg';
import fotoTablet from '../assets/socialMedia/Foto_tablet.png';
import FotoLaptop from '../assets/socialMedia/Foto_laptop.png';
import foto from '../assets/socialMedia/Foto_movil.png';

import '../styles/containers/inicio.css';
const inicio = () => {
    return (
        <section className="container-inicio" id="inicio">
            <article className="section-inicio__user">
                <header className="section-inicio__header">
                    <h1 className="header-inicio__title">Víctor Manuel Astudillo Delgado</h1>
                    <p className="header-inicio__profesion">Ingeniero Mecatrónico</p>
                </header>
                <nav className="nav-social-media">
                    <ul className="social-media">
                        <li className="social-media__item">
                            <a href="https://www.linkedin.com/in/victor-astudillo-983768215/" rel="noreferrer" className="social-media__logo linkedin" target="_blank">
                                <img src={linkedin} alt='link para linkedin del usuario' />
                            </a>
                        </li>
                        <li className="social-media__item">
                            <a href="https://github.com/victormanu20/" rel="noreferrer" className="social-media__logo github" target="_blank">
                                <img src={github} alt='link para github del usuario' />
                            </a>
                        </li>
                        <li className="social-media__item">
                            <a href="#contacto" rel="noreferrer" className="social-media__logo gmail">
                                <img src={gmail} alt='link para gmail de usuario' />
                            </a>
                        </li>
                    </ul>
                </nav>
            </article>
            <picture className="inicio__photo">
                <source media="(min-width:768px)" srcSet={fotoTablet} />
                <source media="(min-width:1023px)" srcSet={FotoLaptop} />
                <img src={foto} alt="foto user" />
            </picture>
        </section>

    );
};

export default inicio;