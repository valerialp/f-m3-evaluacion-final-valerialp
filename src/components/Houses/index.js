import React, { Component, Fragment } from "react";
import "./styles.scss";

class Houses extends Component {
  render() {
    const { houses, onClickHouse } = this.props;
    return (
      <Fragment>
        <label className="checkboxs" htmlFor="Gryffindor">
          Gryffindor
          <input
            type="checkbox"
            className="gryffindor"
            value="Gryffindor"
            name="Gryffindor"
            id="Gryffindor"
            onClick={onClickHouse}
            checked={houses.includes("Gryffindor")}
          />
        </label>
        <label className="checkboxs" htmlFor="Slytherin">
          Slytherin
          <input
            type="checkbox"
            className="slytherin"
            value="Slytherin"
            name="Slytherin"
            id="Slytherin"
            onClick={onClickHouse}
            checked={houses.includes("Slytherin")}
          />
        </label>
        <label className="checkboxs" htmlFor="Ravenclaw">
          Ravenclaw
          <input
            type="checkbox"
            className="ravenclaw"
            value="Ravenclaw"
            name="Ravenclaw"
            id="Ravenclaw"
            onClick={onClickHouse}
            checked={houses.includes("Ravenclaw")}
          />
        </label>
        <label className="checkboxs" htmlFor="Hufflepuff">
          Hufflepuff
          <input
            type="checkbox"
            className="hufflepuff"
            value="Hufflepuff"
            name="Hufflepuff"
            id="Hufflepuff"
            onClick={onClickHouse}
            checked={houses.includes("Hufflepuff")}
          />
        </label>
      </Fragment>
    );
  }
}

export default Houses;
