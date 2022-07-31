import { Route, Routes } from "react-router-dom";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import React from "react";

function App() {
  React.useEffect(() => {
    if (!localStorage.getItem("language")) {
      localStorage.setItem("language", "ptbr");
    }
  }, []);
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
