import React, { useState } from "react";

export default function InputField() {
  const [inputValue, setInputValue] = useState();

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      const enteredValue = inputValue;
      console.log(enteredValue);
      setInputValue('');
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return <code style={{ display: "flex", flexDirection: "row", flex: "1" }}>
    <div>portfolio@chowdhuryisfatulkarim - home - <span style={{ color: "green" }}>master</span> ~${" "}</div>
    <input
      className="input1"
      style={{
        background: "none",
        paddingLeft: "5px",
        border: "none",
        flex: "1",
        caretShape: "block",
        color: "white",
        fontSize: "12pt",
        width: "auto",
        fontFamily: "source-code-pro, Menlo, Monaco, Consolas, 'Courier New',monospace"
      }}
      value={inputValue}
      onChange={handleChange}
      onKeyDown={handleKeyPress}
      spellCheck="false"
      type="text"
    ></input>
  </code>;
};
