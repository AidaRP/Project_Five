
import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import RestrictArea from './security/RestrictArea';

import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
import Register from './containers/Register/Register';
import Profile from './containers/Profile/Profile';
import Admin from './containers/Admin/Admin';
import Films from './containers/Films/Films';
import MovieDetail from './containers/MovieDetail/MovieDetail';
import Rent from './components/Rent/Rent'
import ErrorNotFound from './components/ErrorNotFound/ErrorNotFound';


function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Header/>

        <Routes>
          <Route path="/" element={<Home/> } />
          <Route path="/login" element={<Login/> } />
          <Route path="/register" element={<Register/> } />
          <Route path="/films" element={<Films/> } />
          <Route path="/moviedetail" element={<MovieDetail/> } />
          <Route path="/rent" element={<Rent/> } />
          <Route path="/profile" element={<Profile/> } />
          <Route path="/admin" element={<Admin/> } />
          <Route path="*" element={<ErrorNotFound /> }/>

          {/* <Route  element={<Profile/>}/>
          <Route path="/admin" element={<Admin/>}/> */}
          {/* path="/profile"
          element={
            <RestrictArea>
              <Profile/>
              <Admin/>
            </RestrictArea>
          } */}

        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
