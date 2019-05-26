import React, { Component, Fragment } from "react";

class Input extends Component {
  render() {
    const { type, id, value, style, onClickTheme, themeValue } = this.props;
    return (
      <Fragment>
        <label htmlFor={id}>
          {value}
          <input
            type={type}
            className={style}
            value={value}
            name=""
            id={id}
            onClick={onClickTheme}
            checked={themeValue === value}
          />
        </label>
      </Fragment>
    );
  }
}

export default Input;
