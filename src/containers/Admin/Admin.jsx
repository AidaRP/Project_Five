
// import axios from 'axios';
// import React from 'react'
// import { useNavigate } from 'react-router-dom';

// import './Admin.scss'

// const valueAdmin = (props) => {

//      let surf = useNavigate();

//      const [datosAdmin, setDatosAdmin] = useState({rol:""});
//      const [msgAdminError, setMsgErrorAdmin] = useState({rol: 0});

//     //  Handler(Manejador)
//     const completeAdminData = (e) => {
//       setDatosAdmin({...datosAdmin, [e.target.rol]: e.target.value})
//     };

//     //Funciones locales
//     const admin = async () => {
//       try {
        
//         let body = {
//           rol: datosAdmin.rol
//         }

//         let resultado = await axios.post("")








//       } catch (error) {
        
//       }




//     }








//     return (
//     <div className='colorsAdmin'>
//        🔱 If you are God, you are the admin ⚜️
//     </div>
//   )
// }

// export default Admin;


import React from 'react'

import './Admin.scss'

const Admin = () => {
  
    return (
    <div className='colorsAdmin'>
       🔱 If you are God, you are the admin ⚜️
    </div>
  )
}

export default Admin;