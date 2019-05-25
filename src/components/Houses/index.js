import React, { Component, Fragment } from "react";
import "./styles.scss";

class Houses extends Component {
  render() {
    return (
      <Fragment>
        <label hhtmlFor="Gryffindor">Gryffindor</label>
        <input
          type="checkbox"
          className="gryffindor"
          value="gryffindor"
          name="Gryffindor"
          id="Gryffindor"
          onClick={e => console.log('hola')}
        //   checked={}
        />
        <label hhtmlFor="Slytherin">Slytherin</label>
        <input
          type="checkbox"
          className="slytherin"
          value="slytherin"
          name="Slytherin"
          id="Slytherin"
          onClick={e => console.log('hola')}
        //   checked={}
        />
        <label hhtmlFor="Ravenclaw">Ravenclaw</label>
        <input
          type="checkbox"
          className="ravenclaw"
          value="ravenclaw"
          name="Ravenclaw"
          id="Ravenclaw"
          onClick={e => console.log('hola')}
        //   checked={}
        />
        <label hhtmlFor="Hufflepuff">Hufflepuff</label>
        <input
          type="checkbox"
          className="hufflepuff"
          value="hufflepuff"
          name="Hufflepuff"
          id="Hufflepuff"
          onClick={e => console.log('hola')}
        //   checked={}
        />
      </Fragment>
    );
  }
}

export default Houses;
