import React from "react";
import { Link, Route, BrowserRouter, Routes } from "react-router-dom";

const PreventingTransitions: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Link to="/">Form</Link>
          <Link to="/one">One</Link>
          <Link to="/two">Two</Link>
        </div>

        <Routes>
          <Route path="/" element={<h2>Form</h2>} />
          <Route path="/one" element={<h2>One</h2>} />
          <Route path="/two" element={<h2>Two</h2>} />
        </Routes>
      </BrowserRouter>
      <a
        className="login-link"
        href={
          "https://github.com/login/oauth/authorize?scope=user&client_id=4117b7c2532e4c5b660a&redirect_uri=http://localhost:3000/"
        }
      >
        <span>Login with GitHub</span>
      </a>
    </div>
  );
};

export default PreventingTransitions;
