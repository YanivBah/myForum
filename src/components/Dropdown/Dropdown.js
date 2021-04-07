import React from "react";
import "./dropdown.css";

const Dropdown = ({ settings, createRef }) => {
  const { name, title, options } = settings;
  const createOptions = () => {
    return options.map(({ value, title }, index) => {
      return <option key={`option${index}`} value={value}>{title}</option>;
    });
  };
  return (
    <div className="input-group">
      <label htmlFor={name}>{title}</label>
      <select name={name} id={name} ref={createRef}>
        {createOptions()}
      </select>
    </div>
  );
};

export default Dropdown;
