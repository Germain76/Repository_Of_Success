import React, { useState } from 'react';


export const Email_Data = ({text, handleChange}) => {
    const [value, setValue] = useState("");
    const onChange = (event) => {
        event.preventDefault();
        setValue(event.target.value);
        // TODO : Validation ici   
        handleChange(value);
    }
    
    return (
        <label>Email 
    <input 
    type="email"
    value={value} 
    onChange={onChange} 
    placeholder="Veuillez saisir votre adresse Email dans ce champ s'il vous plait"
    />
    </label>
    );
};

export default Email_Data;