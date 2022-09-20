
import './App.css';
import Authen from  './components/Authen';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Services from './pages/Services';
import About from './pages/About';  
import Dashboard from './pages/Dashboard';  
import ProfileDash from './pages/ProfileDash';
import TransactionsDash from './pages/TransactionsDash';
import AddressDash from './pages/AddressDash';
import FavoriteDash from './pages/FavoriteDash';
import PopupForm from './components/PopupForm';

import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return<div className="App"> 
    {/* <Router>
    <Navbar />
    <Routes>
      <Route element={<Authen/>}>
      <Route path='/dashboard' exact element={<Dashboard/>}/>
      <Route path='/profile' exact element={<ProfileDash/>}/>
      <Route path='/transaction' exact element={<TransactionsDash/>}/>
      <Route path='/address' exact element={<AddressDash/>}/>
      <Route path='/favorite' exact element={<FavoriteDash/>}/>
      </Route>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/services' exact element={<Services/>}/>
      <Route path='/about' exact element={<About/>}/>
      <Route path='/signup' exact element={<Signup/>}/>
      <Route path='/login' exact element={<Login/>}/>
      <Route path='/popupform' exact element={<PopupForm/>}/>
      </Routes>
    <Footer />
    </Router> */}

    {/*-------------------------------for design-------------------------------------------------*/}

       <Router>
    <Navbar />
    <Routes>
      <Route path='/dashboard' exact element={<Dashboard/>}/>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/about' exact element={<About/>}/>
      <Route path='/signup' exact element={<Signup/>}/>
      <Route path='/services' exact element={<Services/>}/>
      <Route path='/login' exact element={<Login/>}/>
      <Route path='/profile' exact element={<ProfileDash/>}/>
      <Route path='/transaction' exact element={<TransactionsDash/>}/>
      <Route path='/address' exact element={<AddressDash/>}/>
      <Route path='/favorite' exact element={<FavoriteDash/>}/>
      <Route path='/popupform' exact element={<PopupForm/>}/>
      </Routes>
    <Footer />
    </Router>
   </div>
}

export default App;
