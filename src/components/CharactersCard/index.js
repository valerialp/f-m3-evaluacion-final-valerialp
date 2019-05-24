import React, { Component, Fragment } from 'react';

class CharactersCard extends Component{
    render(){
        const{ name, house, image} = this.props;
        return(
            <Fragment>
                <img 
                    src={image} 
                    alt={name}
                    className="photo-card"
                />
                <h3 className="name-card">{name}</h3>
                <p className="house-card">{house}</p>
            </Fragment>
        )
    }
}

export default CharactersCard;