import React,{useState} from 'react';
import '../styles/containers/Home.css'
import Inicio from '../containers/inicio';
import SobreMi from './sobreMi';
import Habilidades from './habilidades';
import Portafolio from './portafolio';
import Contacto from './contacto';
import Footer from './footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
const Home = () => {
    const [visualizeTop, setVisualizeTop] = useState(false);
    window.onscroll = function() {
        var y = window.scrollY;
        if (y > 380) {
            setVisualizeTop(true);
        } else {
            setVisualizeTop(false);
        };
    };
    return (
        <main class="container-main">
            <Inicio/>
            <SobreMi/>
            <Habilidades/>
            <Portafolio/>
            <Contacto/>
            <Footer/>
            {visualizeTop &&
            <span>
                <a id="arrow-up" title="Back to top" href="#header" >
                    <FontAwesomeIcon icon={faAngleUp} aria-hidden="true"></FontAwesomeIcon>
                </a>
            </span>
            }
        </main>
    );
}

export default Home;