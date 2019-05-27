import React, { Component, Fragment } from 'react';
import Filters from '../Filters';
import CharactersList from '../CharactersList';
import PropTypes from 'prop-types';

class Home extends Component {

    render() {
        const {
          nameValue,
          onChangeSearch,
          characters,
          onClickColapsable,
          open,
        } = this.props;
        return (
          <Fragment>
            <Filters
              nameValue={nameValue}
              onChangeSearch={onChangeSearch}
              onClickColapsable={onClickColapsable}
              open={open}
            />
            <CharactersList characters={characters} />
          </Fragment>
        );
      }
    
}

Home.propTypes = {
  nameValue: PropTypes.string.isRequired,
  onChangeSearch: PropTypes.func.isRequired,
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Home;