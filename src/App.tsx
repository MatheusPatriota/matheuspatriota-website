import { Route, Routes } from "react-router-dom";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import React from "react";
import { JobExperience } from "./pages/JobExperience";
import { Projects } from "./pages/Projects";

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
      <Route path="/job-experience" element={<JobExperience />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}

export default App;
