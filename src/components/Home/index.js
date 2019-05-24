import React, { Component, Fragment } from 'react';
import Filters from '../Filters';
import CharactersList from '../CharactersList';

class Home extends Component {

    render() {
        return(
            <Fragment>
                <Filters nameValue={this.props.nameValue} onChangeSearch={this.props.onChangeSearch}/>
                <CharactersList characters={this.props.characters}/>
            </Fragment>

        )

    }
}
export default Home;