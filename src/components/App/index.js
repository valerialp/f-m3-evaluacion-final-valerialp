import React,{ Component } from 'react';
import './styles.scss';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home';
import charactersFetch from '../../services/characters-fetch';
import CharactersDetails from '../CharactersDetails';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters:[],
      filters:{
        name:'',
        houses: [],
        theme:'',
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

  handlerClickHouse(e){
    const { value } = e.currentTarget;
    this.setState(prevState =>{
      return{checkbox: prevState.checkbox.find(item => item === value)
     ? prevState.checkbox.filter(item => item !== value)
     : prevState.checkbox.concat(value)
      } 
   })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img 
          src="https://fontmeme.com/permalink/190524/c189e512a1a7e50707210d0a0aefa070.png" 
          alt="fuente-de-harry-potter" 
        />
        </header>
        <Switch>
		      <Route exact path="/" render={routerProps => (
            <Home 
              match={routerProps.match} 
              characters={this.state.characters.filter(item => item.name.toUpperCase().includes(this.state.filters.name.toUpperCase()))}
              nameValue={this.state.filters.name}
              onChangeSearch={this.handlerFiltersName}
             />
            )}
          />
          <Route path="/character/:id" render={routerProps => (
            <CharactersDetails characters={this.state.characters} match={routerProps.match}/>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
