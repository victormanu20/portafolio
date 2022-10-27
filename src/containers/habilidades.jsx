import React from 'react';
import '../styles/containers/habiliadades.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload,faCode, faMicrochip, faAtom, faSearch, faServer } from '@fortawesome/free-solid-svg-icons';

const habilidades = () => {
    return (
        <section id="habilidades">
            <article className="contenido-habilidades">
                <h1> Conocimientos técnicos y habilidades</h1>
                <h2><FontAwesomeIcon icon={faCode} />Desarrollo FrontEnd</h2>
                {/* <ul data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">  */}
                <ul>
                    <li>Html5</li>
                    <li>Ccs3, Flexbox, Css Grid</li>
                    <li>Javascript</li>
                    <li>Responsive Web Design (Diseño adaptable)</li>
                    <li>Accesibilidad y Usabilidad</li>
                    <li>Programas:Visual Studio Code</li>
                    <li>Frameworks: React</li>
                    <li>Control de versiones: Git/GitHub</li>
                </ul>
                <h2><FontAwesomeIcon icon={faServer} />Desarrollo BackEnd</h2>
                {/* <ul data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">  */}
                <ul>
                    <li>Node.js con express</li>
                    <li>Bases de datos : MySQL y PostgreSQL</li>
    
                </ul>
                <h2><FontAwesomeIcon icon={faMicrochip} />Sistemas embebidos</h2>
                {/* <ul data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">  */}
                <ul>
                    <li>C</li>
                    <li>C++</li>
                    <li>Proteus</li>
                </ul>
                <h2><FontAwesomeIcon icon={faAtom} />Data Science</h2>
                {/* <ul data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">  */}
                <ul >
                    <li>Python</li>
                    <li>Librerias: Matplotlip, Pandas, Numpy, Seaborn</li>
                    <li>Keras con tensorflow</li>
                </ul>
                <h2><FontAwesomeIcon icon={faSearch} />Posicionamiento SEO</h2>
                <ul >
                    <li>Poscionamiento web en buscadores</li>
                </ul>
                <p className="curriculum">
                    <a href="https://drive.google.com/file/d/1HXDwtxIYLcK4FgAtOoX0C7dqtDJpwhTK/view?usp=sharing" title="Curriculum - Desarrollador Web victor manuel astudillo" target="_blank" rel='noreferrer'>
                        <FontAwesomeIcon icon={faDownload} />
                        <span>Descargar CV </span>
                        </a>
                </p>
            </article>
        </section>
    );
};

export default habilidades;