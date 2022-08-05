import React, { Component } from "react";
import PersonalInfoSection from "../PersonalInfoSection";
import ContactSection from "../ContactSection";
import SkillsSection from "../SkillsSection";
import EducationSection from "../EducationSection";
import ExperienceSection from "../ExperienceSection";
import './style.css'
import '../MainBtn/style.css'

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
        <SkillsSection />
        <EducationSection />
        <ExperienceSection />
      </div>
    )
  }
}

export default CVForm;
