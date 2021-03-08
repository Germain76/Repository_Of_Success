import React, { useState } from "react"
import {IMaskInput} from 'react-imask';
export const Numbers = ({ numbers, handleChangeNumbers, name_field }) => {
    const regexNumbers = /^[0-9]*([,.][0-9]*)*$/;
    const [numberValue, setNumberValue] = useState('');
    const [message, setMessage] = useState("");

    /*const handleBlur = (event) => {
        event.preventDefault()
        console.log(numberValue)
        if (regexNumbers.test(numberValue)) {
            setMessage('Le chiffre rentré est correct')
            console.log(numberValue)
            handleChangeNumbers(numberValue);
        }
        else {
            console.log(numberValue)
            setMessage('Attention, le chiffre rentré n\'est pas conforme')
        }*/
    
    /*const onChange = (event) => {
       
        console.log(event.target)
        setNumberValue(event.target.value);
        
    }*/

    const handlechange = (event) =>{
        console.log(numberValue)
        
        setNumberValue(event);
        handleChangeNumbers(numberValue);
    }

    return (<label>{name_field}
    <IMaskInput
    mask={Number}
    //radix="."
    value={numberValue}

   
   onAccept={handlechange}
     
     placeholder='Nombre'
     />
     </label>
);
};

export default Numbers;