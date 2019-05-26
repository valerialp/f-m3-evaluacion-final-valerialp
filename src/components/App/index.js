import React from 'react';
import './styles.scss';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home';
import charactersFetch from '../../services/characters-fetch';
import CharactersDetails from '../CharactersDetails';


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
      const newData = []
      data.map((item,index) => {
        const user = {...item,uuid: index + 1}
        return(
         newData.push(user)
        )
      })
      
      return(
        this.setState({characters: newData})
      )
    })
  }

  handlerFiltersName(e){
    const {value} = e.target;
    this.setState({filters: {name: value}})
  }

  render() {
    return (
      <div className={'App'}>
        <header className="App-header">
        <img 
          src="https://fontmeme.com/permalink/190525/371cca28f1c19aee75f3472b7891f62b.png" 
          alt="harry potter" 
        />
        </header>
        <Switch>
          <Route
            exact
            path="/"
            render={routerProps => (
              <Home
                match={routerProps.match}
                characters={this.state.characters
                  .filter(item =>
                    item.name
                      .toUpperCase()
                      .includes(this.state.filters.name.toUpperCase())
                  )
                  .filter(
                    item =>
                      !this.state.filters.houses.length ||
                      this.state.filters.houses.includes(item.house)
                  )}
                nameValue={this.state.filters.name}
                onChangeSearch={this.handlerFiltersName}
                onClickHouse={this.handlerClickHouse}
                houses={this.state.filters.houses}
              />
            )}
          />
          <Route
            path="/character/:id"
            render={routerProps => (
              <CharactersDetails
                characters={this.state.characters}
                match={routerProps.match}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
