import React from "react";
import './input.css';

class Input extends React.Component {
  render() {
      const { name, title } = this.props;
      return (
        <div>
          <label htmlFor={name}>{title}</label>
          <input autoComplete="off" type="text" name={name} id={name} />
        </div>
      );
  }
}

export default Input;