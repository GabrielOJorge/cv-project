import React, { Component } from "react";

class EducationSection extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <section className="education-section">
        <h1>Education</h1>

        <form action="#">
          <input type="text" name="school" id="school" placeholder="University or course"/>
          <input type="text" name="degree" id="degree" placeholder="Degree or certification"/>
          <input type="text" name="subject" id="subject" placeholder="Subject"/>
          <input type="number" name="from" id="from" placeholder="From year"/>
          <input type="number" name="to" id="to" placeholder="To year"/>
          <textarea name="work-description" id="work-description" placeholder="Write more details about the course (optional)"></textarea>

          <button type="submit" className="main-btn">Add</button>
        </form>
      </section>
    );

  };
};

export default EducationSection;