import React, { useState } from 'react';


export const Email_Data = (props) => {
    const handleChange = (event) => {
        // TODO : Validation ici   
        props.onChange(event.target.text);
    }
    
    return (
        <label>Email 
    <input 
    value={props.text} 
    onChange={handleChange} 
    placeholder="Veuillez saisir votre adresse Email dans ce champ s'il vous plait"
    />
    </label>
    );
};

export default Email_Data;