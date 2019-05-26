import React, { Component, Fragment } from "react";
import Filters from "../Filters";
import CharactersList from "../CharactersList";

class Home extends Component {
  render() {
    const {
      nameValue,
      onChangeSearch,
      characters,
      onClickHouse,
      houses
    } = this.props;
    return (
      <Fragment>
        <Filters
          houses={houses}
          nameValue={nameValue}
          onChangeSearch={onChangeSearch}
          onClickHouse={onClickHouse}
        />
        <CharactersList characters={characters} />
      </Fragment>
    );
  }
}
export default Home;
