import React, { useState, useEffect } from 'react'
import './form.css';
import Input from "../Input/Input"

const Form = props => {
  const [created, setCreated] = useState(false);

  const createInputs = () => {
    return props.details.inputs.map((input) => {
      return <Input name={input.name} title={input.title} />;
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    setCreated(true);
    // props.details.onClick(e);
    console.log(props);
  };

  const form = () => {
    return (
      <React.Fragment>
        <h1>{props.details.header}</h1>
        <div className="divider"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          autem deleniti corrupti ipsam odit impedit possimus quo placeat
          quaerat nisi.
        </p>
        <div className="divider"></div>

        {createInputs()}
        <button onClick={handleClick}>
          {props.details.buttonText}
        </button>
      </React.Fragment>
    );
  };

  return (
    <div className="container form">
      {!created && form()}
      {created && <h3>Done.</h3>}
    </div>
  );
}

export default Form;
