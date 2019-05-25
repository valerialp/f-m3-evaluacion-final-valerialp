import React, { Component }  from 'react';
import './styles.scss';
import Houses from '../Houses';
import Theme from '../Theme';


class Filters extends Component {
    render(){
        return(
            <form>
                <label htmlFor="search" className="title-seeker">Búsqueda</label>
                <input 
                    className="seeker"
                    type="text" 
                    name="seeker" 
                    id="seeker" 
                    value={this.props.nameValue} 
                    placeholder="Harry Potter"
                    onChange={this.props.onChangeSearch}
                />
                <fieldset>
                    <legend>Choose a house</legend>
                    <Houses />
                </fieldset>
                <fieldset>
                    <legend>Choose a theme</legend>
                    <Theme />
                </fieldset>
            </form>
        )
    }
}

export default Filters;
