import React from 'react';
import Boxy_Hello from "./Boxy_Hello.png";
import Logo from "./Logo.png";
import "./Welcome.css";

const Welcome = () => {

    return (
        <div>
            <img id='logo-size' src={Logo} alt=""/>
            <h1>Select a box to start a lesson</h1>
            <h2>Welcome to Learning Box!</h2>
            <img id='boxy-size' src={Boxy_Hello} alt=""/>
        </div>
    )
}




export default Welcome