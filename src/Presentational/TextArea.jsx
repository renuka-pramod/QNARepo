import React from "react";

const TextArea = ({ placeholder, className, label, rows }) => (
    <div>
        <label>{label}:</label>
        <textarea rows={rows} className={className} placeholder={placeholder} />
    </div>
);


export default TextArea;