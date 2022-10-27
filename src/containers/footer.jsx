import React from 'react';
import '../styles/containers/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const footer = () => {
    return (
        <footer className="footer-main">
            <article className="footer-main__datos-contacto">
                <ul className="footer-main___list">
                    <li className="footer-main___items">
                        <FontAwesomeIcon icon={faMobileAlt} aria-hidden="true" className='footer-main__logo' /> (+57) 310 829 3703
                    </li>
                    <li className="footer-main___items">
                        <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" className='footer-main__logo' />victordelga.98@gmail.com
                    </li>
                </ul>
            </article>
            <aside className="footer-main__contacto-logos">
                <ul className="footer-main__list-logos">
                    <li className="footer-main__item-logo">
                        <a href="https://www.linkedin.com/in/victor-astudillo-983768215/" title="linkedin" target="_blank" rel='noreferrer'>
                            <FontAwesomeIcon icon={faLinkedin} className='footer-main__logo' />
                        </a>
                    </li>
                    <li className="footer-main__item-logo">
                        <a href="https://github.com/victormanu20/" title="GitHub" target="_blank" rel='noreferrer'>
                            <FontAwesomeIcon icon={faGithub} className='footer-main__logo' />
                        </a>
                    </li>
                    <li className="footer-main__item-logo"> 
                        <a href="https://www.instagram.com/victordelga11/" title="instagram" target="_blank" rel='noreferrer'>
                            <FontAwesomeIcon icon={faInstagram} className='footer-main__logo'/>
                        </a>
                    </li>
                    <li className="footer-main__item-logo">
                        <a href="https://twitter.com/Victorastu70?t=DiCE3znFdXBbo9LxcYtHeg&s=09" title="twitter" target="_blank" rel='noreferrer'>
                            <FontAwesomeIcon icon={faTwitter} className='footer-main__logo' />
                        </a>
                    </li>
                </ul>
            </aside>
            <section id="datos-personales" className="datos-personales">
                <p className="creditos datos">victor manuel astudillo - ingeniero Mecatronico </p>
                <p className="creditos copyright"> ©2022 - <span className="creditos"><a href="#sobre-mi" title="Créditos de la web"> Créditos de la web</a></span></p>
            </section>
        </footer>

    );
};

export default footer;