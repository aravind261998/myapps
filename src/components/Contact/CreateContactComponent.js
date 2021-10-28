import React, { Component } from "react";
import ContactService from "../../Service/ContactService";
import { createContact } from "../Contact/ContactActions/ContactAction";
import HeaderComponent from "./HeaderComponent";
import {
  isEmail,
  isEmpty,
  isLength,
  isContainWhiteSpace,
} from "./../Login/Validator";
import {
  Row,
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Button,
  FormText,
} from "react-bootstrap";
class CreateContactComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      emailId: "",
      gender: "",
      age: "",
      phoneNumber: "",
      relation: "",
      errors: {},
      formSubmitted: false,
    };
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
    this.changeGenderHandler = this.changeGenderHandler.bind(this);
    this.changeAgeHandler = this.changeAgeHandler.bind(this);
    this.changePhoneNumberHandler = this.changePhoneNumberHandler.bind(this);
    this.changeRelationHandler = this.changeRelationHandler.bind(this);
    this.saveContact = this.saveContact.bind(this);
  }

  validateContactForm = (e) => {
    let errors = {};
    console.log(this.state);
    if (isEmpty(this.state.firstName)) {
      errors.firstName = "First Name can't be blank";
    }

    if (isEmpty(this.state.lastName)) {
      errors.lastName = "Last Name can't be blank";
    }

    if (isEmpty(this.state.emailId)) {
      errors.emailId = "Email can't be blank";
    } else if (!isEmail(this.state.emailId)) {
      errors.emailId = "Please enter a valid email";
    }

    if (isEmpty(this.state.gender)) {
      errors.gender = "Gender can't be blank";
    }

    if (isEmpty(this.state.age)) {
      errors.age = "Age can't be blank";
    }

    if (isEmpty(this.state.phoneNumber)) {
      errors.phoneNumber = "Phone Number can't be blank";
    }

    if (isEmpty(this.state.relation)) {
      errors.relation = "Relation can't be blank";
    }

    if (isEmpty(errors)) {
      return true;
    } else {
      return errors;
    }
  };

  saveContact = (e) => {
    e.preventDefault();
    let errors = this.validateContactForm();
    this.setState({
      errors: errors,
      formSubmitted: true,
    });
    if (errors === true) {
      let Contact = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        emailId: this.state.emailId,
        gender: this.state.gender,
        age: this.state.age,
        phoneNumber: this.state.phoneNumber,
        relation: this.state.relation,
      };
      console.log("contact=>" + JSON.stringify(Contact));

      ContactService.createContact(Contact).then(
        (res) => {
          alert("Contact Created Successfully");
          this.props.history.push("/contacts");
        },
        (error) => {
          alert("contact not saved");
        }
      );
    }
  };
  changeFirstNameHandler = (event) => {
    this.setState({ firstName: event.target.value });
  };
  changeLastNameHandler = (event) => {
    this.setState({ lastName: event.target.value });
  };
  changeEmailIdHandler = (event) => {
    this.setState({ emailId: event.target.value });
  };
  changeGenderHandler = (event) => {
    this.setState({ gender: event.target.value });
  };
  changeAgeHandler = (event) => {
    this.setState({ age: event.target.value });
  };
  changePhoneNumberHandler = (event) => {
    this.setState({ phoneNumber: event.target.value });
  };
  changeRelationHandler = (event) => {
    this.setState({ relation: event.target.value });
  };

  cancel() {
    this.props.history.push("/contacts");
  }
  render() {
    const { errors, formSubmitted } = this.state;
    return (
      <div className="bg-emp">
        <HeaderComponent />
        <div className="container">
          <div className="row">
            <div className="card col-md-6 col-md-offset-3">
              <h3 className="text-center">Add Contact</h3>
              <div className="card-body">
                <form>
                  <FormGroup
                    controlId="firstName"
                    validationstate={
                      formSubmitted
                        ? errors.firstName
                          ? "error"
                          : "success"
                        : null
                    }
                  >
                    <FormLabel>First Name</FormLabel>
                    <FormControl
                      type="text"
                      name="firstName"
                      placeholder="Enter your First name"
                      value={this.state.firstName}
                      onChange={this.changeFirstNameHandler}
                    />
                    {errors.firstName && (
                      <Form.Control.Feedback type="invalid" className="input-feedback">
                        {errors.firstName}
                      </Form.Control.Feedback>
                    )}
                  </FormGroup>

                  <FormGroup
                    controlId="lastName"
                    validationstate={
                      formSubmitted
                        ? errors.lastName
                          ? "error"
                          : "success"
                        : null
                    }
                  >
                    <FormLabel>Last Name</FormLabel>
                    <FormControl
                      type="text"
                      name="lastName"
                      placeholder="Enter your Last name"
                      value={this.state.lastName}
                      onChange={this.changeLastNameHandler}
                    />
                    {errors.lastName && (
                      <Form.Control.Feedback type="invalid" className="input-feedback">
                        {errors.lastName}
                      </Form.Control.Feedback>
                    )}
                  </FormGroup>

                  <FormGroup
                    controlId="emailId"
                    validationstate={
                      formSubmitted
                        ? errors.emailId
                          ? "error"
                          : "success"
                        : null
                    }
                  >
                    <FormLabel>Email ID</FormLabel>
                    <FormControl
                      type="text"
                      name="emailId"
                      placeholder="Enter your Email"
                      value={this.state.emailId}
                      onChange={this.changeEmailIdHandler}
                    />
                    {errors.emailId && (
                      <Form.Control.Feedback type="invalid" className="input-feedback">
                        {errors.emailId}
                      </Form.Control.Feedback>
                    )}
                  </FormGroup>

                  <FormGroup
                    controlId="gender"
                    validationstate={
                      formSubmitted
                        ? errors.gender
                          ? "error"
                          : "success"
                        : null
                    }
                  >
                    <FormLabel>Gender</FormLabel>
                    <FormControl
                      type="text"
                      name="gender"
                      placeholder="Enter your Gender"
                      value={this.state.gender}
                      onChange={this.changeGenderHandler}
                    />
                    {errors.gender && (
                      <Form.Control.Feedback type="invalid" className="input-feedback">
                        {errors.gender}
                      </Form.Control.Feedback>
                    )}
                  </FormGroup>

                  <FormGroup
                    controlId="age"
                    validationstate={
                      formSubmitted ? (errors.age ? "error" : "success") : null
                    }
                  >
                    <FormLabel>Age</FormLabel>
                    <FormControl
                      type="text"
                      name="age"
                      placeholder="Enter your Age"
                      value={this.state.age}
                      onChange={this.changeAgeHandler}
                    />
                    {errors.age && (
                      <Form.Control.Feedback type="invalid" className="input-feedback">
                        {errors.age}
                      </Form.Control.Feedback>
                    )}
                  </FormGroup>

                  <FormGroup
                    controlId="phoneNumber"
                    validationstate={
                      formSubmitted ? (errors.phoneNumber ? "error" : "success") : null
                    }
                  >
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl
                      type="text"
                      name="phoneNumber"
                      placeholder="Enter your Phone Number"
                      value={this.state.phoneNumber}
                      onChange={this.changePhoneNumberHandler}
                      pattern="/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/"
                    />
                    {errors.phoneNumber && (
                      <Form.Control.Feedback type="invalid" className="input-feedback">
                        {errors.phoneNumber}
                      </Form.Control.Feedback>
                    )}
                  </FormGroup>
                  

                  <FormGroup
                    controlId="relation"
                    validationstate={
                      formSubmitted ? (errors.relation ? "error" : "success") : null
                    }
                  >
                    <FormLabel>Relation</FormLabel>
                    <FormControl
                      type="text"
                      name="relation"
                      placeholder="Enter your Relation"
                      value={this.state.relation}
                      onChange={this.changeRelationHandler}
                    />
                    {errors.relation && (
                      <Form.Control.Feedback type="invalid" className="input-feedback">
                        {errors.relation}
                      </Form.Control.Feedback>
                    )}
                  </FormGroup>
                  <div className="row">
                    <div className="card col-md-6 col-md-offset-4">
                      <button
                        className="btn btn-success"
                        onClick={this.saveContact}
                      >
                        Save
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={this.cancel.bind(this)}
                        style={{ marginLeft: "10px" }}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateContactComponent;
