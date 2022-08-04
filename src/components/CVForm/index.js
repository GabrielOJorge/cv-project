import React, { Component } from "react";
import './style.css'
import PersonalInfoSection from "../PersonalInfoSection";

class CVForm extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="CV-form">
        <PersonalInfoSection />
      </div>
    )
  }
}

export default CVForm;
