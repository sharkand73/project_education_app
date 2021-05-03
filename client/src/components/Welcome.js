import React, {useState} from 'react';
import Boxy_Hello from "./Boxy_Hello.png";
import Logo from "./Logo.png";
import "./Welcome.css";

const Welcome = ({onInput}) => {

    const [formData, setFormData] = useState({})

    const onChange = (e) =>{
        formData[e.target.id] = e.target.value;
        setFormData(formData);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        onInput(formData)
    }

    return (
        <div>
            <img id='logo-size' src={Logo} alt=""/>
            <h1>Select a box to start a lesson</h1>
            <h2>Welcome to Learning Box!</h2>
            <img id='boxy-size' src={Boxy_Hello} alt=""/>
            <form>
                <label htmlFor="name">Your Name: </label>
                <input type="text" id="name" name="name" onChange={onChange} defaultValue="Enter your name here"></input>
                <label htmlFor="age">Your Age: </label>
                <input type="text" id="age" name="age" onChange={onChange} defaultValue="Enter your age here"></input>
                <input type="submit" value="submit" onClick={handleFormSubmit}></input>
            </form>
        </div>
    )
}




export default Welcome