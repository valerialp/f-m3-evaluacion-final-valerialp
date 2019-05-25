import React, { Component, Fragment } from "react";
import "./styles.scss";
import Gryffindor from "../../images/Gryffindor.png";
import Slytherin from "../../images/Slytherin.png";
import Ravenclaw from "../../images/Ravenclaw.png";
import Hufflepuff from "../../images/Hufflepuff.png";
import Hogwarts from "../../images/Hogwarts.png";

class CharactersCard extends Component {
  render() {
    let emblem;
    const { name, house, image } = this.props;
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
        <img src={image} alt={name} className="photo-card" />
        <div className="info-card">
          <h3 className="name-card">{name}</h3>
          <p className="house-card">{house}</p>
        </div>
        <img src={emblem} alt={house} className="emblem-card" />
      </Fragment>
    );
  }
}

export default CharactersCard;
