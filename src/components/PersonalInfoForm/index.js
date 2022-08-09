import React, { Component } from "react";
import uniqid from "uniqid";
import { CurriculumVitae, displayName } from "../CurriculumVitae";
class PersonalInfoForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fname: {
        text: '',
        id: uniqid()
      }
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      fname: {
        text: e.target.value,
        id: this.state.fname.id,
      },
    });

    displayName(this.state.fname.text);
  };

  render() {
    const { fname } = this.state;

    return (
      <section>
        <h1>Personal Info</h1>

        <form action="#">
          <input type="text" name="fname" id="fname" placeholder="First Name" onChange={this.handleChange} value={fname.text}/>
          <input type="text" name="lname" id="lname" placeholder="Last Name"/>
          <input type="text" name="profession" id="profession" placeholder="Profession"/>
        </form>
      </section>
    );

  };
};

export default PersonalInfoForm;