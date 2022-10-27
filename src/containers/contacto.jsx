import React from 'react';
import '../styles/containers/contacto.css'
import emailjs from '@emailjs/browser';
import background from '../assets/skills/background-contacto.jpg'
import backgroundCorner from '../assets/skills/fondo-esquina-contacto.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'



const contacto = () => {
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_ui9du56', 'template_w1vxgfy', e.target, 'm9mQ6UKMoP4ZPr7Xp')
            .then((response) => {
                alert('mensaje enviado')
            }, (err) => {
                alert('no se pudo enviar tu mensaje, por favor intenta nuevamente')
            });
    }
    return (
        <section id="contacto" className='contacto' style={{backgroundImage: `url(${background})`}}>
            <FontAwesomeIcon icon={faEnvelopeOpenText} className='contacto__email-image'/>
            <article className="container-contacto_form" id="formulario"
                style={{
                    backgroundImage: `url(${backgroundCorner})`
                }}
            >
                <h2 className="contacto-form__title">Contacto</h2>
                <div className="contacto-formBx">
                    {/* Formulario de contacto */}
                    <form id="form-contact" className="form-container_contacto" onSubmit={sendEmail}>
                        <div className="inputBox">
                            <label htmlFor="name">Nombre</label>
                            <input type="text" name="name" required="required" id="input_name" />
                        </div>
                        <div className="inputBox">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" required="required" defaultValue={""} id="email-form" />
                        </div>
                        <div className="inputBox">
                            <label htmlFor="message">Escriba su mensaje aquí...</label>
                            <textarea required="required" name="message" defaultValue={""} />
                        </div>
                        <button className="contacto-form__btn" type="submit" id="contacto-form__btn">Enviar</button>
                    </form>
                </div>
            </article>
        </section>

    );
}

export default contacto;