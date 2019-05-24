import React, { Component, Fragment}  from 'react';
import './styles.scss';

class Filters extends Component {
    render(){
        return(
            <Fragment>
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
            </Fragment>
        )
    }
}

export default Filters;
