import React, { Component } from "react";
import './style.css'
class PersonalInfoSection extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <section className="personal-info-section">
        <h1>Personal Info</h1>

        <form action="#">
          <input type="text" name="fname" id="fname" placeholder="First Name"/>
          <input type="text" name="lname" id="lname" placeholder="Last Name"/>
          <input type="text" name="profession" id="profession" placeholder="Profession"/>
        </form>
      </section>
    );

  };
};

export default PersonalInfoSection;