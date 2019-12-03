import React, { Fragment, Component } from "react";
import history from "./../../history";
import {
  Card,
  CardText,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
import { Link } from "react-router-dom";
import Modal from "./../../components/modal/index";
import { log } from "util";
import { Redirect, Route } from "react-router-dom";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.username = React.createRef();
    this.password = React.createRef();
    this.state = {
      err: false
    };
  }

  render() {
    return (
      <>
        <div className={"container"}>
          <h1>{"Login"}</h1>
          <div className={"login_flex"}>
          <Form>
            <FormGroup>
        <div className={"group"}>
              <input
                ref={this.username}
                type="text"
                name="name"
                id="exampleEmail"

              />
              <span className="bar"></span>
          <label>Username</label></div>
            </FormGroup>
            <FormGroup>
              <div className={"group"}>

              <input
                ref={this.password}
                type="password"
                name="password"
                id="examplePassword"

              />
                <span className="bar"></span>
                <label>Password</label>
              </div>
              <div> <Button color={"dark"} onClick={this.handleSubmit}>Submit</Button></div>
            </FormGroup>
            {this.state.err ? (
              <Modal toggle={this.toggle}>
                <p>Username and password are wrong! </p>
              </Modal>
            ) : null}

          </Form>
          </div>
        </div>
      </>
    );
  }

  toggle = () => {
    this.setState({
      err: false
    });
  };

  handleSubmit = e => {
    let value = {
      username: this.username.current.value,
      password: this.password.current.value
    };
    console.log(value);

    if (value.username === "Admin" && value.password === "12345") {
      this.setState({
        err: false
      });
      localStorage.setItem("auth", "true");
      console.log(this.props);
      this.props.history.push("/profile");
    } else {
      this.setState({
        err: true
      });
    }
  };
}
