import React, { Component } from 'react';
import CharactersCard from '../CharactersCard';
import { Link} from 'react-router-dom';

class CharactersList extends Component{
    render(){
        return(
            <ul className="card-list">
                {this.props.characters.map(item => {
                    const{ name, house, image, uuid} = item;
                    return(
                        <Link to={`/character/${uuid}`}>
                        <li 
                            className="card"
                            onClick={e => console.log('details')} 
                            key={uuid}
                            id={uuid}
                        >
                            <CharactersCard 
                                name={name}
                                house={house}
                                image={image}
                            />
                        </li>
                        </Link>
                    )
                })}
            </ul>
        )
    }
}

export default CharactersList;