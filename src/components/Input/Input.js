import React, { useState, useEffect } from "react";
import "./input.css";

const Input = ({settings}) => {
  // const { name, title } = props;
  const {name, title, type, placeholder, defaultValue} = settings;
  return (
    <div className="input-group">
      <label htmlFor={name}>{title}</label>
      <input autoComplete="off" type={type} name={name} id={name} placeholder={placeholder} defaultValue={defaultValue} />
    </div>
  );
}

export default Input;