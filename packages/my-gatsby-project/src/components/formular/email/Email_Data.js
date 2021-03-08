import React, { useState } from 'react';


export const Email_Data = ({ text, handleChange }) => {
    const [value, setValue] = useState("");
    
    const [message, setMessage] = useState("");

    const emailRegex = /\S+@\S+\.\S+/;
    const handleBlur = (event) => {
        event.preventDefault()
        if (emailRegex.test(value)) {
            //setIsValid(true)
            setMessage('Email valide')
            handleChange(value);
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
        <label>Email
            <input
                type="email"
                value={value}
                onBlur={handleBlur}
                onChange={onChange}
                
                placeholder="Veuillez saisir votre adresse Email dans ce champ s'il vous plait"
            />
            {message}
            

        </label>


    );
};

export default Email_Data;