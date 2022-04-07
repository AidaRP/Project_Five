

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { LOGOUT } from '../../redux/types';
import {connect} from 'react-redux';

import './Header.scss';



const Header = (props) => {


    let surfing = useNavigate();

    useEffect(()=>{
        console.log(props.credentials);
    })

     const surf = (view) => {

        setTimeout(()=> {
            surfing(view);
        }, 200);

    }

    const logOut = () => {
    //     Borrar de RDX las credenciales
        props.dispatch({type:LOGOUT});

        setTimeout(()=>{
            surfing("/");
        },1500);
    }

    if(!props.credentials?.token){
        return (
            <div className='colorsHeader'>

                <div className="headerPaint"></div>
                <div className="headerPaint"></div>
                <div className="headerPaint linksDesign">
                    <div className="link Home" onClick={()=>surf("/")}>🏠Home</div>
                    <div className="link Login" onClick={()=>surf("/login")}>🎪 Login</div>
                    <div className="link Regs" onClick={()=>surf("/register")}>Registro</div>
                    <div className="link Films" onClick={()=>surf("/films")}>Films🎥</div>
                </div>
            
            </div>
        )
    }else if(props.credentials?.token && props.credentials?.usuario.rol === true){
        return (
            <div className='colorsHeader'>
                <div className="headerPaint"></div>
                <div className="headerPaint"></div>
                <div className="headerPaint linksDesign">
                    <div className="link Home" onClick={()=>surf("/")}>🏠Home</div>
                    <div className="link Films" onClick={()=>surf("/films")}>Films🎥</div>
                    <div className="link Prof" onClick={()=>surf("/profile")}>{props.credentials?.usuario.nick}</div>
                    <div className="link Admin" onClick={()=>surf("/admin")}>ADMIN🐉</div>
                    <div className="link Log" onClick={()=>logOut()}>Logout</div>
                </div>
            </div>
        )
    }else{
        return (
            <div className='colorsHeader'>
                <div className="headerPaint"></div>
                <div className="headerPaint"></div>
                <div className="headerPaint linksDesign">
                    <div className="link Home" onClick={()=>surf("/")}>🏠Home</div>
                    <div className="link Films" onClick={()=>surf("/films")}>Films🎥</div>
                    <div className="link Prof" onClick={()=>surf("/profile")}>{props.credentials?.usuario.nick}</div>
                    <div className="link Log" onClick={()=>logOut()}>Logout</div>
                </div>
            </div>
        )
    }


}

export default connect((state)=>({
    credentials: state.credentials
}))(Header);

