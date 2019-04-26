import React from "react";

const Button = ({ handleClick, name, className }) => (
    <button
        onClick={handleClick}
        className={className}
        >{name}</button>
);


export default Button;