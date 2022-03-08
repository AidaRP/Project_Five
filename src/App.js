
import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from './containers/Header/Header';
import Footer from './containers/Footer/Footer';

import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Profile from './components/Profile/Profile';
import Admin from './components/Admin/Admin';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      
      <Header/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/admin" element={<Admin/>}/>

      </Routes>

      <Footer/>
    
    </BrowserRouter>

    </div>
  );
}

export default App;
