import React, { Component } from "react";
import ContactService from "../../Service/ContactService";
import Navbar from "./Navbar";
import Pagination from "./Pagination";
import SearchBar from "./Searchbar";
import HeaderComponent from "./HeaderComponent";
import { getContacts } from "./ContactActions/ContactAction";
import { deleteContact } from "./ContactActions/ContactAction";
import { Button, Table, Row, Col } from "react-bootstrap";

class ListContactComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
    };
    this.addContact = this.addContact.bind(this);
    this.editContact = this.editContact.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
  }
  deleteContact(id) {
    ContactService.deleteContact(id).then((res) => {
      this.setState({
        contacts: this.state.contacts.filter((contact) => contact.id !== id),
      });
    });
  }

  editContact(id) {
    this.props.history.push(`/update-contact/${id}`);
    // this.props.history.push({
    //   pathname: `/update-contact/${id}`,
    //   params: { id: id },
    //   state: { id: id }
    // });
  }
  componentDidMount() {
    ContactService.getContacts().then((res) => {
      this.setState({ contacts: res.data });
    });
  }
  addContact() {
    this.props.history.push("/add-contact");
  }
  render() {
    return (
      <div>          
        <HeaderComponent />
        <Row>
          <Col xs lg="10">
            <h2>Contacts List</h2>
          </Col>
          <Col xs lg="2">
            <button
              className="btn btn-primary right"
              onClick={this.addContact}
              style={{ marginTop: "20px" }}
            >
              Add Contact
            </button>
          </Col>
        </Row>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th> First Name</th>
              <th> Last Name</th>
              <th> Email Id</th>
              <th> Gender</th>
              <th> Age</th>
              <th> Phone Number</th>
              <th> Relation</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((c) => (
              <tr key={c.id}>
                <td> {c.firstName}</td>
                <td> {c.lastName}</td>
                <td> {c.emailId}</td>
                <td>{c.gender}</td>
                <td>{c.age}</td>
                <td>{c.phoneNumber}</td>
                <td>{c.relation}</td>
                <td>
                  <Button
                    variant="primary"
                    onClick={() => this.editContact(c.id)}
                  >
                    Update
                  </Button>{" "}
                  <Button
                    variant="danger"
                    onClick={() => this.deleteContact(c.id)}
                  >
                    Delete
                  </Button>{" "}
                  <Button variant="success" href="https://www.truecaller.com" >Call</Button>
                </td>
              </tr>
            ))}
            {/* <Pagination /> */}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default ListContactComponent;
