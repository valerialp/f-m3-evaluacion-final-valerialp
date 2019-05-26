import React, { Component, Fragment } from "react";
import Input from "../Input";

class Theme extends Component {
  render() {
    const {onClickTheme,themeValue} = this.props;
    return (
      <Fragment>
        <Input type="radio" id="theme" value={true} onClickTheme={onClickTheme} themeValue={themeValue}/>
        <Input type="radio" id="theme" value={false} onClickTheme={onClickTheme} themeValue={themeValue}/>
      </Fragment>
    );
  }
}

export default Theme;
