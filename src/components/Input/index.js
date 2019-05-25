import React, { Component, Fragment } from 'react';

class Input extends Component{
    render(){
        const {type, id, value} =this.props;
        return(
            <Fragment>
                <label hhtmlFor={id}>{value}</label>
                <input type={type} className="" value={value} name="" id={id} />
            </Fragment>
        )
    }
}

export default Input;