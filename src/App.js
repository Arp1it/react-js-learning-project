// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'

function App() {
  const [mode, setMode] = useState('light');

  const toglemode = () =>{
    if (mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      document.body.style.color = 'white'
    }
    
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
    }
  }

  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About Us" /> */}
    <Navbar title="TextUtils" modee={mode} tooglemode={toglemode} />
    {/* <Navbar /> */}

    <div className='container my-4'>
    <TextForm heading='Enter Text Below' />
    {/* <About /> */}
    </div>
    </>
  );
}

export default App;