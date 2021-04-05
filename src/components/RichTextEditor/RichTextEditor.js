import React, {useState} from 'react';
import { Editor } from "@tinymce/tinymce-react";
import parse from "html-react-parser";

const RichTextEditor = ({createRef, value = ''}) => {
  const [content, setContent] = useState("");

  return (
    <Editor
      ref={createRef}
      apiKey="2viqoomhb51lmkju04axbr2u0tvkmoc0g51wpfiuhbxs9vi3"
      cloudChannel="5-stable"
      id="uuid"
      outputFormat="html"
      init={{
        branding: false,
        elementpath: false,
        statusbar: true,
        menubar: false,
        resize: true,
        default_link_target: "_blank",
        initValue: value,
        setup: function(editor) {
          editor.on('init', function(e) {
            editor.setContent(value)
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
            items: ["alignleft", "aligncenter", "alignright", "alignjustify"],
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
      }}
      plugins="code emoticons link image"
      value={content}
    />
  );
}

export default RichTextEditor;
