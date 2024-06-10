import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignUpForm from "./SignUpForm";
import Login from "./Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUpForm />} />

        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
