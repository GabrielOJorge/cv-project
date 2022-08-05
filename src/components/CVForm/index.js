import React, { Component } from "react";
import PersonalInfoSection from "../PersonalInfoSection";
import ContactSection from "../ContactSection";
import './style.css'

class CVForm extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="CV-form">
        <PersonalInfoSection />
        <ContactSection />
      </div>
    )
  }
}

export default CVForm;
