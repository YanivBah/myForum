import React, { useState, useEffect } from "react";
import "./input.css";

const Input = props => {
  const { name, title } = props;
  return (
    <div className="input-group">
      <label htmlFor={name}>{title}</label>
      <input autoComplete="off" type="text" name={name} id={name} />
    </div>
  );
}

export default Input;