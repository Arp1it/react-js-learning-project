// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About Us" /> */}
    <Navbar title="TextUtils" />
    {/* <Navbar /> */}

    <div className='container my-4'>
    <TextForm heading='Enter Text Below' />
    {/* <About /> */}
    </div>
    </>
  );
}

export default App;