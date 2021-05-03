import React, {useState} from 'react';
//import Boxy_Hello from "./Boxy_Andy_2.svg";
import Logo from "./Logo.png";
import "./Welcome.css";
import '../App.css';
import {ReactComponent as Boxy} from './Boxy_A.svg';

const Welcome = ({onInput, formSubmitted, setFormSubmitted}) => {

    const [formData, setFormData] = useState({})

    const onChange = (e) =>{
        formData[e.target.id] = e.target.value;
        setFormData(formData);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        let line1 = document.querySelector('#line1');
        let line2 = document.querySelector('#line2');
        let line3 = document.querySelector('#line3');
        line1.textContent = "Hello";
        line2.textContent = formData.name+'!';
        line3.textContent = "";
        onInput(formData);
        setFormSubmitted(true)
    }

    return (
        <>
        <div id='icon-grid'>
            <img id='logo-size' src={Logo} alt=""/>
        </div>
        <div id='welcome-slide-grid'>
            <div className='welcome-slide-border'>
                <div id='welcome-grid-container'>
                <h2 id='welcome-text-grid'>Welcome to Learning Box!</h2>
                <Boxy />
                {/* <img className='boxy-size' id ='welcome-boxy-grid' src={Boxy_Hello} alt=""/> */}
                {formSubmitted ? 
                <div id='select-text-grid'>
                    <h1>Select a box to start a lesson...</h1>
                </div> :
                <form>
                  <label htmlFor="name">Your Name: </label>
                  <input type="text" id="name" name="name" onChange={onChange} placeholder="Enter your name here"></input>
                  <label htmlFor="age">Your Age: </label>
                  <input type="text" id="age" name="age" onChange={onChange} placeholder="Enter your age here"></input>
                  <input type="submit" value="submit" onClick={handleFormSubmit}></input>
                </form>}
                </div>
            </div>
        </div>
        </>
    )
}




export default Welcome