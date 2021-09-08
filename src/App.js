import "./App.css";

function App() {
  const name = "";
  return (
    <div className="App">
      <div>
        <form>
          <input type="text" placeholder="Enter your name" />
          <button>Submit</button>
        </form>
        <div className="App-display">{name}</div>
      </div>
    </div>
  );
}

export default App;
