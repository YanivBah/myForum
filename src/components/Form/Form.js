import React, { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom';

import './form.css';
import Input from "../Input/Input";
import Dropdown from '../Dropdown/Dropdown';
import RichTextEditor from "../RichTextEditor/RichTextEditor";

const Form = ({ settings, func }) => {
  const [created, setCreated] = useState(false);
  const [controlled, setControlled] = useState([]);
  const itemsRef = useRef([]);
  const params = useParams();

  useEffect(() => console.log(itemsRef), [itemsRef]);

  const createRef = (el) => {
    if (!itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  const createFormElements = () => {
    const formElements = [];
    settings.elements.forEach((element) => {
      switch (element.elementType) {
        case "input":
          const newInput = <Input settings={element} createRef={createRef} />;
          formElements.push(newInput);
          break;
        case "dropdown":
          const newDropdown = (
            <Dropdown settings={element} createRef={createRef} />
          );
          formElements.push(newDropdown);
          break;
        case "richText":
          const newRichText = <RichTextEditor createRef={createRef} />;
          formElements.push(newRichText);
          break;

        default:
          break;
      }
    });

    return formElements;
  };

  const handleClick = (e) => {
    e.preventDefault();
    func(itemsRef.current,params);
    setCreated(true);

    // details.onClick(e);
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

  return (
    <div className="container form">
      {!created && form()}
      {created && <h3>Done.</h3>}
    </div>
  );
};

export default Form;
