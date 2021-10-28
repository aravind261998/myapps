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
import "./Login.css";
import { isEmail, isEmpty, isLength, isContainWhiteSpace } from "./Validator";
import LoginService from "../../Service/LoginService";

class Login extends Component {
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

  validateLoginForm = (e) => {
    let errors = {};
    const { formData } = this.state;

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

    if (isEmpty(errors)) {
      return true;
    } else {
      return errors;
    }
  };

  login = (e) => {
    e.preventDefault();
    let errors = this.validateLoginForm();
    this.setState({
      errors: errors,
      formSubmitted: true,
    });
    // if(errors === true){
    //     const c1='CANDIDATE';
    //     const a1='ADMIN';
    //     if(this.state.formData.select===a1){
    //         console.log(this.state.formData.email);
    //         console.log(this.state.formData.password);
    if (errors === true) {
      let user = {
        userId: this.state.formData.email,
        password: this.state.formData.password,
      };
      LoginService.validate(user).then(
        (res) => {
          //alert("hello");
          console.log(res);
          localStorage.setItem("user_session", JSON.stringify(res.data.userId));
          this.props.history.push("/contacts");

          // this.props.history.push('/add-candidate');
          // if(res.data==='Valid'){
          // this.props.history.push(`/add-candidate`);
          // }
          //     else if(res.data==='Invalid'){
          //         alert("Wrong Password. Try again");

          //     }
          //     else{
          //         alert("Invalid Credentials");
          //     }
        },
        (error) => {
          // this.props.history.push(`/add-candidate`);
          alert("Invalid userId/password");
          localStorage.setItem("user_session", JSON.stringify(""));
        }
      );
    }
  };

  //         else if(this.state.formData.select===c1){
  //             let user={userId:this.state.formData.email,password:this.state.formData.password}
  //             LoginService.validate(user).then((res)=>{
  //                 alert("hii");
  //                 this.props.history.push('/add-contact');
  //             },
  //             error=>{
  //                 // this.props.history.push(`/add-contact`);
  //                 alert ("Invalid userId/password")
  //             });
  //         }
  //     }
  //     else {
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
        <div className="Login">
          <div className="row">
            <div className="card col-md-6 col-md-offset-4">
              <h2 className="head center">Login</h2>
            </div>
          </div>
          <Row>
            <form onSubmit={this.login}>
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
              <div className="row">
                <div className="card col-md-6 col-md-offset-3">
                  <Button type="submit" variant="primary" onClick={this.login}>
                    Sign in
                  </Button>
                  &nbsp;&nbsp;&nbsp;
                  <Button type="submit" variant="primary" href="/signup">
                    Sign up
                  </Button>
                </div>
              </div>
            </form>
          </Row>
        </div>
      </div>
    );
  }
}

export default Login;
