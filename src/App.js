import { useState } from "react";
import { connect } from "react-redux";
import { submitForm } from "./actions";
import "./App.css";

function App({ submitForm, submittedName }) {
  const [name, setName] = useState("");

  const inputHandler = (event) => {
    setName(event.target.value);
  };

  const submit = (event) => {
    event.preventDefault();
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
        <div className="App-display">{`Your name is ${
          submittedName ? submittedName : "?"
        }`}</div>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  submitForm,
};

const mapStateToProps = (state) => {
  const { name } = state;
  return {
    submittedName: name,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
