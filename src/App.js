import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          
        </header>
        <Switch>
		      <Route exact path="/" component={Home} />
		      <Route path="/about" component={Filters} />
        </Switch>
      </div>
    );
  }
}

export default App;
