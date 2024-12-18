import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import TextForm from './components/TextForm';
import About from './components/About';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';



function App() {
  return (
    <Router>
      <Navbar title="TextUtils"  />
      <div>
        <Routes>

          <Route path="/" element={<TextForm></TextForm>} />
          <Route path='/about' element={<About></About>}></Route>
         
        </Routes>
      </div>
    </Router>
  

  );
}

export default App;
