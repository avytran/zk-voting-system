import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { HomePage } from './pages/HomePage'; 
import { VotingPage } from './pages/VotingPage';
import './App.css';


function App() {  
  return (  
    <Router>  
      <div className='App'>  
        <Routes>  
          <Route path="/" element={<HomePage />} /> 
        </Routes> 
        <Routes>  
          <Route path="/voting" element={<VotingPage />} /> 
        </Routes>   
      </div>  
    </Router>  
  );  
}  

export default App;
