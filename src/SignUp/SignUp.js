import React, { Component } from "react";
import {
  Row,
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Button,
  FormText,
} from "react-bootstrap";
import "../../src/components/Login/Login.css";
import {
  isEmail,
  isEmpty,
  isLength,
  isContainWhiteSpace,
} from "../../src/components/Login/Validator";
//import LoginService from "../../Service/LoginService";
import UserService from "../Service/UserService";
class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {}, // Contains login form data
      errors: {}, // Contains login field errors
      formSubmitted: false, // Indicates submit status of login form
      loading: false, // Indicates in progress state of login form
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    let { formData } = this.state;
    formData[name] = value;

    this.setState({
      formData: formData,
    });
    console.log(formData);
  };

  validateSignUpForm = (e) => {
    let errors = {};
    const { formData } = this.state;
    
    if (isEmpty(formData.firstName)) {
      errors.firstName = "First Name can't be blank";
    }

    if (isEmpty(formData.lastName)) {
      errors.lastName = "Last Name can't be blank";
    }

    if (isEmpty(formData.email)) {
      errors.email = "Email can't be blank";
    } else if (!isEmail(formData.email)) {
      errors.email = "Please enter a valid email";
    }

    if (isEmpty(formData.password)) {
      errors.password = "Password can't be blank";
    } else if (isContainWhiteSpace(formData.password)) {
      errors.password = "Password should not contain white spaces";
    } else if (!isLength(formData.password, { gte: 6, lte: 16, trim: true })) {
      errors.password = "Password's length must between 6 to 16";
    }

    /*  if(isEmpty(formData.role)){
          errors.role = "Role can't be blank";
        } else if( isContainWhiteSpace(formData.role)){
          errors.role = "Role should not contain white spaces";
        } */

    if (isEmpty(errors)) {
      return true;
    } else {
      return errors;
    }
  };

  signUp = (e) => {
    //alert("Entered0")
    e.preventDefault();
    let errors = this.validateSignUpForm();
    this.setState({
      errors: errors,
      formSubmitted: true,
    });
    //    // alert(errors)

    //     if(errors === true){
    //      // alert("enter3")
    //          const c1='CANDIDATE';
    //         // const a1='ADMIN';
    //         if(this.state.formData.role===c1){
    //           //alert("Entered2")
    //             console.log(this.state.formData.email);
    //             console.log(this.state.formData.password);
    if (errors === true) {
      let user = {
        firstName: this.state.formData.firstName,
        lastName: this.state.formData.lastName,
        userId: this.state.formData.email,
        password: this.state.formData.password,
      };
      UserService.createUser(user).then(
        (res) => {
          //alert("hello");
          this.props.history.push("/add-contact");
        },

        (error) => {
          alert("User id already exists");
          //this.props.history.push('/signup');
        }
      );
    }
  };

  //         // else if(this.state.formData.select===c1){

  //         //     this.props.history.push('/candidates');
  //         // }
  //     } else {
  //         this.setState({
  //             errors: errors,
  //             formSubmitted: true
  //         });
  //     }
  // }

  render() {
    const { errors, formSubmitted } = this.state;

    return (
      <div className="row bg-emp">
        <div className="SignUp">
          <div class="row">
            <div className="card col-md-6 col-md-offset-4">
              <h2 className="head center">SignUp</h2>
            </div>
          </div>
          <Row>
            <form onSubmit={this.SignUp}>
              {/* <FormGroup>
                            <FormLabel>SignUp as</FormLabel>
                            <FormControl as="select" name="select" onChange={this.handleInputChange}>
                            <option>---Select---</option>
    
     
      <option>CANDIDATE</option>
    </FormControl>

                        </FormGroup> */}
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
                  placeholder="Enter your first name"
                  onChange={this.handleInputChange}
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
                  formSubmitted ? (errors.lastName ? "error" : "success") : null
                }
              >
                <FormLabel>Last Name</FormLabel>
                <FormControl
                  type="text"
                  name="lastName"
                  placeholder="Enter your last name"
                  onChange={this.handleInputChange}
                />
                {errors.lastName && (
                  <Form.Control.Feedback type="invalid" className="input-feedback">
                    {errors.lastName}
                  </Form.Control.Feedback>
                )}
              </FormGroup>
              <FormGroup
                controlId="email"
                validationstate={
                  formSubmitted ? (errors.email ? "error" : "success") : null
                }
              >
                <FormLabel>Email</FormLabel>
                <FormControl
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  onChange={this.handleInputChange}
                />
                {errors.email && (
                  <Form.Control.Feedback type="invalid" className="input-feedback">
                    {errors.email}
                  </Form.Control.Feedback>
                )}
              </FormGroup>
              <FormGroup
                controlId="password"
                validationstate={
                  formSubmitted ? (errors.password ? "error" : "success") : null
                }
              >
                <FormLabel>Password</FormLabel>
                <FormControl
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={this.handleInputChange}
                />
                {errors.password && (
                  <Form.Control.Feedback type="invalid" className="input-feedback">
                    {errors.password}
                  </Form.Control.Feedback>
                )}
              </FormGroup>
              {/* <FormGroup controlId="role" validationstate={ formSubmitted ? (errors.role ? 'error' : 'success') : null }>
                            <FormLabel>Role</FormLabel>
                            <FormControl as="select" type="text" name="role" placeholder="Enter your role in Caps" onChange={this.handleInputChange} >
                            <option>---Select---</option>
                            <option>CANDIDATE</option>
                        </FormControl>  
                        { errors.role &&
                            <FormText>{errors.role}</FormText>
                        }
                        </FormGroup> */}
              <div class="row">
                <div className="card col-md-6 col-md-offset-4">
                  <Button type="submit" bsStyle="primary" onClick={this.signUp}>
                    Sign-Up
                  </Button>
                </div>
              </div>
              &nbsp;&nbsp;&nbsp;
            </form>
          </Row>
        </div>
      </div>
    );
  }
}

export default SignUp;
