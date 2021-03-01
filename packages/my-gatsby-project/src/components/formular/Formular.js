import React, { useState } from "react";
import {Email_Data} from './email/Email_Data';

function Formular() {
    const [text, setText] = useState ("");



    const handleChange =(newValue) => setText(newValue);
    
    
    return (<div>
        <Email_Data text={text} onChange={handleChange} />
        </div>

    );
}
export default Formular;