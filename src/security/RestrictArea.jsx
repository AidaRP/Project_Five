import React, { useNavigate } from 'react-router-dom'

const RestrictArea = ({ valueTrue }) => {

let surf = useNavigate();

const user = localStorage.getItem("user");
return user ? valueTrue : surf("/login");


};

export default RestrictArea;