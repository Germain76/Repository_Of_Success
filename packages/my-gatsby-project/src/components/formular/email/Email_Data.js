import React, { useState } from 'react';


export const Email_Data = ({ text, handlerChange, regex, label, placeholder}) => {
    const [value, setValue] = useState("");
    
    const [message, setMessage] = useState("");
    console.log(regex)
    //const emailRegex = /\S+@\S+\.\S+/;
    const handleBlur = (event) => {
        event.preventDefault()
        if (regex.test(value)) {
            //setIsValid(true)
            setMessage('Email valide')
            handlerChange(value);
        } 
        else {
            //setIsValid(false)
            setMessage('Email invalide')
        }
    }
    const onChange = (event) => {
        event.preventDefault()
        setValue(event.target.value);

    }
    //handleblur vérifié quand tu sors champ
    // si valide passer
    //rajoute un évenement au niveau de input
    //onblur, vérification de la validité de l'email

    return (
        <label> {label}
            <input
                type="email"
                name="email"
                value={value}
                onBlur={handleBlur}
                onChange={onChange}
                
                placeholder={placeholder}
            />
            {message}
            

        </label>


    );
};

export default Email_Data;