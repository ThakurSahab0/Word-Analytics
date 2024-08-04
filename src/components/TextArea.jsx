/* eslint-disable react/prop-types */
import { useState } from "react";
import Warning from "./Warning";

export default function TextArea({ text, setText}) {

  const [warningText, setWarningText] = useState("");
  const handleChange = (e) => {
    let newText = e.target.value;
    // basic validation
    if (newText.includes("<script>")) {
      setWarningText("No script allowed");
    
      newText = newText.replace("<scipt>", "");
    } else if (newText.includes("@")) {
      setWarningText("No @ symbol allowed");
    
      newText = newText.replace("@", "");
    }
    else {
      setWarningText("")
    }
    setText(newText);
  };
  return (
    <div className="textarea">
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter your text"
        spellCheck="false"
      />
      {warningText ? <Warning warningText={warningText} /> : null}
    </div>
  );
}
