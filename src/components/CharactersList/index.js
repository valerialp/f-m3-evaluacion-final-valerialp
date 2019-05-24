import React, { Component } from 'react';

class CharactersList extends Component{
    render(){
        return(
            <ul>
                {this.props.characters.map(item => {
                    const{ name, house, image} = item;
                    return(
                        <li className="card">
                            <img 
                            src={image} 
                            alt={name}
                            className="photo-card"
                            />
                            <h3 className="name-card">{name}</h3>
                            <p className="house-card">{house}</p>
                        </li>
                    )
                })}

            </ul>
        )
    }
}

export default CharactersList;