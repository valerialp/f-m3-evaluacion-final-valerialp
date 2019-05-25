import React, { Component, Fragment } from 'react';

class Input extends Component{
    render(){
        const {type, id, value,style, onClickTheme, themeValue} =this.props;
        return(
            <Fragment>
                <label htmlFor={id}>{value}</label>
                <input type={type} className={style} value={value} name="" id={id} onClick={onClickTheme} checked={themeValue === value} />
            </Fragment>
        )
    }
}

export default Input;