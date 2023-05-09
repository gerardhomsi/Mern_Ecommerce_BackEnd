import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Home, Signin, NotFound, Signup } from "./components";
import './app.css'

const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  </BrowserRouter>
);

export default App;
