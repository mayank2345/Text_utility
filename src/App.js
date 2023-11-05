import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

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
    <div>
      <Navbar title = 'TextUtility' about = "About"  mode={mode} toggleMode = {toggleMode} />
      <Alert alert = {alert} />
      <div className='container my-3'>
        < TextForm heading ='Enter the text to analyze below' mode={mode} showAlert = {showAlert} />
      </div>
    </div>
    
  );
}

export default App;

