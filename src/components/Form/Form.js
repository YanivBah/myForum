import React, { useState, useEffect } from 'react'
import './form.css';
import Input from "../Input/Input";
import Dropdown from '../Dropdown/Dropdown';
import { Editor } from "@tinymce/tinymce-react";
import parse from "html-react-parser";

const Form = props => {
  console.log(props);
  const [created, setCreated] = useState(false);
  const [content, setContent] = useState('');

  const createInputs = () => {
    return props.details.inputs.map((input) => {
      return <Input name={input.name} title={input.title} />;
    });
  };

  const createFormElements = () => {
    const formElements = [];

    props.settings.dropdowns.forEach(dropdown => {
      const newDropdown = (<Dropdown settings={dropdown} />)
      formElements.push(newDropdown);
    })

    props.settings.inputs.forEach(input => {
      const newInput = (<Input settings={input} />);
      formElements.push(newInput);
    });

    return formElements;
    // return props.settings.inputs.map((input) => {
    //   return <Input name={input.name} title={input.title} />;
    // });
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

        {/* {createInputs()} */}
        {createFormElements()}
        <Editor
          apiKey="2viqoomhb51lmkju04axbr2u0tvkmoc0g51wpfiuhbxs9vi3"
          cloudChannel="5-stable"
          id="uuid"
          outputFormat="html"
          init={{
            branding: false,
            elementpath: false,
            statusbar: false,
            menubar: false,
            default_link_target: "_blank",
            toolbar: [
              {
                name: "history",
                items: ["undo", "redo"],
              },
              {
                name: "styles",
                items: ["styleselect"],
              },
              {
                name: "colors",
                items: ["forecolor", "backcolor"],
              },
              {
                name: "formatting",
                items: ["bold", "italic", "link"],
              },
              {
                name: "alignment",
                items: [
                  "alignleft",
                  "aligncenter",
                  "alignright",
                  "alignjustify",
                ],
              },
              {
                name: "indentation",
                items: ["outdent", "indent"],
              },
              {
                name: "fun",
                items: ["emoticons", "image"],
              },
            ],
          }}
          onEditorChange={(value) => {
            setContent(value);
            console.log(value);
          }}
          plugins="code emoticons link image"
          value={content}
        />
        {parse(content)}
        <button onClick={handleClick}>{props.details.buttonText}</button>
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
