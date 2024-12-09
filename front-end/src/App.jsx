import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { HomePage } from './pages/HomePage'; 
import { VotingPage } from './pages/VotingPage';
import { Navbar } from './components/Navbar';
import './App.css';
import { useState } from 'react';
import { LogIn } from './pages/LogIn';


function App() {
  const [isLogged, setLogIn] = useState(false);
  const [voter, setVoter] = useState({});
  
  return (  
    <Router>  
      <div className='App'>  
        <Navbar isLogged={isLogged}/>
        <Routes>  
          <Route path="/" element={<HomePage />} /> 
        </Routes> 
        <Routes>  
          <Route path="/voting" element={<VotingPage isLogged={isLogged} voter={voter} setVoter={setVoter}/>} /> 
        </Routes>  
        <Routes>  
          <Route path="/log-in" element={<LogIn setVoter={setVoter} setLogIn={setLogIn}/>} /> 
        </Routes> 
      </div>  
    </Router>  
  );  
}  

export default App;
