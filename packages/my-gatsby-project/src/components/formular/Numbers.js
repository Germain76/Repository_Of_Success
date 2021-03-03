import React, { useState } from "react"

export const Numbers = ({ numbers, handleChangeNumbers, name_field }) => {
    const regexNumbers = /^[0-9]*([,.][0-9]*)*$/;
    const [numberValue, setNumberValue] = useState(0);
    const [message, setMessage] = useState("");

    const handleBlur = (event) => {
        event.preventDefault()
        if (regexNumbers.test(numberValue)) {
            setMessage('Le chiffre rentré est correcte')
            handleChangeNumbers(numberValue);
        }
        else {

            setMessage('Attention, le chiffre rentré n\'est pas conforme')
        }
    }
    const onChange = (event) => {
        event.preventDefault()
        setNumberValue(event.target.numberValue);
    }

    return (<label>{name_field}
        <input
            type="number"
            min="0.00"
            step="0.01"
            value={numberValue}
            onBlur={handleBlur}
            onChange={onChange}

            placeholder="Veuillez saisir un chiffre tel ce format 1.500.000,01"
        />
        {message}

    </label>);
};

export default Numbers;