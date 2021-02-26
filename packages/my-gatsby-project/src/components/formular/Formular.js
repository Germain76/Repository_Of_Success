import React, { useState } from "react";
import {Email_Data} from './email/Email_Data';
import {Email_Validation} from './email/Email_Validation';

function Formular() {
    const [text, setText] = useState ('');
    const [isvalid, setIsValid] = useState(false);
    const [regex, setRegex] = ('');
    const [message, setMessage] = ('');
 

    const handleChange =(newValue) => setText(newValue);
    const handleChangeValidation=(newValue) => setIsValid(newValue);
    
    return (<React.Fragment>
        <Email_Data text={text} onChange={handleChange}/>
        
      <Email_Validation 
        text={text}  
        onChange={handleChange} 
        message = {message} 
        setMessage = {handleChangeValidation} 
        setIsValid = {setIsValid}/>
        </React.Fragment>

    );
}
export default Formular;