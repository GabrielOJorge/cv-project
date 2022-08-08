import React, { Component } from "react";

class ProjectsForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <section className="projects-section">
        <h1>Projects</h1>

        <form action="#" onSubmit={this.handleSubmit}>
          <input type="text" name="title" id="title" placeholder="Title"/>
          <input type="text" name="technologies" id="technologies" placeholder="Technologies"/>
          <textarea name="project-description" id="project-description" placeholder="Project description"></textarea>
          <button type="submit" className="main-btn">Add</button>
        </form>
      </section>
    );

  };
};

export default ProjectsForm;