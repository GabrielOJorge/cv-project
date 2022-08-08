import React from "react";
import CVForm from "./components/CVForm";
import { CurriculumVitae } from "./components/CurriculumVitae";
import './style/generics/reset.css';
import './style/elements/base.css';
import './style/settings/colors.css';

function App() {
  return (
    <div className="App">
      <CVForm />
      <CurriculumVitae />
    </div>
  );
}

export default App;
