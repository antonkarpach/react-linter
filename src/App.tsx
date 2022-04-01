import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import Test from "./components/Test";

function App() {
  const [state, setState] = useState<number | null>();
  useEffect(() => {
    setState(null);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {JSON.stringify(state)}
        <Test
          textProcessNumberOne="Every day like"
          textProcessNumberTwo="A new string "
          textProcessNumberThree="Nobody knows"
          textProcessNumberFour="Where it will"
          textProcessNumberFive="Transitions us"
        />
        <p>
          Edit <code>src/App.tsx</code> and save to reload. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Amet deserunt esse libero voluptatum. Atque deleniti dicta ea enim eos inventore maxime modi mollitia non quia
          quos, sed tempora temporibus voluptate?
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
