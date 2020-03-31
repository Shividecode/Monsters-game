import React from 'react';
import './App.css';
import { CardList } from './components/cards/card-list.components';
import './components/cards/search-box.styles.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {

    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1 className="main-title">Monsters-Ride</h1>
        <input className='search' type='search' placeholder='search Monster'
          onChange={e => this.setState({ searchField: e.target.value })}
        />

        <CardList monsters={filteredMonsters} />

      </div>
    );
  }
}
export default App;
