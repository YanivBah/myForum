import React from "react";
import "./input.css";

const Input = ({ settings, createRef }) => {
  const { name, title, type, placeholder, defaultValue } = settings;

  return (
    <div className="input-group">
      <label htmlFor={name}>{title}</label>
      <input
        autoComplete="off"
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        ref={createRef}
      />
    </div>
  );
};

export default Input;