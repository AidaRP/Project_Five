
import React from 'react'

import './Admin.scss'

const valueAdmin = (props) => {
     const [datosAdmin, setDatosAdmin] = useState({rol:""});
     const [msgAdminError, setMsgErrorAdmin] = useState({rol: 0});
    return (
    <div className='colorsAdmin'>
       🔱 If you are God, you are the admin ⚜️
    </div>
  )
}

export default Admin;
