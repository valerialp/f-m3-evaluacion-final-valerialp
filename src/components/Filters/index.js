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
                    value="" 
                    placeholder="Harry Potter"
                    onChange={e => console.log('harry')}
                />
            </Fragment>
        )
    }
}

export default Filters;
