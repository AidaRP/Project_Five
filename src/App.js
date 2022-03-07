
import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      
      <Header/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>

      </Routes>

      <Footer/>
    
    </BrowserRouter>

    </div>
  );
}

export default App;
