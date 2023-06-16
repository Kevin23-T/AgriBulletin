import './App.css';
import Admin from './Components/Admin/Admin';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Complaint from './Components/Complaint/Complaint';
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Router>
       <Routes>
          <Route exact path="/" element={<Admin/>} />
          <Route path="/Compliant" element={<Complaint/>} />
          <Route path="/Navbar" element={<Navbar/>} />
    </Routes>
    </Router>
    
    </div>
  );
}

export default App;
