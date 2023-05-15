import React from 'react';

const Summary = (props) => {
    return (
        <div className='summary'>
            <div className='summary-table'>
            <table>
                <thead>
                    <tr>
                    <th>Thème</th>
                    <th>Activités</th>
                    <th>Heures compatbilitées</th>
                    <th>Heures réelles</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Developpement web</td>
                        <td>formation javascript</td>
                        <td>10</td>
                        <td>15</td>
                    </tr>
                    <tr>
                        <td>Developpement applicatif</td>
                        <td>formation apprendre a programmer en python</td>
                        <td>10</td>
                        <td>12</td>
                    </tr>
                    <tr>
                        <td>Developpement fullstack</td>
                        <td>formation node js express mongo db</td>
                        <td>10</td>
                        <td>12</td>
                    </tr>
                    <tr>
                        <td>Devops</td>
                        <td>formation Devops</td>
                        <td>6</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>Devops</td>
                        <td>formation Docker </td>
                        <td>8</td>
                        <td>8</td>
                    </tr>
                    <tr>
                        <td>Workshop</td>
                        <td> workshop dualboot + git et github Louvain linux </td>
                        <td>4</td>
                        <td>+5</td>
                    </tr>
                    <tr>
                        <td>conferences/visites d'entreprises</td>
                        <td>visites d"entreprise</td>
                        <td>8</td>
                        <td>+10</td>
                    </tr>
                    <tr>
                        <td>Job etudiant</td>
                        <td>job etudiant chez colruyt</td>
                        <td>10</td>
                        <td>+100</td>
                    </tr>
                    <tr id='total'>
                        <td></td>
                        <td>Total</td>
                        <td>66</td>
                        <td>+150</td>
                    </tr>
                </tbody>
                </table>


                <button onClick={props.onCloseModal} className="close-btn"> FERMER</button>
            </div>
            
        </div>
    );
};

export default Summary;