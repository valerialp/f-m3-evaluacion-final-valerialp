import React, { Component, Fragment } from 'react';
import './styles.scss';

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
              <p className="card-alive">{alive ? 'Vivo' : 'Muerto'}</p>
            </div>
            <img src={emblem} alt={house} className="card-emblem" />
          </Fragment>
        );
      }
}

export default CharactersCard;