import React, { Component } from "react";

class SkillsForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <section>
        <h1>Skills</h1>

        <form action="#" onSubmit={this.handleSubmit}>
          <input type="text" name="skill" id="skill" placeholder="Skill"/>
          <button type="submit" className="main-btn">Add</button>
        </form>
      </section>
    );

  };
};

export default SkillsForm;