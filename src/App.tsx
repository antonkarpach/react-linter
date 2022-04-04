import React, { createContext, useReducer } from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import { initialState, reducer } from "./store/reducer";

export const AuthContext = createContext({});

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <header className="App-header">
        <AuthContext.Provider
          value={{
            state,
            dispatch,
          }}
        >
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </AuthContext.Provider>
      </header>
    </div>
  );
}

export default App;
