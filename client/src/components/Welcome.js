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
        setFormSubmitted(true);
    }

    return (
        <>
        <div id='icon-grid'>
            <img id='logo-size' src={Logo} alt=""/>
        </div>
        <div id='welcome-slide-grid'>
            <div className='welcome-slide-border'>
                <div id='welcome-grid-container'>
                <h1 id='welcome-text-grid'>Welcome to Learning Box!</h1>
                <Boxy className='boxy-size' id ='welcome-boxy-grid'/>
                {/* <img className='boxy-size' id ='welcome-boxy-grid' src={Boxy_Hello} alt=""/> */}
                {formSubmitted ? 
                // <div id='select-text-grid'>
                <h1 id='select-text-grid' className="grow" >Select a box to start a lesson...</h1>
                // </div> 
                :
                <form id='form-grid' onSubmit={handleFormSubmit}>
                  <div id='form-content-grid'>
                  <label htmlFor="name">Your Name: </label>
                  <input type="text" 
                        id="name" 
                        name="name" 
                        onChange={onChange} 
                        placeholder="Enter your name here" 
                        className="input-field"
                        required
                        autofocus />
                  <label htmlFor="age">Your Age: </label>
                  <input type="text" 
                        id="age" 
                        name="age" 
                        onChange={onChange} 
                        placeholder="Enter your age here" 
                        className="input-field" 
                        maxLength="2" />
                  <input type="submit" 
                        value="Submit"  
                        className="form-submit-button" />
                  </div>
                </form>}
                </div>
            </div>
        </div>
        </>
    )
}


export default Welcome