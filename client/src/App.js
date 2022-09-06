
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return <div className="App"> 
    <Router>
    <Navbar />
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/login' exact element={<Login/>}/>
      </Routes>
    </Router>
   </div>
}

export default App;