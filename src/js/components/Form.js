import React, { Component } from "react";
import ReactDOM from "react-dom";

class Form extends Component {
  state = {
    value: ""
  };

  handleChange = (event) => {
    const { value } = event.target;
    this.setState(() => {
      return {
        value
      };
    });
  }

  render() {
    const {value} = this.state;
    return (
      <form>
        <input
          type="text"
          value={value}
          onChange={this.handleChange}
          pattern= "[A-Z]{5}[0-9]{4}[A-Z]{1}"
          placeholder="ABCDE1234F"
          title="Please provide valid Format, i.e., ABCDE1234F"
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default Form;