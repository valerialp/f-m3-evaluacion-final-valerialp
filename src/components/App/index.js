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
    .then(data => this.setState({characters: data}))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          hola
        </header>
        <Switch>
		      <Route exact path="/" component={Home} />
		      {/* <Route path="/about" component={Filters} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
