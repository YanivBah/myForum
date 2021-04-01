import React from "react";
import './form.css';
import Input from "../Input/Input"
import {useParams} from "react-router-dom";

class Form extends React.Component {
  state = {created: false}
  createInputs = () => {
    return this.props.details.inputs.map((input) => {
      return <Input name={input.name} title={input.title} />;
    });
  };

  handleClick = (e) => {
    e.preventDefault();
    this.setState({created: true});
    // this.props.details.onClick(e);
    console.log(this.props);
  };

  form = () => {
    return (
      <React.Fragment>
        <h1>{this.props.details.header}</h1>
        <div className="divider"></div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores autem deleniti corrupti ipsam odit impedit possimus quo placeat quaerat nisi.</p>
        <div className="divider"></div>

        {this.createInputs()}
        <button onClick={this.handleClick}>
          {this.props.details.buttonText}
        </button>
      </React.Fragment>
    );
  }

  render() {
    return (
      <div className="container form">
        {!this.state.created && this.form()}
        {this.state.created && <h3>Done.</h3>}
      </div>
    );
  }
}

export default Form;