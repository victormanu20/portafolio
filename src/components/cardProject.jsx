import React from 'react';
const imagesProject = require.context('../assets/skills/projects',true);
const cardProject = ({item}) => {
    return (
        <div className="container-project__item-project">
            <h3 className="title-card"> {item.name} </h3>
            <img src={imagesProject(`./${item.image}`)} className="item-project__images" alt='tarjeta de proyectos del portafolio'/>
            <p className="item-project_description"> Maquetacion Html y CSS</p>
            <ul>
                <li className="item-project">
                    <a href={item.linkRepo} target="_blank" rel='noreferrer' className="item-project__link">Ver mas</a>
                </li>
            </ul>
        </div>
    );
};

export default cardProject;