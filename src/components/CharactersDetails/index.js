import React, { Component } from 'react';

class CharactersDetails extends Component {
    render(){
        const person = this.props.characters.filter(item => item.uuid === parseInt(this.props.match.params.id));
        const { image, name, house, dateOfBirth, patronus, alive} = person[0];

        return(
                    <div>
                      <img 
                            src={image} 
                            alt={name}
                            className="photo-card__details"
                        />
                        <h3 className="name-card__details">{name}</h3>
                        <p className="house-card__details">Casa: {house}</p>
                        <p className="birthday-card__details">Nacimiento: {dateOfBirth}</p>
                        <p className="patronus-card__details">Patronus: {patronus}</p>
                        <p className="alive-card__details">Estado: {alive ? 'Vivo' : 'Muertisimo'}</p>
                    </div>
            
        )
    }
}

export default CharactersDetails;