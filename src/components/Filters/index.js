import React, { Component }  from 'react';
import './styles.scss';
import Houses from '../Houses';
import Theme from '../Theme';


class Filters extends Component {
    render(){
        const {nameValue, onChangeSearch, onClickTheme, themeValue, onClickHouse, houses} = this.props;
        return(
            <form>
                <label htmlFor="search" className="title-seeker">Búsqueda</label>
                <input 
                    className="seeker"
                    type="text" 
                    name="seeker" 
                    id="seeker" 
                    value={nameValue} 
                    placeholder="Harry Potter"
                    onChange={onChangeSearch}
                />
                <fieldset>
                    <legend>Choose a house</legend>
                    <Houses onClickHouse={onClickHouse} houses={houses}/>
                </fieldset>
                <fieldset>
                    <legend>Choose a theme</legend>
                    <Theme onClickTheme={onClickTheme} themeValue={themeValue}/>
                </fieldset>
            </form>
        )
    }
}

export default Filters;
