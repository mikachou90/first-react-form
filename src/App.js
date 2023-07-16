import React, { useState } from "react";
import "./App.css";

function App() {
  let [name, setName] = useState();
  let [email, setEmail] = useState();

  function onFormSubmit(event) {
    event.preventDefault();
    setName(event.target.name.value);
    setEmail(event.target.email.value);
  }

  return (
    <>
      <div className="formWrapper">
        <form onSubmit={onFormSubmit}>
          <h3>My First React Form</h3>

          <div className="nameBox">
            <label htmlFor="name">Name:</label>
            <input name="name" id="name" type="text" />
          </div>

          <div className="emailBox">
            <label htmlFor="email">Email:</label>
            <input name="email" id="email" type="email" />
          </div>
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
        <div className="showWrapper">
          <h4>You have inserted as below:</h4>
          <ul>
            <li> {name}</li>
            <li>{email}</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
