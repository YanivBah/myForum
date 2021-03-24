import React from "react";
import './form.css';
import Input from "../Input/Input";
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
    this.props.details.onClick(e);
    console.log(this.props);
  };

  form = () => {
    return(
      <React.Fragment>
        <h2>{this.props.details.header}</h2>
        {this.createInputs()}
        <button onClick={this.handleClick}>
          {this.props.details.buttonText}
        </button>
      </React.Fragment>
    );
  }

  render() {
    return (
      <form className="container form">
        {!this.state.created && this.form()}
        {this.state.created && <h3>Done.</h3>}
      </form>
    );
  }
}

export default Form;