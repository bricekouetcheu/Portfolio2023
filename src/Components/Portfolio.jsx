import React from 'react';
import Card from './Card';
import javascript from '../assets/javascript.png'
import python from '../assets/python.png'
import node from '../assets/node-express-mongo.png'
import devops from '../assets/devops.jpg'
import student from '../assets/student.jpg'


const Portfolio = () => {
    const card1Description ='Apprendre a Programmer en javascript'
    const card2Description ='Formation Apprendre a Programmer en Python'
    const card3Description ='Formation Developpement full stack'
    const card4Description ='Formation  Devops'
    const card5Description ='Job etudiant IT'
    const card6Description ='Conference/Jobs Days'
    return (
        <div className='portfolio'>
            <h1>MON PORTFOLIO</h1>
            <div className='card-content'>
                <Card img={javascript} title = {card1Description}></Card> 
                <Card img={python}title = {card2Description}></Card> 
                <Card img={node} title = {card3Description}></Card> 
                <Card img = {devops} title = {card4Description}></Card> 
                <Card img={student} title = {card5Description}></Card> 
                <Card title= {card6Description}></Card> 
            </div>

            <button className='summary-btn'>Hours summary</button>

            
        </div>
    );
};

export default Portfolio;