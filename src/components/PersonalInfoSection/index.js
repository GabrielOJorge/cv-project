import React, { Component } from "react";

class PersonalInfoSection extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <section className="personal-info-section">
        <form action="#">
          <input type="text" name="fname" id="fname" placeholder="First Name"/>
          <input type="text" name="lname" id="lname" placeholder="Last Name"/>
          <input type="text" name="title" id="title" placeholder="Title"/>
          <input type="email" name="email" id="email" placeholder="Email"/>
        </form>
      </section>
    );

  };
};

export default PersonalInfoSection;