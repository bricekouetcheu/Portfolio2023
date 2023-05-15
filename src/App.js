import logo from './logo.svg';
import './index.css';
import Navbar from './Components/Navbar';
import Introduction from './Components/Introduction';
import Card from './Components/Card';
import Portfolio from './Components/Portfolio';
import New from './Components/New';
import Skill from './Components/Skill';
function App() {
  return (
    <div className='app'>
      
      
    <Navbar></Navbar>
    <Introduction></Introduction>
    <Portfolio></Portfolio>
    <Skill></Skill>
    

    </div>
  );
}

export default App;
