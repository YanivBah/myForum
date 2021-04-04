import React, { useState, useEffect } from "react";
import "./dropdown.css";

const Dropdown = ({settings}) => {
  const { name, title, options} = settings;
  const createOptions = () => {
    return options.map(({ value, title}) => {
      return <option value={value}>{title}</option>;
    });
  }
  return (
    <div className="input-group">
      <label htmlFor={name}>{title}</label>
      <select name={name} id={name}>
        {createOptions()}
      </select>
    </div>
  );
}

export default Dropdown;
