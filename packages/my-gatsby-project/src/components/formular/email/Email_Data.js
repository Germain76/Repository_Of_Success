import React, { useState } from 'react';


export const Email_Data = ({text, onChange}) => {
    const [value, setValue] = useState(text);
    const handleChange = (event) => {
        setValue(event.target.text);
        // TODO : Validation ici   
        onChange(event.target.text);
    }
    
    return (
        <label>Email 
    <input 
    type="email"
    value={value} 
    onChange={handleChange} 
    placeholder="Veuillez saisir votre adresse Email dans ce champ s'il vous plait"
    />
    </label>
    );
};

export default Email_Data;