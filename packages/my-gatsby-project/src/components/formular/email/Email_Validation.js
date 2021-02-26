import React from 'react';
import PropTypes from "prop-types";
import * as PopTypes from "prop-types";

export const Email_Validation = (props) => {
    const emailRegex = /\S+@\S+\.\S+/;

 if (emailRegex.test(props.text)) {
        props.setIsValid(true);
        props.setMessage('Your email looks good!');
      } else {
        props.setIsValid(false);
        props.setMessage('Please enter a valid email!');
      }
    
    return (
       <label>{props.message}</label> 
        );
};