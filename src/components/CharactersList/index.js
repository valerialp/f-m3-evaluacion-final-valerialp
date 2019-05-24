import React, { Component } from 'react';

class CharactersList extends Component{
    render(){
        return(
            <ul>
                {this.props.characters.map(item => {
                    const{ name, house, image} = item;
                    return(
                        <li>
                            <img src={image} alt={name}/>
                            <h3>{name}</h3>
                            <p>{house}</p>
                        </li>
                    )
                })}

            </ul>
        )
    }
}

export default CharactersList;