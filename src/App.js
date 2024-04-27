// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react'


// let o = ["TextUtils", "Install TextUtils now!!", "TextUtils Helps you to format your text from your desire!"]
// setInterval(()=>{
//   document.title = o[Math.floor(Math.random()*o.length)]
// }, 3330)

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) =>{
    setAlert(null)
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null)
    }, 2333);
  }

  const toglemode = () =>{
    if (mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      document.body.style.color = 'white'
      showAlert("Dark mode is enabled", "info")
    }
    
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert("Dark mode is disabled", "info")
    }
  }

  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About Us" /> */}
    <Navbar title="TextUtils" modee={mode} tooglemode={toglemode} />
    {/* <Navbar /> */}
    <Alert alert={alert}/>

    <div className='container my-4'>
    <TextForm heading='Enter Text Below' showalert={showAlert} />
    {/* <About /> */}
    </div>
    </>
  );
}

export default App;