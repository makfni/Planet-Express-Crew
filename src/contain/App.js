import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      crew: [],
      searchfield: '' 
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ crew: users})});
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { crew, searchfield } = this.state;
    const filteredCrew = crew.filter(crew =>{
      return crew.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !crew.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>PLANET EXPRESS CREW</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <ErrorBoundary> 
              <CardList crew={filteredCrew} />
            </ErrorBoundary>
           
          </Scroll>
        </div>
      );
  }
}

export default App;