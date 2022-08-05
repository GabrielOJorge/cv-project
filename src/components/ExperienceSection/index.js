import React, { Component } from "react";

class ExperienceSection extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <section className="experience-section">
        <h1>Work</h1>

        <form action="#">
          <input type="text" name="position" id="position" placeholder="Job position"/>
          <input type="text" name="company" id="company" placeholder="Company"/>
          <input type="number" name="from" id="from" placeholder="From year"/>
          <input type="number" name="to" id="to" placeholder="To year"/>
          <textarea name="work-description" id="work-description" placeholder="Write more details about the job (optional)"></textarea>
          <button type="submit" className="main-btn">Add</button>
        </form>
      </section>
    );

  };
};

export default ExperienceSection;