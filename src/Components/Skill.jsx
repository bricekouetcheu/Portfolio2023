import React from 'react';
import git from '../assets/git.jpg'
import java from '../assets/java.png'
import react from '../assets/react.png'
import vue from '../assets/vue.png'
import jest from '../assets/jest.png'
import express from '../assets/express.png'
import agile from '../assets/agile.png'
import django from '../assets/django.png'
import postgres from '../assets/postgres.png'
import devops from '../assets/devops5.png'

const Skill = () => {
    return (
        <div className='skill'>
            <h1> Techno </h1>
            <div className='skill-content'>
                <img src={react} alt="react logo" />
                <img src={git} alt="git logo" />
                <img src={java} alt="java logo" />
                <img src={vue} alt="vue logo" />
                <img src={jest} alt="jest logo" />
                <img src={django} alt="django logo" />
                <img src={express} alt="express logo" />
                <img src={postgres} alt="postgres logo" />
                <img src={agile} alt="agile logo" />
                <img src={devops} alt="python logo" />


            </div>

            

            
        </div>
    );
};

export default Skill;