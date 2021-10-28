import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { Button } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <section className="bg-emp">
        <div className="intro-section">
          <div className="row">
            <div className="col-md-7 col-md-offset-1 col-sm-12">
              <div className="intro_text">
                <h2>Contact Application</h2>
                <div className="buttons scroll-to">
                  <Link to="/login">
                    <Button  variant="success" size="lg">Login</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="copyright">
            <div className=" container ">
              <p className="text-center mb-0">All Reserved @copyrights</p>
            </div>
          </div>
        </footer>
      </section>
    );
  }
}

export default Home;
