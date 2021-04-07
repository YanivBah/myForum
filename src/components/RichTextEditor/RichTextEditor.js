import React, {useState} from 'react';
import { Editor } from "@tinymce/tinymce-react";

const RichTextEditor = ({createRef, value = '', height = "300"}) => {
  const [content, setContent] = useState("");

  return (
    <Editor
      ref={createRef}
      outputFormat="html"
      init={{
        selector: ".texteditor",
        force_br_newlines: true,
        force_p_newlines: false,
        branding: false,
        elementpath: false,
        statusbar: true,
        menubar: false,
        resize: true,
        default_link_target: "_blank",
        initValue: value,
        height: height,
        setup: function (editor) {
          editor.on("init", function (e) {
            editor.setContent(value);
          });
        },
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
              "ltr",
              "rtl",
            ],
          },
          {
            name: "indentation",
            items: ["outdent", "indent"],
          },
          {
            name: "fun",
            items: ["emoticons", "image", "charmap"],
          },
          {
            name: "lists",
            items: ["numlist", "bullist", "media"],
          },
        ],
      }}
      onEditorChange={(value) => {
        setContent(value);
      }}
      plugins="emoticons link image lists charmap directionality lists media"
      value={content}
    />
  );
}

export default RichTextEditor;
