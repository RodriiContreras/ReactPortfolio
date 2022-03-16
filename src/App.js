
import './App.css';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import HomeAboutMe from './components/AboutMe/HomeAboutMe';
import HomeSkills from './components/skills/HomeSkills'
import HomeProjects from './components/Projects/HomeProjects';
function App() {
  return (
    <Router>
    <div>
    <Routes>
      <Route exact path='/' element={<Home/>}/> 

      <Route exact path='/AboutMe' element={<HomeAboutMe/>}/> 

      <Route exact path='/Skills' element={<HomeSkills/>}/> 

      <Route exact path='/Contact' element={<Home/>}/> 

      <Route exact path='/Projects' element={<HomeProjects/>}/> 
    </Routes>
    </div>
    </Router>
  );
}

export default App;
