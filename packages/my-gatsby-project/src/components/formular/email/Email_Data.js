import React from 'react';
import PropTypes from "prop-types";
import * as PopTypes from "prop-types";

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