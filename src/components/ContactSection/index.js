import React, { Component } from "react";

class ContactSection extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <section className="contact-section">
        <h1>Contact</h1>

        <form action="#">
          <input type="url" name="portifolio" id="portifolio" placeholder="Portifolio"/>
          <input type="url" name="github" id="github" placeholder="GitHub"/>
          <input type="url" name="linkedin" id="linkedin" placeholder="LinkedIn"/>
          <input type="email" name="email" id="email" placeholder="Email"/>
        </form>
      </section>
    );

  };
};

export default ContactSection;