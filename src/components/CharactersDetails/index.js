import React, { Component, Fragment } from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class CharactersDetails extends Component {
    render() {
        const person = this.props.characters.find(
          item => item.uuid === parseInt(this.props.match.params.id)
        );
        const { image, name, house, dateOfBirth, patronus, alive } = person;
    
        return (
          <Fragment>
            <Link to="/">
              <p className="back">Back muggle</p>
            </Link>
            <article className="card__details">
              <img src={image} alt={name} className="card__details-photo" />
              <div className="card__details-info">
                <h3 className="card__details-name">{name}</h3>
                <p className="card__details-house">Casa: {house ? house : 'No tiene casa'}</p>
                <p className="card__details-birthday">Nacimiento: {dateOfBirth ? dateOfBirth : 'Nadie lo sabe'}</p>
                <p className="card__details-patronus">Patronus: {patronus ? patronus : 'Se le comen los dementores'}</p>
                <p className="card__details-alive">
                  Estado: {alive ? 'Vivo' : 'Muertisimo'}
                </p>
              </div>
            </article>
          </Fragment>
        );
      }
    
}

CharactersDetails.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CharactersDetails;