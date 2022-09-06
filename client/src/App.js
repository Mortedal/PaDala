
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';  
//import Footer from "./components/Footer";
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return<div className="App"> 
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous"/>
    <Router>
    <Navbar />
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/login' exact element={<Login/>}/>
      <Route path='/about' exact element={<About/>}/>
      </Routes>
    </Router>
   </div>
}

export default App;
