import React, { Component, Fragment } from "react";
import "./styles.scss";

class Houses extends Component {
  render() {
    const {houses, onClickHouse} = this.props;
    return (
      <Fragment>
        <label htmlFor="Gryffindor">Gryffindor</label>
        <input
          type="checkbox"
          className="gryffindor"
          value="Gryffindor"
          name="Gryffindor"
          id="Gryffindor"
          onClick={onClickHouse}
          checked={houses.includes('Gryffindor')}
        />
        <label htmlFor="Slytherin">Slytherin</label>
        <input
          type="checkbox"
          className="slytherin"
          value="Slytherin"
          name="Slytherin"
          id="Slytherin"
          onClick={onClickHouse}
          checked={houses.includes('Slytherin')}
        />
        <label htmlFor="Ravenclaw">Ravenclaw</label>
        <input
          type="checkbox"
          className="ravenclaw"
          value="Ravenclaw"
          name="Ravenclaw"
          id="Ravenclaw"
          onClick={onClickHouse}
          checked={houses.includes('Ravenclaw')}
        />
        <label htmlFor="Hufflepuff">Hufflepuff</label>
        <input
          type="checkbox"
          className="hufflepuff"
          value="Hufflepuff"
          name="Hufflepuff"
          id="Hufflepuff"
          onClick={onClickHouse}
          checked={houses.includes('Hufflepuff')}
        />
      </Fragment>
    );
  }
}

export default Houses;
