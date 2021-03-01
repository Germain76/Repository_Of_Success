import React, { useState } from 'react';


export const Email_Data = (props) => {
    const handleChange = (event) => props.onChange(event.target.text);
    
    return (
        <label>Email 
    <input 
    value={props.text} 
    onChange={handleChange} 
    />
    </label>
    );
};

export default Email_Data;