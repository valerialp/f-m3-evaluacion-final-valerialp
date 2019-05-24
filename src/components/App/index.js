import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home';
import charactersFetch from '../../services/characters-fetch';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters:[],
      filters:{
        name:'',
      }
    }

    this.handlerFiltersName = this.handlerFiltersName.bind(this);
  }

  componentDidMount(){
    this.getCharacters();
  }

  getCharacters(){
    charactersFetch()
    .then(data => {
      data.map((item,index) => {
        return(
          {...item, uuid:index + 1}
        )
      })
      return(
        this.setState({characters: data})
      )
    })
  }

  handlerFiltersName(e){
    const {value} = e.target;
    this.setState({filters: {name: value}})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          hola
        </header>
        <Switch>
		      <Route exact path="/" render={routerProps => (
            <Home 
            match={routerProps.match} 
            characters={this.state.characters.filter(item => item.name.includes(this.state.filters.name))}
            nameValue={this.state.filters.name}
            onChangeSearch={this.handlerFiltersName}
             />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
