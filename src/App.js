import React, { useState } from "react";
import "./App.css";

function App() {
  const options = ["A", "B", "C", "D", "E"];

  const [dropDown1, setDropDown1] = useState("");
  const [dropDown2, setDropDown2] = useState("");
  const [dropDown3, setDropDown3] = useState("");

  const [error, setError] = useState(false);

  const formValidity = () => {
    if (
      dropDown1.trim().length &&
      dropDown2.trim().length &&
      dropDown3.trim().length
    ) {
      return true;
    }
    return false;
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formValidity()) {
      console.log(dropDown1, dropDown2, dropDown3);
      setDropDown1("");
      setDropDown2("");
      setDropDown3("");
    } else {
      setError(true);

      setTimeout(() => {
        setError(false);
      }, 4000);
    }
  };

  return (
    <main>
      <h1 className="formTitle">Form Title</h1>

      {error && (
        <h1 className="error">please select all the fields to submit</h1>
      )}

      <form onSubmit={submitHandler}>
        {/* First dropdown */}
        <select
          value={dropDown1}
          onChange={(event) => {
            setDropDown1(event.target.value);
          }}
        >
          <option value="" disabled>
            Please select an option from first dropdown
          </option>
          {options.map((optionValue, index) => {
            if (dropDown2 !== optionValue && dropDown3 !== optionValue) {
              return (
                <option value={optionValue} key={index}>
                  {optionValue}
                </option>
              );
            }
          })}
        </select>

        {/* second dropdown */}
        <select
          value={dropDown2}
          onChange={(event) => {
            setDropDown2(event.target.value);
          }}
        >
          <option value="" disabled>
            Please select an option from second dropdown
          </option>
          {options.map((optionValue, index) => {
            if (dropDown1 !== optionValue && dropDown3 !== optionValue) {
              return (
                <option value={optionValue} key={index}>
                  {optionValue}
                </option>
              );
            }
          })}
        </select>

        {/* third dropdown */}
        <select
          value={dropDown3}
          onChange={(event) => {
            setDropDown3(event.target.value);
          }}
        >
          <option value="" disabled>
            Please select an option from third dropdown
          </option>
          {options.map((optionValue, index) => {
            if (dropDown1 !== optionValue && dropDown2 !== optionValue) {
              return (
                <option value={optionValue} key={index}>
                  {optionValue}
                </option>
              );
            }
          })}
        </select>

        {/* submit button */}
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

export default App;
