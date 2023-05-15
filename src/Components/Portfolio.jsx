import React, { useState } from 'react';
import Card from './Card';
import javascript from '../assets/javascript.png'
import javascript1 from '../assets/javascript1.png'
import python from '../assets/python.png'
import python1 from '../assets/python1.png'
import node from '../assets/node-express-mongo.png'
import node1 from '../assets/node1.png'
import devops from '../assets/devops.jpg'
import devops2 from '../assets/devops2.png'
import devops3 from '../assets/devops3.png'
import student from '../assets/student.jpg'
import student1 from '../assets/student1.png'
import student2 from '../assets/student2.png'
import conference from '../assets/conferences.jpg'
import conference1 from '../assets/conference1.png'
import conference2 from '../assets/conference2.png'
import conference3 from '../assets/conference3.png'
import conference4 from '../assets/conference4.png'
import Summary from './Summary';

const Portfolio = () => {

  const [openModal, setOpenModal]= useState(false)

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };



    const card1Description ='Apprendre a Programmer en javascript'
    const card2Description ='Formation Apprendre a Programmer en Python'
    const card3Description ='Formation Developpement full stack'
    const card4Description ='Formation  Devops'
    const card5Description ='Job etudiant IT'
    const card6Description ='Conference/Jobs Days'

    const explanation1 = `Le javascript etant un element essentiel du web, cette formation m'a permis de me familiariser avec ce language `
    const explanation2 = `En deuxieme bachelier, nous avons eu à etudier python, qui encore aujourd'hui l'un des languages les plus populaire. cette formation m'a permis de completer les enseignements recus en cours `
    const explanation4 = ` `
    const explanation3 = `Dans le soucis d'en apprendre plus sur le developpement web, j'ai opté pour une formation en nodejs express + mongo db. afin de developper d'en savoir unpeu plus sur le developpement orienté backend et les base de données`
    const explanation5 = `Au cours de mon cursus, j'ai parallellement effectué de nombreux jobs etudiants dans differentes entreprises et domaines. Ces jobs m'ont permis de gagner permis de developper des softs skills qui me m'aideront surement dans ma future vie professionnelle`
    const explanation6 = ` Desireux de toujours en apprendre plus dans le domaine de l'IT, j'ai tout le long de mon cursur assisté à de nombreuses conferences, Jobday ou encore des workshops `
    const image1 = [
        { url: javascript1, title: "javascript" },
        
       
      ];

      const image2 = [
        { url:  python1, title: " python1" },
       
      ]

      const image3 = [
        { url: node1 , title: "node" },
       
      ]

      const image4 = [
        { url: devops2, title: "devops2" },
        { url: devops3, title: "devops3"  },
       
      ]

      const image5 = [
        { url: student1, title: "beach" },
        { url: student2, title: "boat" },
       
      ]

      const image6 = [
        { url: conference1, title: "beach" },
        { url: conference2, title: "boat" },
        { url: conference3, title: "boat" },
        { url: conference4, title: "boat" },
      
       
      ]


    return (
        <div className='portfolio'>
            <h1>MON PORTFOLIO</h1>
            <div className='card-content'>
                <Card img={javascript} title = {card1Description} description = 'dev javascript' hours = '15h' slides={image1} explanation = {explanation1}></Card> 
                <Card img={python}title = {card2Description} description = 'dev applicatif' hours = '12h' slides={image2} explanation = {explanation2}></Card> 
                <Card img={node} title = {card3Description} description = 'dev fullstack' hours = '12h' slides={image3} explanation = {explanation3}></Card> 
                <Card img = {devops} title = {card4Description} description = 'DevOps' hours = '14h' slides={image4} explanation = {explanation4}></Card> 
                <Card img={student} title = {card5Description} description = 'Job etudiant' hours = '>100h'slides={image5} explanation = {explanation5}></Card> 
                <Card img = {conference} title= {card6Description} slides = {image6} description = 'Conferences' hours = '>15h' explanation = {explanation6}></Card> 
            </div>

            <button className='summary-btn' onClick={handleOpenModal}>Tableau recapitulatif</button>
            {openModal && (
        // eslint-disable-next-line react/jsx-pascal-case
        <Summary  onCloseModal={handleCloseModal}/>
      )}

            
        </div>
    );
};

export default Portfolio;