import React, { Component } from "react";
import PersonalInfoForm from "../PersonalInfoForm";
import ContactForm from "../ContactForm";
import SkillsForm from "../SkillsForm";
import EducationForm from "../EducationForm";
import ExperienceForm from "../ExperienceForm";
import ProjectsForm from "../ProjectsForm";
import './style.css';
import '../MainBtn/style.css';

class CVForm extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
  };

  render() {
    return (
      <div className="CV-form">
        <PersonalInfoForm />
        <ContactForm />
        <SkillsForm />
        <EducationForm />
        <ProjectsForm />
        <ExperienceForm />
      </div>
    )
  };
};

export default CVForm;
