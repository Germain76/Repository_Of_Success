import React, { useState } from "react";
import {Email_Data} from './email/Email_Data';
import {Numbers} from './Numbers';

function Formular() {
    /* UseState et fonction pour le composant Email*/
    const [text, setText] = useState ("");
    const handleChange = (newValue) => setText(newValue);

    /* UseState, constante et fonction pour le composant number*/
    const [numbers, setNumbers]=useState(0);
    const handleChangeNumbers = (newValue) => setNumbers(newValue);
    const name_field= "Dépense du capital";



    
    
    return (
    <div>
        <Email_Data 
        text={text} 
        handleChange={handleChange} 
        />

        <Numbers
        numbers={numbers} 
        handleChangeNumbers ={handleChangeNumbers}
        name_field={name_field}
        />
    </div>
    );
}
export default Formular;