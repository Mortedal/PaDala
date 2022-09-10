
import './App.css';
import Authen from  './components/Authen';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './pages/About';  
import Dashboard from './pages/Dashboard';  


import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return<div className="App"> 
    <Router>
    <Navbar />
    <Routes>
      <Route element={<Authen/>}>
      <Route path='/dashboard' exact element={<Dashboard/>}/>
      </Route>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/about' exact element={<About/>}/>
      <Route path='/signup' exact element={<Signup/>}/>
      <Route path='/login' exact element={<Login/>}/>
      </Routes>
    <Footer />
    </Router>
   </div>
}

export default App;
