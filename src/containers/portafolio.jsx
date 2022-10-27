import React from 'react'
import '../styles/containers/portafolio.css'
import CardProject from '../components/cardProject'
import { projects } from '../hooks/useProjects'
const portafolio = () => {
    
    return (
        <section id="portafolio">
            <h2>Portafolio</h2>
            <article className="container-project">
                {
                    projects.map((item)=>(
                        <CardProject item={item}/>
                    ))
                }
            </article>
        </section>
    );
}

export default portafolio;