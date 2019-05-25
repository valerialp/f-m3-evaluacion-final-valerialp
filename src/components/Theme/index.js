import React, { Component, Fragment } from "react";
import Input from "../Input";

class Theme extends Component {
  render() {
    return (
      <Fragment>
        <Input type="radio" id="theme" value="dark" />
        <Input type="radio" id="theme" value="light" />
      </Fragment>
    );
  }
}

export default Theme;
