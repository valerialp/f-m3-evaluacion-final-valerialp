import React, { Component, Fragment } from "react";

class Input extends Component {
  render() {
    const { type, id, value, style } = this.props;
    return (
      <Fragment>
        <label htmlFor={id}>
          {value}
          <input
            type={type}
            className={style}
            value={value}
            name={id}
            id={id}
          />
        </label>
      </Fragment>
    );
  }
}

export default Input;
