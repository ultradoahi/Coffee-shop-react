
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/home.jsx";
import SignIn from './pages/sign-in.jsx';
import SignUp from './pages/sign-up.jsx';
import ScrollUp from './components/home/scrollUp.jsx';
import Future from './components/in-the-future.jsx';
import "./App.css";
import { useState,useEffect } from 'react';

function App() {
  const [scroll,setScroll] = useState(0);

  useEffect(() => {
    function handleScroll(){
      setScroll(window.scrollY);
    }

    window.addEventListener("scroll",handleScroll)

    return () => window.removeEventListener("scroll",handleScroll)
  },[])

  return (
    <BrowserRouter>
      <ScrollUp verScroll={scroll}></ScrollUp>

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/sign-in' element={<SignIn />}/>
        <Route path='/sign-up' element={<SignUp />}/>
        <Route path='*' element={<Future />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
