import './App.css';
import Admin from './Components/Admin/Admin';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Complaint from './Components/Complaint/Complaint';


function App() {
  return (
    <div className="App">
      <Router>
       <Routes>
          <Route exact path="/" element={<Admin/>} />
        <Route path="/Compliant" component={<Complaint/>} />
    </Routes>
    </Router>
    
    </div>
  );
}

export default App;
