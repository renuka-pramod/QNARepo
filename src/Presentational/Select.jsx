import React from "react";

const Select = ({ options,label }) => (
    <div>
        <label>{label}:</label>
        <select className="form-control">
            {
                options.map((option, index) => {
                    return <option key={index}>{option}</option>
                })
            }
        </select>
    </div>
);


export default Select;