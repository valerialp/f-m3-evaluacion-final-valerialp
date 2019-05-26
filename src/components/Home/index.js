import React, { Component, Fragment } from 'react';
import Filters from '../Filters';
import CharactersList from '../CharactersList';

class Home extends Component {

    render() {
        const {
          nameValue,
          onChangeSearch,
          characters,
        } = this.props;
        return (
          <Fragment>
            <Filters
              nameValue={nameValue}
              onChangeSearch={onChangeSearch}
            />
            <CharactersList characters={characters} />
          </Fragment>
        );
      }
    
}
export default Home;