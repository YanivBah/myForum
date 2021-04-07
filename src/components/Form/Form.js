import React, { useState, useRef } from 'react'
import { useParams } from 'react-router-dom';

import './form.css';
import Input from "../Input/Input";
import Dropdown from '../Dropdown/Dropdown';
import RichTextEditor from "../RichTextEditor/RichTextEditor";

const Form = ({ settings, func, update, setRedirect, loggedIn }) => {
  loggedIn === null && setRedirect('/');
  const [created, setCreated] = useState(false);
  const itemsRef = useRef([]);
  const params = useParams();

  const createRef = (el) => {
    if (!itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  const createFormElements = () => {
    const formElements = [];
    settings.elements.forEach((element, index) => {
      switch (element.elementType) {
        case "input":
          const newInput = <Input key={`input-${index}`} settings={element} createRef={createRef} />;
          formElements.push(newInput);
          break;
        case "dropdown":
          const newDropdown = (
            <Dropdown key={`dropdown-${index}`} settings={element} createRef={createRef} />
          );
          formElements.push(newDropdown);
          break;
        case "richText":
          const newRichText = (
            <RichTextEditor key={`richtext-${index}`} createRef={createRef} height="50vh" />
          );
          formElements.push(newRichText);
          break;

        default:
          break;
      }
    });

    return formElements;
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const redirect = await func(itemsRef.current, params, loggedIn);
    await update();
    setCreated(true);
    console.log(redirect);
    setRedirect(redirect);
  };

  const form = () => {
    return (
      <React.Fragment>
        <h1>{settings.header}</h1>
        <p>{settings.description}</p>
        <div className="divider"></div>
        {createFormElements()}
        <button onClick={handleClick}>{settings.buttonText}</button>
      </React.Fragment>
    );
  };

  return loggedIn !== null ? (
    <div className="container form">
      {!created && form()}
      {created && <h3>Done.</h3>}
    </div>
  ) : null;
};

export default Form;
