import React, { Component, Fragment } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class CharactersDetails extends Component {
  render() {
    const person = this.props.characters.find(
      item => item.uuid === parseInt(this.props.match.params.id)
    );
    const { loading } = this.props;
    return (
      <Fragment>
        {loading ? (
          <p>'Loading...'</p>
        ) : (
          <Fragment>
            <Link to="/">
              <p className="back">Back muggle</p>
            </Link>
            <article className="card__details">
              <img src={person.image} alt={person.name} className="card__details-photo" />
              <div className="card__details-info">
                <h3 className="card__details-name">{person.name}</h3>
                <p className="card__details-house">
                  Casa: {person.house ? person.house : "No tiene casa"}
                </p>
                <p className="card__details-birthday">
                  Nacimiento: {person.dateOfBirth ? person.dateOfBirth : "Nadie lo sabe"}
                </p>
                <p className="card__details-patronus">
                  Patronus: {person.patronus ? person.patronus : "Se le comen los dementores"}
                </p>
                <p className="card__details-alive">
                  Estado: {person.alive ? "Vivo" : "Muertisimo"}
                </p>
              </div>
            </article>
          </Fragment>
        )}
      </Fragment>
    );
  }
}

CharactersDetails.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired
};

export default CharactersDetails;
