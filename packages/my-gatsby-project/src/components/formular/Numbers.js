import React, { useState } from "react"
import {IMaskInput} from 'react-imask';
export const Numbers = ({ numbers, handlerChange, labelNumber,objCountry}) => {
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
        handlerChange(numberValue);
    }

    return (<label>{labelNumber} {objCountry}
    <IMaskInput
    mask={Number}
    //radix="."
    value={numberValue}
    name = "numbersFields"
   
   onAccept={handlechange}
     
     placeholder='Nombre'
     />
     </label>
);
};

export default Numbers;