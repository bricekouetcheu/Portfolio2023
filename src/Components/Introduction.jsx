import React, { useEffect, useRef, useState } from 'react';
import illustration from '../assets/illustration.svg'
import brice from '../assets/brice3.png';
import { BsDownload } from "react-icons/bs";
import cv from '../assets/cv.pdf'

const Introduction = () => {
   

 

  
    return (
        <div className='introduction'>
            <div className="introduction-right">
            <h1 >
          SALUT, JE SUIS BRICE RONALD KOUETCHEU...
          
        </h1>
                <p>
                    Etudiant passioné par les nouvelles techologies, actuellement en dernière année de bachelier option technologies de l'informatique. J'aime aussi beaucoup le cinema et les jeux videos.<br></br>
                    <br></br><br></br>
                    <a href={cv}> <button className="contact" > <BsDownload> </BsDownload> Mon cv  </button></a>


                </p>

            



            </div>

            <div className="introduction-left">
                <img src={brice} alt='illutration IT'/>

            </div>
            
        </div>
    );
};

export default Introduction;