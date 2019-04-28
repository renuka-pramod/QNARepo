import React from "react";

const Input = ({ type, onChangeHandler, placeholder, className, boxClass, label, text,id, name,fileName }) => (
    <div className={`${className} form-group`}>
        <label htmlFor={text}>{label}</label>
        <input
            placeholder={placeholder}
            type={type}
            onChange={onChangeHandler}
            required
            className={boxClass}
            id={id}
            name= {name}
        />
    </div>
);


export default Input;