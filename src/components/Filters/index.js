import React, { Component, Fragment}  from 'react';

class Filters extends Component {
    render(){
        return(
            <Fragment>
                <label htmlFor="search">Búsqueda</label>
                <input 
                    type="text" 
                    name="search" 
                    id="search" 
                    value={this.props.nameValue} 
                    placeholder="Harry Potter"
                    onChange={this.props.onChangeSearch}
                />
            </Fragment>
        )
    }
}

export default Filters;
