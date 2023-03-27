import React from 'react';
import illustration from '../assets/illustration.svg'

const Introduction = () => {
    return (
        <div className='introduction'>
            <div className="introduction-right">
                <h1>SALUT, JE SUIS BRICE RONALD KOUETCHEU...</h1>
                <p>
                    jeune etudiant passioné par l'informatique et acutellement en dernière année bachelier option technologies de l'informatique. J'aime aussi beaucoup le cinema et les jeux videos

                </p>

            </div>

            <div className="introduction-left">
                <img src={illustration} alt='illutration IT'/>

            </div>
            
        </div>
    );
};

export default Introduction;