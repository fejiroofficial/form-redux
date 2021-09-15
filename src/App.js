import { useState } from "react";
import { connect } from "react-redux";
import { submitForm } from "./actions";
import "./App.css";

function App({ submitForm }) {
  const [name, setName] = useState("");

  const inputHandler = (event) => {
    setName(event.target.value);
  };

  const submit = (event) => {
    event.preventDefault()
    console.log("input:", name);
    // dispatch an action
    submitForm(name);
  };

  return (
    <div className="App">
      <div>
        <form onSubmit={submit}>
          <input
            type="text"
            placeholder="Enter your name"
            onChange={(event) => inputHandler(event)}
          />
          <button onClick={submit}>Submit</button>
        </form>
        <div className="App-display">display the name here!</div>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  submitForm,
};

export default connect(null, mapDispatchToProps)(App);
