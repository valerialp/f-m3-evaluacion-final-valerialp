import React, { Component } from "react";
import CharactersCard from "../CharactersCard";
import { Link } from "react-router-dom";
import "./styles.scss";
import PropTypes from 'prop-types';

class CharactersList extends Component {
  render() {
    const { characters } = this.props;
    return (
      <ul className="card-list">
        {characters.length ? (
          characters.map(item => {
            const { name, house, image, uuid, alive } = item;
            return (
              <Link to={`/character/${uuid}`} key={uuid}>
                <li
                  className="card"
                  key={uuid}
                  id={uuid}
                >
                  <CharactersCard
                    name={name}
                    house={house}
                    alive={alive}
                    image={image}
                  />
                </li>
              </Link>
            );
          })
        ) : (
          <p>Aquí no hay nada que ver, circule muggle.</p>
        )}
      </ul>
    );
  }
}

CharactersList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CharactersList;
