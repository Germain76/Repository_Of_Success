import React, { useState } from 'react';


export const PhoneNumber = ({name_field_Contry, handleChangePhoneNumbers }) => {
    const regexNumbers = /^[0-9]*([,.][0-9]*)*$/;
    const [numberValue, setNumberValue] = useState(0);
    const [message, setMessage] = useState("");

    const handleBlur = (event) => {
        event.preventDefault()
        console.log(numberValue)
        if (regexNumbers.test(numberValue)) {
            setMessage('Le chiffre rentré est correct')
            console.log(numberValue)
            handleChangePhoneNumbers(numberValue);
        }
        else {
            console.log(numberValue)
            setMessage('Attention, le chiffre rentré n\'est pas conforme')
        }
    }
    
    const onChange = (event) => {
       
        console.log(event.target)
        setNumberValue(event.target.value);
        
    }
    return(
    <div>
    <label>
    Montant
            <input
            step="1"
            min="0"
            
                type="tel"
                value={numberValue}
                onChange={onChange}
                onBlur={handleBlur}


                
                placeholder="Veuillez saisir votre numéro de téléphone"
            />
            {message}
            

    </label>
    </div>);
    };

export default PhoneNumber;