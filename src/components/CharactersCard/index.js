import React, { Component, Fragment } from 'react';
import './styles.scss';
import Gryffindor from "../../images/Gryffindor.png";
import Slytherin from "../../images/Slytherin.png";
import Ravenclaw from "../../images/Ravenclaw.png";
import Hufflepuff from "../../images/Hufflepuff.png";
import Hogwarts from "../../images/Hogwarts.png";
import PropTypes from 'prop-types';


class CharactersCard extends Component{
    render() {
        let emblem;
        const { name, house, image, alive } = this.props;
        if (house === "Gryffindor") {
          emblem = Gryffindor;
        } else if (house === "Slytherin") {
          emblem = Slytherin;
        } else if (house === "Ravenclaw") {
          emblem = Ravenclaw;
        } else if (house === "Hufflepuff") {
          emblem = Hufflepuff;
        } else if (house === "") {
          emblem = Hogwarts;
        }
        return (
          <Fragment>
            <img src={image} alt={name} className="card-photo" />
            <div className="card-info">
              <h3 className="card-name">{name}</h3>
              <i className={alive ? '' : "far fa-dizzy"}> </i>
              <p className="card-alive">{alive ? 'Vivo' : 'Muerto'}</p>
            </div>
            <img src={emblem} alt={house} className="card-emblem" />
          </Fragment>
        );
      }
}

CharactersCard.propTypes = {
  name: PropTypes.string.isRequired,
  house: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alive:PropTypes.bool.isRequired,
};

export default CharactersCard;