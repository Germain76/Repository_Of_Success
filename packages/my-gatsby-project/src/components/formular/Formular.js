import React, { useState } from "react";
import {Email_Data} from './email/Email_Data';
import {Numbers} from './Numbers';
import {PhoneNumber} from './PhoneNumber';
import "../style.css"

function Formular() {
    /* UseState et fonction pour le composant Email*/
    const [text, setText] = useState ("");
    const handleChange = (newValue) => setText(newValue);

    /* UseState, constante et fonction pour le composant number*/
    const [numbers, setNumbers]=useState("");
    const handleChangeNumbers = (newValue) => setNumbers(newValue);
    const name_field= "Dépense du capital";

    /* UseState, constante et fonction pour le composant PhoneNumber*/
    const [phoneNumber, setPhoneNumber]=useState(0);
    const handleChangePhoneNumbers = (newValue) => setPhoneNumber(newValue);
    const name_field_Contry= "France";


    const [numberObj, setNumber] = useState({number:0});
    const [stringObj, setString] = useState({string:''});
    const arrayForm = 
    [
        <Email_Data text={text} handleChange={handleChange} />,
        <Numbers numbers={numbers} handleChangeNumbers ={handleChangeNumbers} name_field={name_field}/>, 
        <PhoneNumber phoneNumber= {phoneNumber} handleChangePhoneNumbers={handleChangePhoneNumbers}
        name_field_Contry={name_field_Contry}/>
    ]
    const listComp = arrayForm.map((comp,index)=>
        <li key key= {index}>
            {comp}
        </li>
    );

    
    
    return (
   /* <div>
        <Email_Data 
        text={text} 
        handleChange={handleChange} 
        
        />
      

        <Numbers
        numbers={numbers} 
        handleChangeNumbers ={handleChangeNumbers}
        name_field={name_field}
        />

        <PhoneNumber phoneNumber= {phoneNumber} 
        handleChangePhoneNumbers={handleChangePhoneNumbers}
        name_field_Contry={name_field_Contry}
        />
    </div>*/
    <div><ul>{listComp}</ul></div>
    );
}
export default Formular;