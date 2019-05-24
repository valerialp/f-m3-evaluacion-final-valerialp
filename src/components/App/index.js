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
    }
  }

  componentDidMount(){
    this.getCharacters();
  }

  getCharacters(){
    charactersFetch()
    .then(data => {
      // data.map((item,index) => {...item, uuid:index})
      return(
        this.setState({characters: data})
      )
    })
  }

  handlerFiltersNama(){

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          hola
        </header>
        <Switch>
		      <Route exact path="/" render={routerProps => (
            <Home match={routerProps.match} characters={this.state.characters} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
