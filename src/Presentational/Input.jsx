import React from "react";

const Input = ({ type, handleChange, placeholder, className, boxClass, label }) => (
    <div className={`${className} form-group`}>
        <label>{label}</label>
        <input
            placeholder={placeholder}
            type={type}
            onChange={handleChange}
            required
            className={boxClass}
        />
    </div>
);


export default Input;