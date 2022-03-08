
import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
import Register from './containers/Register/Register';
import Profile from './containers/Profile/Profile';
import Admin from './containers/Admin/Admin';


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
