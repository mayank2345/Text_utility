import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';

function App() {

  // Alert logic
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  // Dark mode toggle logic
  const [mode, setMode] = useState('light')
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#003060' // dark blue
      showAlert('Dark Mode Enabled', 'success')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = '#FAE8E0' // cream
      showAlert('Light Mode Enabled', 'success')
    }
  }

  

  return (
    <Router>
      <Navbar title = 'TextUtility' about = "About"  mode={mode} toggleMode = {toggleMode} />
      <Alert alert = {alert} />
      <div className='container my-3'>
      <Routes>
          <Route exact path="/about" element={<About mode = {mode} />}>
          </Route>
          <Route exact path="/" element={< TextForm heading ='Enter the text to analyze below' mode={mode} showAlert = {showAlert} />}>
          </Route>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;

