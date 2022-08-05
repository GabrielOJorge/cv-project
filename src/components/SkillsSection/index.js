import React, { Component } from "react";

class SkillsSection extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <section className="skills-section">
        <h1>Skills</h1>

        <form action="#" onSubmit={this.handleSubmit}>
          <input type="text" name="skill" id="skill" placeholder="Skill"/>
          <button type="submit" className="main-btn">Add new skill</button>
        </form>
      </section>
    );

  };
};

export default SkillsSection;