

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
                    <div className="link" onClick={()=>surf("/")}>🏠Home</div>
                    <div className="link" onClick={()=>surf("/login")}>🎪 Login</div>
                    <div className="link" onClick={()=>surf("/register")}>Registro</div>
                    <div className="link" onClick={()=>surf("/admin")}>Admin🌌</div>
                    <div className="link" onClick={()=>surf("/films")}>Films🎥</div>
                </div>
            
            </div>
        )
    }else {
        return (
            <div className='colorsHeader'>
                <div className="headerPaint"></div>
                <div className="headerPaint"></div>
                <div className="headerPaint linksDesign">
                    <div className="link" onClick={()=>surf("/")}>🏠Home</div>
                    <div className="link" onClick={()=>surf("/films")}>Films🎥</div>
                    <div className="link" onClick={()=>surf("/profile")}>{props.credentials?.usuario.nickname}</div>
                    <div className="link" onClick={()=>logOut()}>Logout</div>
                </div>
            </div>
        )
    }


}

export default connect((state)=>({
    credentials: state.credentials
}))(Header);

