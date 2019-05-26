import React, { Component } from "react";
import "./styles.scss";

class Filters extends Component {
  
  render() {
    const {
      nameValue,
      onChangeSearch,
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
      </form>
    );
  }
}

export default Filters;
