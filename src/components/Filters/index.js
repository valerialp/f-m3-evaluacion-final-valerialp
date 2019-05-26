import React, { Component } from "react";
import "./styles.scss";
import Houses from "../Houses";
import Theme from "../Theme";

class Filters extends Component {
  render() {
    const {
      nameValue,
      onChangeSearch,
      onClickTheme,
      themeValue,
      onClickHouse,
      houses
    } = this.props;
    return (
      <form className="main-form">
          <div className="seeker-form">
            <button type="button" className="btn btn-seeker">
              <i className="fas fa-search"> </i>
            </button>
            <section className="title-seeker">
              <label htmlFor="search" className="sub__title-seeker">
                Búsqueda
              </label>
              <input
                className="seeker"
                type="text"
                name="seeker"
                id="seeker"
                value={nameValue}
                placeholder="Harry Potter"
                onChange={onChangeSearch}
              />
            </section>
          </div>
          <div className="house-form">
            <button type="button" className="btn btn-house">
              <i className="fas fa-bolt"> </i>
            </button>
            <section className="section-houses">
              <Houses onClickHouse={onClickHouse} houses={houses} />
            </section>
          </div>
          <div className="theme-form">
          </div>
      </form>
    );
  }
}

export default Filters;
