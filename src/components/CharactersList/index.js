import React, { Component } from "react";
import CharactersCard from "../CharactersCard";
import { Link } from "react-router-dom";
import "./styles.scss";

class CharactersList extends Component {
  render() {
    const { characters } = this.props;
    return (
      <ul className="card-list">
        {characters.length ? (
          characters.map(item => {
            const { name, house, image, uuid } = item;
            return (
              <Link to={`/character/${uuid}`}>
                <li
                  className="card"
                  onClick={e => console.log("details")}
                  key={uuid}
                  id={uuid}
                >
                  <CharactersCard name={name} house={house} image={image} />
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

export default CharactersList;
