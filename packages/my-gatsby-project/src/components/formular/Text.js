
import React, { useState } from "react";
export const Text = ({placeholder,label,handlerChange}) => {
    const [value, setValue] = useState("");
    const handleBlur = (event) => {
        handlerChange(value);
    }
    const onChange = (event) => {
        event.preventDefault()
        setValue(event.target.value);
    }
    return(<label>{label}
        <input 
        type="text"
        name = "text"
        value={handleBlur}
        onChnage = {onChange}
        />
        </label>
    );
}

export default Text;