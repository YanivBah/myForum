import React, { useState, useEffect, useRef } from 'react'
import { useParams, useHistory} from 'react-router-dom';

import './form.css';
import Input from "../Input/Input";
import Dropdown from '../Dropdown/Dropdown';
import RichTextEditor from "../RichTextEditor/RichTextEditor";

const Form = ({ settings, func, update, setRedirect }) => {
  const [created, setCreated] = useState(false);
  const [controlled, setControlled] = useState([]);
  const itemsRef = useRef([]);
  const params = useParams();
  const history = useHistory();

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
          const newRichText = (
            <RichTextEditor createRef={createRef} height="50vh" />
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
    const redirect = await func(itemsRef.current, params);
    await update();
    setCreated(true);
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

  return (
    <div className="container form">
      {!created && form()}
      {created && <h3>Done.</h3>}
    </div>
  );
};

export default Form;
